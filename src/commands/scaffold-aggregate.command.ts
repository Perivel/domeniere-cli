import { 
    Command, 
    Option 
} from "clipanion";
import * as t from 'typanion';
import { 
    aggregateExists,
    aggregatesDirectoryExists,
    createAggregate,
    createAggregatesDirectoryForModule,
    exposeAggregate,
    exposeAggregatesWell,
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
 * ScaffoldAggregateCommand
 * 
 * Scaffolds an Aggregate.
 */

export class ScaffoldAggregateCommand extends Command {

    static paths = [
        ['create', 'aggregate'],
    ];

    // ===================================================
    // The command Options
    // ===================================================

    /**
     * aggregateName
     * 
     * The name of the aggregate
     */

    aggregateName = Option.String({ required: true, name: 'name', validator: t.isString() });

    /**
     * module
     * 
     * the module where the aggregate will be added.
     */

    module = Option.String({ required: true, name: 'module', validator: t.isString() });

    /**
     * timestamped
     * 
     * Indicates that the entity should be timestamped.
     */

    timestamped = Option.Boolean('-t', { description: 'Indicates the aggregate will be timestamped.', required: false });

    // ============================================
    // usage information
    // ============================================

    static usage = {
        category: 'Templates',
        description: "Creates an Aggregate",
        details: "Creates an Aggregate inside the specified module.",
    };

    async execute(): Promise<number> {
        this.context.stdout.write(formatLogInfo('Creating Aggregate.\n'));

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

            // make sure the aggregate does not already exist
            if (await aggregateExists(this.aggregateName, this.module, process.cwd())) {
                throw new Error(`Aggregate ${formatClassName(this.aggregateName)} already exists in module ${formatClassName(this.module)}`);
            }
            stopSpinnerWithSuccess(formatLogInfo('Validation complete.'))
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError('Validation failed.'));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }

        // create the aggregate
        startSpinner(formatLogInfo("Writing Aggregate files..."));
        try {
            // create the aggregate directory if it does not already exist.
            if (!await aggregatesDirectoryExists(this.module, process.cwd())) {
                // create the aggregates directory.
                await createAggregatesDirectoryForModule(this.module, process.cwd());
                await exposeAggregatesWell(this.module, process.cwd());
            }

            // create the aggregate
            await createAggregate(this.aggregateName, this.module, process.cwd(), this.timestamped);

            // add the aggregate to the values well
            await exposeAggregate(this.aggregateName, this.module, process.cwd());

            stopSpinnerWithSuccess(formatLogInfo("Successfully created aggregate files.."));
            this.context.stdout.write(formatLogInfo(`Successfully created aggregate ${formatClassName(this.aggregateName)} in module ${formatClassName(this.module)}\n`));
            return 0;
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError("Failed to write files."));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }
    }
}