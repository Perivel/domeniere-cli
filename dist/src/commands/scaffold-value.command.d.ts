import { Command } from "clipanion";
/**
 * ScaffoldValueCommand
 *
 * Scaffolds a Value object.
 */
export declare class ScaffoldValueCommand extends Command {
    static paths: string[][];
    /**
     * valueName
     *
     * The name of the value.
     */
    valueName: string;
    /**
     * module
     *
     * the module where the value will be added.
     */
    module: string;
    /**
     * identifier
     *
     * Indicates whether or not the
     */
    identifier: boolean | undefined;
    static usage: {
        category: string;
        description: string;
        details: string;
    };
    execute(): Promise<number>;
}
//# sourceMappingURL=scaffold-value.command.d.ts.map