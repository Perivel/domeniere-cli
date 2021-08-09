import {
    Command,
    Option
} from 'clipanion';
import {
    paramCase
} from 'change-case';
import {
    prompt
} from 'enquirer';
import * as t from 'typanion';
import * as Path from 'path';
import {
    pathExists,
    getAbsolutePath,
    scaffoldDomainDirectory,
    deleteDomainDirectory
} from './../utils/directory-utils';
import { PackageManager } from '../utils/util-types';
import { runShellCommand } from '../utils/child-process-utils';
import { ScaffoldPromptResponse } from '../interfaces/enquirer-response.interface';
import {
    formatLogError,
    formatLogInfo
} from '../utils/formatter-utils';
import {
    startSpinner,
    stopSpinnerWithSuccess,
    stopSpinnerWithFailure
} from '../utils/spinner-util';

/**
 * ScaffoldDomainCommand
 * 
 * A Command to scaffold a new Domain.
 */

export class ScaffoldDomainCommand extends Command {
    static paths = [["new"]];

    // This information is shown on the help command.
    static usage = {
        //category: 'Domains',
        description: "Creates a Domeniere domain.",
        details: "Creates a new Domeniere Domain.",
    }

    domainName = Option.String({ required: true, name: "domain-name", validator: t.isString() });

    public async execute(): Promise<number> {

        try {
            // ensure the directory is enabled.
            const dirPath = getAbsolutePath(paramCase(this.domainName));

            if (await pathExists(dirPath)) {
                throw new Error(`Directory ${dirPath} already in use.`);
            }
        }
        catch (e) {
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }

        // prompt the user for the the description and the package manager
        let inputData: ScaffoldPromptResponse|null = null;

        try {
            inputData = await prompt<ScaffoldPromptResponse>([
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
                            value: PackageManager.NPM.toString(),
                            //hint: 'The default NodeJS package manager.'
                        },
                        {
                            name: 'yarn',
                            value: PackageManager.YARN.toString(),
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
                    validate: async (value: string): Promise<boolean> => {
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
            this.context.stdout.write(formatLogError(`Error: Could not create domain`));
            return 1;
        }

        try {
            // scaffold the project.
            this.context.stdout.write(formatLogInfo(`Creating Domain ${this.domainName}.\n`));

            // generate description
            const description = inputData!.description;
            const packageManager = inputData!.packageManager === PackageManager.NPM.toString() ? PackageManager.NPM : PackageManager.YARN;

            // scaffold the domain
            startSpinner(formatLogInfo(`Scaffolding domain...\n`));
            await scaffoldDomainDirectory(this.domainName, description, inputData!.author, inputData!.repository, inputData!.license, packageManager);
            stopSpinnerWithSuccess(formatLogInfo(`Successfully scaffolded domain.`));

            // install the dependencies.
            startSpinner(formatLogInfo("Installing dependencies...\n"))
            const cmdBinary = packageManager === PackageManager.YARN ? `yarn` : `npm`;
            const cmdArgs = packageManager === PackageManager.YARN ? ` add domeniere swindle` : `install domeniere swindle`;
            await runShellCommand(cmdBinary, [cmdArgs], Path.resolve(process.cwd(), paramCase(this.domainName)));
            stopSpinnerWithSuccess(formatLogInfo(`Successfuuly installed dependencies.\n`));
            this.context.stdout.write(formatLogInfo(`Successfuuly created Domain ${this.domainName}\n`));
        }
        catch (e) {
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            stopSpinnerWithFailure(formatLogError(`Error: ${(e as Error).message}\n`));
            await deleteDomainDirectory(this.domainName);
            return 1;
        }

        return 0;
    }
}