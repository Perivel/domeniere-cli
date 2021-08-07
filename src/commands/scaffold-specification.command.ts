import {
    Command,
    Option
} from "clipanion";
import * as t from 'typanion';
import {
    createEventsDirectoryForModule,
    createSpecification,
    createSpecificationsDirectoryForModule,
    exposeSpecification,
    exposeSpecificationsWell,
    isDomeniereProject,
    moduleExists,
    specificationExists,
    specificationsDirectoryExists
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
 * ScaffoldSpecificationCommand
 * 
 * Scaffolds a Specification.
 */

export class ScaffoldSpecificationCommand extends Command {

    static paths = [
        ['create', 'specification'],
    ];

    // ===================================================
    // The command Options
    // ===================================================

    /**
     * specificationName
     * 
     * The name of the specification.
     */

    specificationName = Option.String({ required: true, name: 'name', validator: t.isString() });

    /**
     * module
     * 
     * the module where the specification will be added.
     */

    module = Option.String({ required: true, name: 'module', validator: t.isString() });

    // ============================================
    // usage information
    // ============================================

    static usage = {
        category: 'Templates',
        description: "Creates a Specification",
        details: "Creates a Specification inside the specified module.",
    }

    async execute(): Promise<number> {
        this.context.stdout.write(formatLogInfo('Creating Specification.\n'));

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

            // make sure the specification does not already exist
            if (await specificationExists(this.specificationName, this.module, process.cwd())) {
                throw new Error(`Event ${formatClassName(this.specificationName)}Specification already exists in module ${formatClassName(this.module)}`);
            }
            stopSpinnerWithSuccess(formatLogInfo('Validation complete.'))
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError('Validation failed.'));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }

        // create the event
        startSpinner(formatLogInfo("Writing specification files..."));
        try {
            // create the specifications directory if it does not already exist.
            if (!await specificationsDirectoryExists(this.module, process.cwd())) {
                // create the specifications directory.
                await createSpecificationsDirectoryForModule(this.module, process.cwd());
                await exposeSpecificationsWell(this.module, process.cwd());
            }

            // create the specification
            await createSpecification(this.specificationName, this.module, process.cwd());

            // add the specification to the specifications well
            await exposeSpecification(this.specificationName, this.module, process.cwd());

            stopSpinnerWithSuccess(formatLogInfo("Successfully created specification files."));
            this.context.stdout.write(formatLogInfo(`Successfully created specification ${formatClassName(this.specificationName)}Specification in module ${formatClassName(this.module)}\n`));
            return 0;
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError("Failed to write files."));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }
    }
}