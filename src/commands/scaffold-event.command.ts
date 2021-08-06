import {
    Command,
    Option
} from "clipanion";
import * as t from 'typanion';
import {
    createEvent,
    createEventsDirectoryForModule,
    eventExists,
    eventsDirectoryExists,
    exposeEvent,
    exposeEventsWell,
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
 * ScaffoldEventCommand
 * 
 * Scaffolds an Event.
 */

export class ScaffoldEventCommand extends Command {

    static paths = [
        ['generate', 'event'],
        ['g', 'event']
    ];

    // ===================================================
    // The command Options
    // ===================================================

    /**
     * eventName
     * 
     * The name of the event
     */

    eventName = Option.String({ required: true, name: 'name', validator: t.isString() });

    /**
     * module
     * 
     * the module where the value will be added.
     */

    module = Option.String({ required: true, name: 'module', validator: t.isString() });

    /**
     * noBroadcast
     * 
     * indicates the event should not be broadcasted by default.
     */

    noBroadcast = Option.Boolean('--no-broadcast', { description: 'Indicates the event should not be broadcasted', required: false });

    // ============================================
    // usage information
    // ============================================

    static usage = {
        category: 'Templates',
        description: "Generates an Event",
        details: "Creates an Event inside the specified module.",
    }

    async execute(): Promise<number> {
        this.context.stdout.write(formatLogInfo('Creating Event.\n'));

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

            // make sure the event does not already exist
            if (await eventExists(this.eventName, this.module, process.cwd())) {
                throw new Error(`Event ${formatClassName(this.eventName)} already exists in module ${formatClassName(this.module)}`);
            }
            stopSpinnerWithSuccess(formatLogInfo('Validation complete.'))
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError('Validation failed.'));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }

        // create the event
        startSpinner(formatLogInfo("Writing Event files..."));
        try {
            // create the events directory if it does not already exist.
            if (!await eventsDirectoryExists(this.module, process.cwd())) {
                // create the events directory.
                await createEventsDirectoryForModule(this.module, process.cwd());
                await exposeEventsWell(this.module, process.cwd());
            }

            // create the event
            await createEvent(this.eventName, this.module, process.cwd(), !this.noBroadcast);

            // add the event to the values well
            await exposeEvent(this.eventName, this.module, process.cwd());

            stopSpinnerWithSuccess(formatLogInfo("Successfully written query files."));
            this.context.stdout.write(formatLogInfo(`Successfully created Event ${formatClassName(this.eventName)} in module ${formatClassName(this.module)}\n`));
            return 0;
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError("Failed to write files."));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }
    }
}