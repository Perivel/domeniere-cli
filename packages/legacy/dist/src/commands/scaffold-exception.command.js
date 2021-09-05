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
exports.ScaffoldExceptionCommand = void 0;
const clipanion_1 = require("clipanion");
const t = __importStar(require("typanion"));
const directory_utils_1 = require("../utils/directory-utils");
const formatter_utils_1 = require("../utils/formatter-utils");
const spinner_util_1 = require("../utils/spinner-util");
/**
 * ScaffoldExceptionCommand
 *
 * Scaffolds an Exception.
 */
class ScaffoldExceptionCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        // ===================================================
        // The command Options
        // ===================================================
        /**
         * exceptionName
         *
         * The name of the exception
         */
        this.exceptionName = clipanion_1.Option.String({ required: true, name: 'name', validator: t.isString() });
        /**
         * module
         *
         * the module where the exception will be added.
         */
        this.module = clipanion_1.Option.String({ required: true, name: 'module', validator: t.isString() });
    }
    async execute() {
        this.context.stdout.write(formatter_utils_1.formatLogInfo('Creating Exception.\n'));
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
            // make sure the exception does not already exist
            if (await directory_utils_1.exceptionExists(this.exceptionName, this.module, process.cwd())) {
                throw new Error(`Exception ${formatter_utils_1.formatClassName(this.exceptionName)}Exception already exists in module ${formatter_utils_1.formatClassName(this.module)}`);
            }
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo('Validation complete.'));
        }
        catch (e) {
            spinner_util_1.stopSpinnerWithFailure(formatter_utils_1.formatLogError('Validation failed.'));
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            return 1;
        }
        // create the exception
        spinner_util_1.startSpinner(formatter_utils_1.formatLogInfo("Writing Exception files..."));
        try {
            // create the exceptions directory if it does not already exist.
            if (!await directory_utils_1.exceptionsDirectoryExists(this.module, process.cwd())) {
                // create the exceptions directory.
                await directory_utils_1.createExceptionsDirectoryForModule(this.module, process.cwd());
                await directory_utils_1.exposeExceptionsWell(this.module, process.cwd());
            }
            // create the exception
            await directory_utils_1.createException(this.exceptionName, this.module, process.cwd());
            // add the exception to the dtos well
            await directory_utils_1.exposeException(this.exceptionName, this.module, process.cwd());
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo("Successfully created Exception files."));
            this.context.stdout.write(formatter_utils_1.formatLogInfo(`Successfully created Exception ${formatter_utils_1.formatClassName(this.exceptionName)}Exception in module ${formatter_utils_1.formatClassName(this.module)}\n`));
            return 0;
        }
        catch (e) {
            spinner_util_1.stopSpinnerWithFailure(formatter_utils_1.formatLogError("Failed to write files."));
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            return 1;
        }
    }
}
exports.ScaffoldExceptionCommand = ScaffoldExceptionCommand;
ScaffoldExceptionCommand.paths = [
    ['create', 'exception'],
];
// ============================================
// usage information
// ============================================
ScaffoldExceptionCommand.usage = {
    category: 'Templates',
    description: "Creates an Exception",
    details: "Creates an Exception inside the specified module.",
};
