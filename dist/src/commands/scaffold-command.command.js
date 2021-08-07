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
exports.ScaffoldCommandCommand = void 0;
const clipanion_1 = require("clipanion");
const t = __importStar(require("typanion"));
const directory_utils_1 = require("../utils/directory-utils");
const formatter_utils_1 = require("../utils/formatter-utils");
const spinner_util_1 = require("../utils/spinner-util");
/**
 * ScaffoldCommandCommand
 *
 * Scaffolds an Command.
 */
class ScaffoldCommandCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        // ===================================================
        // The command Options
        // ===================================================
        /**
         * commandName
         *
         * The name of the command
         */
        this.commandName = clipanion_1.Option.String({ required: true, name: 'name', validator: t.isString() });
        /**
         * module
         *
         * the module where the command will be added.
         */
        this.module = clipanion_1.Option.String({ required: true, name: 'module', validator: t.isString() });
    }
    async execute() {
        this.context.stdout.write(formatter_utils_1.formatLogInfo('Creating Command.\n'));
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
            // make sure the command does not already exist
            if (await directory_utils_1.commandExists(this.commandName, this.module, process.cwd())) {
                throw new Error(`Command ${formatter_utils_1.formatClassName(this.commandName)}Command already exists in module ${formatter_utils_1.formatClassName(this.module)}`);
            }
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo('Validation complete.'));
        }
        catch (e) {
            spinner_util_1.stopSpinnerWithFailure(formatter_utils_1.formatLogError('Validation failed.'));
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            return 1;
        }
        // create the command
        spinner_util_1.startSpinner(formatter_utils_1.formatLogInfo("Writing Command files..."));
        try {
            // create the services directory if it does not already exist.
            if (!await directory_utils_1.servicesDirectoryExists(this.module, process.cwd())) {
                // create the services directory.
                await directory_utils_1.createServicesDirectoryForModule(this.module, process.cwd());
                await directory_utils_1.exposeServicesWell(this.module, process.cwd());
            }
            // create the command
            await directory_utils_1.createCommand(this.commandName, this.module, process.cwd());
            // add the command to the values well
            await directory_utils_1.exposeCommand(this.commandName, this.module, process.cwd());
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo("Successfully created command files."));
            this.context.stdout.write(formatter_utils_1.formatLogInfo(`Successfully created Command ${formatter_utils_1.formatClassName(this.commandName)}Command in module ${formatter_utils_1.formatClassName(this.module)}\n`));
            return 0;
        }
        catch (e) {
            spinner_util_1.stopSpinnerWithFailure(formatter_utils_1.formatLogError("Failed to write files."));
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            return 1;
        }
    }
}
exports.ScaffoldCommandCommand = ScaffoldCommandCommand;
ScaffoldCommandCommand.paths = [
    ['create', 'command'],
];
// ============================================
// usage information
// ============================================
ScaffoldCommandCommand.usage = {
    category: 'Templates',
    description: "Creates a Command",
    details: "Creates a Command inside the specified module.",
};
