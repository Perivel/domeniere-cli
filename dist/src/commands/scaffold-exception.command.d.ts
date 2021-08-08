import { Command } from "clipanion";
/**
 * ScaffoldExceptionCommand
 *
 * Scaffolds an Exception.
 */
export declare class ScaffoldExceptionCommand extends Command {
    static paths: string[][];
    /**
     * exceptionName
     *
     * The name of the exception
     */
    exceptionName: string;
    /**
     * module
     *
     * the module where the exception will be added.
     */
    module: string;
    static usage: {
        category: string;
        description: string;
        details: string;
    };
    execute(): Promise<number>;
}
//# sourceMappingURL=scaffold-exception.command.d.ts.map