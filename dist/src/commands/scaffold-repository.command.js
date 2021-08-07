"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaffoldRepositoryCommand = void 0;
const clipanion_1 = require("clipanion");
const t = __importStar(require("typanion"));
const directory_utils_1 = require("../utils/directory-utils");
const formatter_utils_1 = require("../utils/formatter-utils");
const spinner_util_1 = require("../utils/spinner-util");
/**
 * ScaffoldRepositoryCommand
 *
 * Scaffolds a Repository.
 */
class ScaffoldRepositoryCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        // ===================================================
        // The command Options
        // ===================================================
        /**
         * repositoryName
         *
         * The name of the repository
         */
        this.repositoryName = clipanion_1.Option.String({ required: true, name: 'name', validator: t.isString() });
        /**
         * module
         *
         * the module where the repository will be added.
         */
        this.module = clipanion_1.Option.String({ required: true, name: 'module', validator: t.isString() });
        /**
         * identity
         *
         * Indicates that the repository should be tasked with assigning identity.
         */
        this.identity = clipanion_1.Option.Boolean('-i', { description: 'Indicates the repository will be tasked with assigning identity.', required: false });
    }
    async execute() {
        this.context.stdout.write(formatter_utils_1.formatLogInfo('Creating repository.\n'));
        // validation
        spinner_util_1.startSpinner(formatter_utils_1.formatLogInfo('Verifying...'));
        try {
            // make sure we are in a Domeniere project.
            if (!await directory_utils_1.isDomeniereProject(process.cwd())) {
                throw new Error('Not a Domeniere Project.');
            }
            // make sure the module exists.
            if (!await directory_utils_1.moduleExists(this.module, process.cwd())) {
                throw new Error(`Module ${formatter_utils_1.formatClassName(this.module)} does not exist.`);
            }
            // make sure the repository does not already exist
            if (await directory_utils_1.repositoryExists(this.repositoryName, this.module, process.cwd())) {
                throw new Error(`Repository ${formatter_utils_1.formatClassName(this.repositoryName)}Repository already exists in module ${formatter_utils_1.formatClassName(this.module)}`);
            }
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo('Validation complete.'));
        }
        catch (e) {
            spinner_util_1.stopSpinnerWithFailure(formatter_utils_1.formatLogError('Validation failed.'));
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            return 1;
        }
        // create the repository
        spinner_util_1.startSpinner(formatter_utils_1.formatLogInfo("Writing repository files..."));
        try {
            // create the Repository directory if it does not already exist.
            if (!await directory_utils_1.repositoriesDirectoryExists(this.module, process.cwd())) {
                // create the Repositorys directory.
                await directory_utils_1.createRepositoriesDirectoryForModule(this.module, process.cwd());
                await directory_utils_1.exposeRepositoriesWell(this.module, process.cwd());
            }
            // create the repository
            await directory_utils_1.createRepository(this.repositoryName, this.module, process.cwd(), this.identity);
            // add the repository to the repository well
            await directory_utils_1.exposeRepository(this.repositoryName, this.module, process.cwd());
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo("Successfully created repository files."));
            this.context.stdout.write(formatter_utils_1.formatLogInfo(`Successfully created repository ${formatter_utils_1.formatClassName(this.repositoryName)}Repository in module ${formatter_utils_1.formatClassName(this.module)}\n`));
            return 0;
        }
        catch (e) {
            spinner_util_1.stopSpinnerWithFailure(formatter_utils_1.formatLogError("Failed to write files."));
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            return 1;
        }
    }
}
exports.ScaffoldRepositoryCommand = ScaffoldRepositoryCommand;
ScaffoldRepositoryCommand.paths = [
    ['create', 'repository'],
];
// ============================================
// usage information
// ============================================
ScaffoldRepositoryCommand.usage = {
    category: 'Templates',
    description: "Creates a Repository",
    details: "Creates a Repository inside the specified module.",
};
