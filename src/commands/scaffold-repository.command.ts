import {
    Command,
    Option
} from "clipanion";
import * as t from 'typanion';
import {
    createRepositoriesDirectoryForModule,
    createRepository,
    exposeRepositoriesWell,
    exposeRepository,
    isDomeniereProject,
    moduleExists,
    repositoriesDirectoryExists,
    repositoryExists
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
 * ScaffoldRepositoryCommand
 * 
 * Scaffolds a Repository.
 */

export class ScaffoldRepositoryCommand extends Command {

    static paths = [
        ['create', 'repository'],
    ];

    // ===================================================
    // The command Options
    // ===================================================

    /**
     * repositoryName
     * 
     * The name of the repository
     */

    repositoryName = Option.String({ required: true, name: 'name', validator: t.isString() });

    /**
     * module
     * 
     * the module where the repository will be added.
     */

    module = Option.String({ required: true, name: 'module', validator: t.isString() });

    /**
     * identity
     * 
     * Indicates that the repository should be tasked with assigning identity.
     */

    identity = Option.Boolean('-i', { description: 'Indicates the repository will be tasked with assigning identity.', required: false });

    // ============================================
    // usage information
    // ============================================

    static usage = {
        category: 'Templates',
        description: "Creates a Repository",
        details: "Creates a Repository inside the specified module.",
    }

    async execute(): Promise<number> {
        this.context.stdout.write(formatLogInfo('Creating repository.\n'));

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

            // make sure the repository does not already exist
            if (await repositoryExists(this.repositoryName, this.module, process.cwd())) {
                throw new Error(`Repository ${formatClassName(this.repositoryName)}Repository already exists in module ${formatClassName(this.module)}`);
            }
            stopSpinnerWithSuccess(formatLogInfo('Validation complete.'))
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError('Validation failed.'));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }

        // create the repository
        startSpinner(formatLogInfo("Writing repository files..."));
        try {
            // create the Repository directory if it does not already exist.
            if (!await repositoriesDirectoryExists(this.module, process.cwd())) {
                // create the Repositorys directory.
                await createRepositoriesDirectoryForModule(this.module, process.cwd());
                await exposeRepositoriesWell(this.module, process.cwd());
            }

            // create the repository
            await createRepository(this.repositoryName, this.module, process.cwd(), this.identity);

            // add the repository to the repository well
            await exposeRepository(this.repositoryName, this.module, process.cwd());

            stopSpinnerWithSuccess(formatLogInfo("Successfully created repository files."));
            this.context.stdout.write(formatLogInfo(`Successfully created repository ${formatClassName(this.repositoryName)}Repository in module ${formatClassName(this.module)}\n`));
            return 0;
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError("Failed to write files."));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }
    }
}
