import { Command } from "clipanion";
/**
 * ScaffoldCommandCommand
 *
 * Scaffolds an Command.
 */
export declare class ScaffoldCommandCommand extends Command {
    static paths: string[][];
    /**
     * commandName
     *
     * The name of the command
     */
    commandName: string;
    /**
     * module
     *
     * the module where the command will be added.
     */
    module: string;
    static usage: {
        category: string;
        description: string;
        details: string;
    };
    execute(): Promise<number>;
}
//# sourceMappingURL=scaffold-command.command.d.ts.map