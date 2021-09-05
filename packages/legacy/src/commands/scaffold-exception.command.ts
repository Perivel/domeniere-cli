import {
    Command,
    Option
} from "clipanion";
import * as t from 'typanion';
import {
    createException,
    createExceptionsDirectoryForModule,
    exceptionExists,
    exceptionsDirectoryExists,
    exposeException,
    exposeExceptionsWell,
    isDomeniereProject,
    moduleExists
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
 * ScaffoldExceptionCommand
 * 
 * Scaffolds an Exception.
 */

export class ScaffoldExceptionCommand extends Command {

    static paths = [
        ['create', 'exception'],
    ];

    // ===================================================
    // The command Options
    // ===================================================

    /**
     * exceptionName
     * 
     * The name of the exception
     */

    exceptionName = Option.String({ required: true, name: 'name', validator: t.isString() });

    /**
     * module
     * 
     * the module where the exception will be added.
     */

    module = Option.String({ required: true, name: 'module', validator: t.isString() });

    // ============================================
    // usage information
    // ============================================

    static usage = {
        category: 'Templates',
        description: "Creates an Exception",
        details: "Creates an Exception inside the specified module.",
    }

    async execute(): Promise<number> {
        this.context.stdout.write(formatLogInfo('Creating Exception.\n'));

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

            // make sure the exception does not already exist
            if (await exceptionExists(this.exceptionName, this.module, process.cwd())) {
                throw new Error(`Exception ${formatClassName(this.exceptionName)}Exception already exists in module ${formatClassName(this.module)}`);
            }
            stopSpinnerWithSuccess(formatLogInfo('Validation complete.'))
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError('Validation failed.'));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }

        // create the exception
        startSpinner(formatLogInfo("Writing Exception files..."));
        try {
            // create the exceptions directory if it does not already exist.
            if (!await exceptionsDirectoryExists(this.module, process.cwd())) {
                // create the exceptions directory.
                await createExceptionsDirectoryForModule(this.module, process.cwd());
                await exposeExceptionsWell(this.module, process.cwd());
            }

            // create the exception
            await createException(this.exceptionName, this.module, process.cwd());

            // add the exception to the dtos well
            await exposeException(this.exceptionName, this.module, process.cwd());

            stopSpinnerWithSuccess(formatLogInfo("Successfully created Exception files."));
            this.context.stdout.write(formatLogInfo(`Successfully created Exception ${formatClassName(this.exceptionName)}Exception in module ${formatClassName(this.module)}\n`));
            return 0;
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError("Failed to write files."));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }
    }
}