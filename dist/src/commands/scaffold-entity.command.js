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
exports.ScaffoldEntityCommand = void 0;
const clipanion_1 = require("clipanion");
const t = __importStar(require("typanion"));
const directory_utils_1 = require("../utils/directory-utils");
const formatter_utils_1 = require("../utils/formatter-utils");
const spinner_util_1 = require("../utils/spinner-util");
/**
 * ScaffoldEntityCommand
 *
 * Scaffolds an Entity.
 */
class ScaffoldEntityCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        // ===================================================
        // The command Options
        // ===================================================
        /**
         * entityName
         *
         * The name of the entity
         */
        this.entityName = clipanion_1.Option.String({ required: true, name: 'name', validator: t.isString() });
        /**
         * module
         *
         * the module where the entity will be added.
         */
        this.module = clipanion_1.Option.String({ required: true, name: 'module', validator: t.isString() });
        /**
         * timestamped
         *
         * Indicates that the entity should be timestamped.
         */
        this.timestamped = clipanion_1.Option.Boolean('-t', { description: 'Indicates the entity will be timestamped.', required: false });
    }
    async execute() {
        this.context.stdout.write(formatter_utils_1.formatLogInfo('Creating Entity.\n'));
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
            // make sure the entity does not already exist
            if (await directory_utils_1.entityExists(this.entityName, this.module, process.cwd())) {
                throw new Error(`Entity ${formatter_utils_1.formatClassName(this.entityName)} already exists in module ${formatter_utils_1.formatClassName(this.module)}`);
            }
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo('Validation complete.'));
        }
        catch (e) {
            spinner_util_1.stopSpinnerWithFailure(formatter_utils_1.formatLogError('Validation failed.'));
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            return 1;
        }
        // create the Entity
        spinner_util_1.startSpinner(formatter_utils_1.formatLogInfo("Writing Entity files..."));
        try {
            // create the entities directory if it does not already exist.
            if (!await directory_utils_1.entitiesDirectoryExists(this.module, process.cwd())) {
                // create the entities directory.
                await directory_utils_1.createEntitiesDirectoryForModule(this.module, process.cwd());
                await directory_utils_1.exposeEntitiesWell(this.module, process.cwd());
            }
            // create the entity
            await directory_utils_1.createEntity(this.entityName, this.module, process.cwd(), this.timestamped);
            // add the entity to the values well
            await directory_utils_1.exposeEntity(this.entityName, this.module, process.cwd());
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo("Successfully created entity files."));
            this.context.stdout.write(formatter_utils_1.formatLogInfo(`Successfully created Entity ${formatter_utils_1.formatClassName(this.entityName)} in module ${formatter_utils_1.formatClassName(this.module)}\n`));
            return 0;
        }
        catch (e) {
            spinner_util_1.stopSpinnerWithFailure(formatter_utils_1.formatLogError("Failed to write files."));
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            return 1;
        }
    }
}
exports.ScaffoldEntityCommand = ScaffoldEntityCommand;
ScaffoldEntityCommand.paths = [
    ['create', 'entity'],
];
// ============================================
// usage information
// ============================================
ScaffoldEntityCommand.usage = {
    category: 'Templates',
    description: "Creates an Entity",
    details: "Creates an Entity inside the specified module.",
};
