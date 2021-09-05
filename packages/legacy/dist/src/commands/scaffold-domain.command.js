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
exports.ScaffoldDomainCommand = void 0;
const clipanion_1 = require("clipanion");
const change_case_1 = require("change-case");
const enquirer_1 = require("enquirer");
const t = __importStar(require("typanion"));
const Path = __importStar(require("path"));
const directory_utils_1 = require("./../utils/directory-utils");
const util_types_1 = require("../utils/util-types");
const child_process_utils_1 = require("../utils/child-process-utils");
const formatter_utils_1 = require("../utils/formatter-utils");
const spinner_util_1 = require("../utils/spinner-util");
/**
 * ScaffoldDomainCommand
 *
 * A Command to scaffold a new Domain.
 */
class ScaffoldDomainCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        this.domainName = clipanion_1.Option.String({ required: true, name: "domain-name", validator: t.isString() });
    }
    async execute() {
        try {
            // ensure the directory is enabled.
            const dirPath = directory_utils_1.getAbsolutePath(change_case_1.paramCase(this.domainName));
            if (await directory_utils_1.pathExists(dirPath)) {
                throw new Error(`Directory ${dirPath} already in use.`);
            }
        }
        catch (e) {
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            return 1;
        }
        // prompt the user for the the description and the package manager
        let inputData = null;
        try {
            inputData = await enquirer_1.prompt([
                {
                    type: 'input',
                    name: 'description',
                    message: "Description",
                    initial: "A Domeniere library",
                },
                {
                    type: 'select',
                    name: 'packageManager',
                    message: "Choose a package manager",
                    choices: [
                        {
                            name: 'npm',
                            value: util_types_1.PackageManager.NPM.toString(),
                            //hint: 'The default NodeJS package manager.'
                        },
                        {
                            name: 'yarn',
                            value: util_types_1.PackageManager.YARN.toString(),
                            //hint: 'A NodeJS package manager developed by FaceBook.'
                        }
                    ],
                    maxChoices: 1
                },
                {
                    type: 'input',
                    name: 'author',
                    message: 'Author',
                    initial: '',
                },
                {
                    type: 'input',
                    name: 'repository',
                    message: 'Repository URL',
                    initial: '',
                    validate: async (value) => {
                        const validUrlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
                            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
                        let res = true;
                        if (value) {
                            res = validUrlPattern.test(value);
                        }
                        return res;
                    }
                },
                {
                    type: 'input',
                    name: 'license',
                    message: 'License',
                    initial: 'MIT'
                }
            ]);
        }
        catch (e) {
            // prompt failed
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: Could not create domain`));
            return 1;
        }
        try {
            // scaffold the project.
            this.context.stdout.write(formatter_utils_1.formatLogInfo(`Creating Domain ${this.domainName}.\n`));
            // generate description
            const description = inputData.description;
            const packageManager = inputData.packageManager === util_types_1.PackageManager.NPM.toString() ? util_types_1.PackageManager.NPM : util_types_1.PackageManager.YARN;
            // scaffold the domain
            spinner_util_1.startSpinner(formatter_utils_1.formatLogInfo(`Scaffolding domain...\n`));
            await directory_utils_1.scaffoldDomainDirectory(this.domainName, description, inputData.author, inputData.repository, inputData.license, packageManager);
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo(`Successfully scaffolded domain.`));
            // install the dependencies.
            spinner_util_1.startSpinner(formatter_utils_1.formatLogInfo("Installing dependencies...\n"));
            const cmdBinary = packageManager === util_types_1.PackageManager.YARN ? `yarn` : `npm`;
            const cmdArgs = packageManager === util_types_1.PackageManager.YARN ? ` add domeniere swindle` : `install domeniere swindle`;
            await child_process_utils_1.runShellCommand(cmdBinary, [cmdArgs], Path.resolve(process.cwd(), change_case_1.paramCase(this.domainName)));
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo(`Successfuuly installed dependencies.\n`));
            this.context.stdout.write(formatter_utils_1.formatLogInfo(`Successfuuly created Domain ${this.domainName}\n`));
        }
        catch (e) {
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            spinner_util_1.stopSpinnerWithFailure(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            await directory_utils_1.deleteDomainDirectory(this.domainName);
            return 1;
        }
        return 0;
    }
}
exports.ScaffoldDomainCommand = ScaffoldDomainCommand;
ScaffoldDomainCommand.paths = [["new"]];
// This information is shown on the help command.
ScaffoldDomainCommand.usage = {
    //category: 'Domains',
    description: "Creates a Domeniere domain.",
    details: "Creates a new Domeniere Domain.",
};
