import { Command } from "clipanion";
/**
 * ScaffoldAggregateCommand
 *
 * Scaffolds an Aggregate.
 */
export declare class ScaffoldAggregateCommand extends Command {
    static paths: string[][];
    /**
     * aggregateName
     *
     * The name of the aggregate
     */
    aggregateName: string;
    /**
     * module
     *
     * the module where the aggregate will be added.
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
//# sourceMappingURL=scaffold-aggregate.command.d.ts.map