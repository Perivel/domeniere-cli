import { Command } from "clipanion";
/**
 * ScaffoldEntityCommand
 *
 * Scaffolds an Entity.
 */
export declare class ScaffoldEntityCommand extends Command {
    static paths: string[][];
    /**
     * entityName
     *
     * The name of the entity
     */
    entityName: string;
    /**
     * module
     *
     * the module where the entity will be added.
     */
    module: string;
    /**
     * timestamped
     *
     * Indicates that the entity should be timestamped.
     */
    timestamped: boolean | undefined;
    static usage: {
        category: string;
        description: string;
        details: string;
    };
    execute(): Promise<number>;
}
//# sourceMappingURL=scaffold-entity.command.d.ts.map