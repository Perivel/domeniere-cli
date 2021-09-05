import { 
    Command, 
    Option 
} from 'clipanion';
import * as t from 'typanion';
import { 
    createModule, 
    exposeModule, 
    isDomeniereProject, 
    moduleDirectoryPath, 
    moduleExists 
} from '../utils/directory-utils';
import { 
    formatClassName, 
    formatLogError, 
    formatLogInfo 
} from '../utils/formatter-utils';
import { 
    startSpinner, 
    stopSpinnerWithFailure, 
    stopSpinnerWithSuccess 
} from '../utils/spinner-util';

/**
 * ScaffoldModuleCommand
 * 
 * Scaffolds a Module.
 */


export class ScaffoldModuleCommand extends Command {

    static paths = [
        ['create', 'module'],
    ];

    // arguments.
    moduleName = Option.String({ required: true, name: 'module-name', validator: t.isString() });

    // This information is shown on the help command.
    static usage = {
        category: 'Templates',
        description: "Creates a Module",
        details: "Creates a Module within an existing domain.",
    }

    async execute(): Promise<number> {
        this.context.stdout.write(formatLogInfo(`Creating module\n`));
        // vallidate we are in a domeniere project.
        try {
            if (!await isDomeniereProject(process.cwd())) {
                throw new Error('Not a Domeniere project');
            }
        }
        catch(e) {
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }

        try {
            // make sure the current directory is a Domeniere Root
            startSpinner(formatLogInfo("Verifying..."));

            // make sure the module does not already exist.
            const moduleName = formatClassName(this.moduleName);
            const modulePath = moduleDirectoryPath(this.moduleName, process.cwd());

            if (await moduleExists(this.moduleName, process.cwd())) {
                throw new Error('Module already exists.');
            }
            stopSpinnerWithSuccess(formatLogInfo("Verification complete."));

            // create the module.
            startSpinner(formatLogInfo(`Writing module files...`));
            await createModule(moduleName, process.cwd());
            stopSpinnerWithSuccess(formatLogInfo(`Successfully created module files.`));

            // add module to index
            startSpinner(formatLogInfo(`updating exports...`))
            await exposeModule(moduleName, process.cwd());
            stopSpinnerWithSuccess(formatLogInfo('Successfully updated exports.'));
            this.context.stdout.write(formatLogInfo(`Successfully created module ${moduleName}\n`));
            return 0;
        }
        catch(e) {
            stopSpinnerWithFailure(formatLogError("Somthing went wrong."));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }
    }
}
