import {
    Command,
    Option
} from "clipanion";
import * as t from 'typanion';
import {
    createDto,
    createDtosDirectoryForModule,
    dtoExists,
    dtosDirectoryExists,
    exposeDto,
    exposeDtosWell,
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
 * ScaffoldDtoCommand
 * 
 * Scaffolds a Dto
 */

export class ScaffoldDtoCommand extends Command {

    static paths = [
        ['create', 'dto'],
    ];

    // ===================================================
    // The command Options
    // ===================================================

    /**
     * dtoName
     * 
     * The name of the dto.
     */

    dtoName = Option.String({ required: true, name: 'name', validator: t.isString() });

    /**
     * module
     * 
     * the module where the dto will be added.
     */

    module = Option.String({ required: true, name: 'module', validator: t.isString() });

    // ============================================
    // usage information
    // ============================================

    static usage = {
        category: 'Templates',
        description: "Creates a DTO",
        details: "Creates a DTO inside the specified module.",
    }

    async execute(): Promise<number> {
        this.context.stdout.write(formatLogInfo('Creating DTO.\n'));

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

            // make sure the dto does not already exist
            if (await dtoExists(this.dtoName, this.module, process.cwd())) {
                throw new Error(`DTO ${formatClassName(this.dtoName)}Data already exists in module ${formatClassName(this.module)}`);
            }
            stopSpinnerWithSuccess(formatLogInfo('Validation complete.'))
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError('Validation failed.'));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }

        // create the data
        startSpinner(formatLogInfo("Writing Dto files..."));
        try {
            // create the data directory if it does not already exist.
            if (!await dtosDirectoryExists(this.module, process.cwd())) {
                // create the dto directory.
                await createDtosDirectoryForModule(this.module, process.cwd());
                await exposeDtosWell(this.module, process.cwd());
            }

            // create the dto
            await createDto(this.dtoName, this.module, process.cwd());

            // add the dto to the dtos well
            await exposeDto(this.dtoName, this.module, process.cwd());

            stopSpinnerWithSuccess(formatLogInfo("Successfully created Dto files."));
            this.context.stdout.write(formatLogInfo(`Successfully created Dto ${formatClassName(this.dtoName)}Data in module ${formatClassName(this.module)}\n`));
            return 0;
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError("Failed to write files."));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }
    }
}
