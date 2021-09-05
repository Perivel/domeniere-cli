import { Command } from "clipanion";
/**
 * ScaffoldQueryCommand
 *
 * Scaffolds an Query.
 */
export declare class ScaffoldQueryCommand extends Command {
    static paths: string[][];
    /**
     * queryName
     *
     * The name of the query
     */
    queryName: string;
    /**
     * module
     *
     * the module where the create will be added.
     */
    module: string;
    static usage: {
        category: string;
        description: string;
        details: string;
    };
    execute(): Promise<number>;
}
//# sourceMappingURL=scaffold-query.command.d.ts.map