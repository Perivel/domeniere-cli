import { Command } from "clipanion";
/**
 * ScaffoldFactoryCommand
 *
 * Scaffolds a Factory.
 */
export declare class ScaffoldFactoryCommand extends Command {
    static paths: string[][];
    /**
     * factoryName
     *
     * The name of the factory
     */
    factoryName: string;
    /**
     * module
     *
     * the module where the factory will be added.
     */
    module: string;
    static usage: {
        category: string;
        description: string;
        details: string;
    };
    execute(): Promise<number>;
}
//# sourceMappingURL=scaffold-factory.command.d.ts.map