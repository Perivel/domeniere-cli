import { 
    Command, 
    Option 
} from "clipanion";
import * as t from 'typanion';
import { 
    createEntitiesDirectoryForModule, 
    createEntity, 
    entitiesDirectoryExists, 
    entityExists, 
    exposeEntitiesWell, 
    exposeEntity, 
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
 * ScaffoldEntityCommand
 * 
 * Scaffolds an Entity.
 */

export class ScaffoldEntityCommand extends Command {

    static paths = [
        ['create', 'entity'],
    ];

    // ===================================================
    // The command Options
    // ===================================================

    /**
     * entityName
     * 
     * The name of the entity
     */

    entityName = Option.String({ required: true, name: 'name', validator: t.isString() });

    /**
     * module
     * 
     * the module where the entity will be added.
     */

    module = Option.String({ required: true, name: 'module', validator: t.isString() });

    /**
     * timestamped
     * 
     * Indicates that the entity should be timestamped.
     */

    timestamped = Option.Boolean('-t', { description: 'Indicates the entity will be timestamped.', required: false });

    // ============================================
    // usage information
    // ============================================

    static usage = {
        category: 'Templates',
        description: "Creates an Entity",
        details: "Creates an Entity inside the specified module.",
    }

    async execute(): Promise<number> {
        this.context.stdout.write(formatLogInfo('Creating Entity.\n'));

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

            // make sure the entity does not already exist
            if (await entityExists(this.entityName, this.module, process.cwd())) {
                throw new Error(`Entity ${formatClassName(this.entityName)} already exists in module ${formatClassName(this.module)}`);
            }
            stopSpinnerWithSuccess(formatLogInfo('Validation complete.'))
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError('Validation failed.'));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }

        // create the Entity
        startSpinner(formatLogInfo("Writing Entity files..."));
        try {
            // create the entities directory if it does not already exist.
            if (!await entitiesDirectoryExists(this.module, process.cwd())) {
                // create the entities directory.
                await createEntitiesDirectoryForModule(this.module, process.cwd());
                await exposeEntitiesWell(this.module, process.cwd());
            }

            // create the entity
            await createEntity(this.entityName, this.module, process.cwd(), this.timestamped);

            // add the entity to the values well
            await exposeEntity(this.entityName, this.module, process.cwd());

            stopSpinnerWithSuccess(formatLogInfo("Successfully created entity files."));
            this.context.stdout.write(formatLogInfo(`Successfully created Entity ${formatClassName(this.entityName)} in module ${formatClassName(this.module)}\n`));
            return 0;
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError("Failed to write files."));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }
    }
}