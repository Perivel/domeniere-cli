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
exports.ScaffoldModuleCommand = void 0;
const clipanion_1 = require("clipanion");
const t = __importStar(require("typanion"));
const directory_utils_1 = require("../utils/directory-utils");
const formatter_utils_1 = require("../utils/formatter-utils");
const spinner_util_1 = require("../utils/spinner-util");
/**
 * ScaffoldModuleCommand
 *
 * Scaffolds a Module.
 */
class ScaffoldModuleCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        // arguments.
        this.moduleName = clipanion_1.Option.String({ required: true, name: 'domain-name', validator: t.isString() });
    }
    async execute() {
        this.context.stdout.write(formatter_utils_1.formatLogInfo(`Creating module\n`));
        // vallidate we are in a domeniere project.
        try {
            if (!await directory_utils_1.isDomeniereProject(process.cwd())) {
                throw new Error('Not a Domeniere project');
            }
        }
        catch (e) {
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            return 1;
        }
        try {
            // make sure the current directory is a Domeniere Root
            spinner_util_1.startSpinner(formatter_utils_1.formatLogInfo("Verifying..."));
            // make sure the module does not already exist.
            const moduleName = formatter_utils_1.formatClassName(this.moduleName);
            const modulePath = directory_utils_1.moduleDirectoryPath(this.moduleName, process.cwd());
            if (await directory_utils_1.moduleExists(this.moduleName, process.cwd())) {
                throw new Error('Module already exists.');
            }
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo("Verification complete."));
            // create the module.
            spinner_util_1.startSpinner(formatter_utils_1.formatLogInfo(`Writing module files...`));
            await directory_utils_1.createModule(moduleName, process.cwd());
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo(`Successfully created module files.`));
            // add module to index
            spinner_util_1.startSpinner(formatter_utils_1.formatLogInfo(`updating exports...`));
            await directory_utils_1.exposeModule(moduleName, process.cwd());
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo('Successfully updated exports.'));
            this.context.stdout.write(formatter_utils_1.formatLogInfo(`Successfully created module ${moduleName}\n`));
            return 0;
        }
        catch (e) {
            spinner_util_1.stopSpinnerWithFailure(formatter_utils_1.formatLogError("Somthing went wrong."));
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            return 1;
        }
    }
}
exports.ScaffoldModuleCommand = ScaffoldModuleCommand;
ScaffoldModuleCommand.paths = [
    ['create', 'module'],
];
// This information is shown on the help command.
ScaffoldModuleCommand.usage = {
    category: 'Templates',
    description: "Creates a Module",
    details: "Creates a Module within an existing domain.",
};
