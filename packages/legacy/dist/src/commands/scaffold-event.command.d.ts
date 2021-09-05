import { Command } from "clipanion";
/**
 * ScaffoldEventCommand
 *
 * Scaffolds an Event.
 */
export declare class ScaffoldEventCommand extends Command {
    static paths: string[][];
    /**
     * eventName
     *
     * The name of the event
     */
    eventName: string;
    /**
     * module
     *
     * the module where the event will be added.
     */
    module: string;
    /**
     * noBroadcast
     *
     * indicates the event should not be broadcasted by default.
     */
    noBroadcast: boolean | undefined;
    static usage: {
        category: string;
        description: string;
        details: string;
    };
    execute(): Promise<number>;
}
//# sourceMappingURL=scaffold-event.command.d.ts.map