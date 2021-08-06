import {
    Command,
    Option
} from "clipanion";
import * as t from 'typanion';
import {
    createQuery,
    createServicesDirectoryForModule,
    exposeQuery,
    exposeServicesWell,
    isDomeniereProject,
    moduleExists,
    queryExists,
    servicesDirectoryExists
} from "../utils/directory-utils";
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
 * ScaffoldQueryCommand
 * 
 * Scaffolds an Query.
 */

export class ScaffoldQueryCommand extends Command {

    static paths = [
        ['generate', 'query'],
        ['g', 'query']
    ];

    // ===================================================
    // The command Options
    // ===================================================

    /**
     * queryName
     * 
     * The name of the query
     */

    queryName = Option.String({ required: true, name: 'name', validator: t.isString() });

    /**
     * module
     * 
     * the module where the value will be added.
     */

    module = Option.String({ required: true, name: 'module', validator: t.isString() });

    // ============================================
    // usage information
    // ============================================

    static usage = {
        category: 'Templates',
        description: "Generates an Query",
        details: "Creates a Query inside the specified module.",
    }

    async execute(): Promise<number> {
        this.context.stdout.write(formatLogInfo('Creating Query.\n'));

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

            // make sure the query does not already exist
            if (await queryExists(this.queryName, this.module, process.cwd())) {
                throw new Error(`Query ${formatClassName(this.queryName)}Query already exists in module ${formatClassName(this.module)}`);
            }
            stopSpinnerWithSuccess(formatLogInfo('Validation complete.'))
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError('Validation failed.'));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }

        // create the query
        startSpinner(formatLogInfo("Writing Command files..."));
        try {
            // create the services directory if it does not already exist.
            if (!await servicesDirectoryExists(this.module, process.cwd())) {
                // create the services directory.
                await createServicesDirectoryForModule(this.module, process.cwd());
                await exposeServicesWell(this.module, process.cwd());
            }

            // create the command
            await createQuery(this.queryName, this.module, process.cwd());

            // add the command to the values well
            await exposeQuery(this.queryName, this.module, process.cwd());

            stopSpinnerWithSuccess(formatLogInfo("Successfully written query files."));
            this.context.stdout.write(formatLogInfo(`Successfully created Query ${formatClassName(this.queryName)}Query in module ${formatClassName(this.module)}\n`));
            return 0;
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError("Failed to write files."));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }
    }
}