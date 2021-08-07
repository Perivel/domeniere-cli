import { Command } from "clipanion";
/**
 * ScaffoldSpecificationCommand
 *
 * Scaffolds a Specification.
 */
export declare class ScaffoldSpecificationCommand extends Command {
    static paths: string[][];
    /**
     * specificationName
     *
     * The name of the specification.
     */
    specificationName: string;
    /**
     * module
     *
     * the module where the specification will be added.
     */
    module: string;
    static usage: {
        category: string;
        description: string;
        details: string;
    };
    execute(): Promise<number>;
}
//# sourceMappingURL=scaffold-specification.command.d.ts.map