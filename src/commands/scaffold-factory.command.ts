import { 
    Command, 
    Option 
} from "clipanion";
import * as t from 'typanion';
import { 
    createFactoriesDirectoryForModule,
    createFactory,
    exposeFactoriesWell,
    exposeFactory,
    factoriesDirectoryExists,
    factoryExists,
    isDomeniereProject, 
    moduleExists} from "../utils/directory-utils";
import { 
    formatClassName, 
    formatLogError, 
    formatLogInfo 
} from "../utils/formatter-utils";
import { 
    startSpinner, 
    stopSpinnerWithFailure, 
    stopSpinnerWithSuccess 
} from "../utils/spinner-util";

/**
 * ScaffoldFactoryCommand
 * 
 * Scaffolds a Factory.
 */

export class ScaffoldFactoryCommand extends Command {

    static paths = [
        ['generate', 'factory'],
        ['g', 'factory']
    ];

    // ===================================================
    // The command Options
    // ===================================================

    /**
     * factoryName
     * 
     * The name of the value.
     */

    factoryName = Option.String({ required: true, name: 'name', validator: t.isString()});

    /**
     * module
     * 
     * the module where the value will be added.
     */

    module = Option.String({ required: true, name: 'module', validator: t.isString()});

    // ============================================
    // usage information
    // ============================================

    static usage = {
        category: 'Templates',
        description: "Generates a Factory",
        details: "Creates a factory inside the specified module.",
    }

    async execute(): Promise<number> {
        this.context.stdout.write(formatLogInfo('Creating Factory.\n'));

        // validation
        startSpinner(formatLogInfo('Verifying...'));
        try {
            // make sure we are in a Domeniere project.
            if (!await isDomeniereProject(process.cwd())) {
                throw new Error('Not a Domeniere Project.');
            }

            // make sure the module exists.
            if (!await moduleExists(this.module, process.cwd())) {
                throw new Error(`Module ${formatClassName(this.module)} does not exist.`);
            }

            // make sure the factory does not already exist
            if (await factoryExists(this.factoryName, this.module, process.cwd())) {
                throw new Error(`Factory ${formatClassName(this.factoryName)} already exists in module ${formatClassName(this.module)}`);
            }
            stopSpinnerWithSuccess(formatLogInfo('Validation complete.'))
        }
        catch(e) {
            stopSpinnerWithFailure(formatLogError('Validation failed.'));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }

        // create the factory.
        startSpinner(formatLogInfo("Writing factory files..."));
        try {
            // create the factories directory if it does not already exist.
            if (!await factoriesDirectoryExists(this.module, process.cwd())) {
                // create the factories directory.
                await createFactoriesDirectoryForModule(this.module, process.cwd());
                await exposeFactoriesWell(this.module, process.cwd());
            }

            // create the factory
            await createFactory(this.factoryName, this.module, process.cwd());

            // add the factories to the values well
            await exposeFactory(this.factoryName, this.module, process.cwd());

            stopSpinnerWithSuccess(formatLogInfo("Successfully wrote factory files."));
            this.context.stdout.write(formatLogInfo(`Successfully created factory ${formatClassName(this.factoryName)}Factory in module ${formatClassName(this.module)}\n`));
            return 0;
        }
        catch(e) {
            stopSpinnerWithFailure(formatLogError("Failed to write files."));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }
    }
}