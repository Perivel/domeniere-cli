import { Command } from 'clipanion';
/**
 * ScaffoldModuleCommand
 *
 * Scaffolds a Module.
 */
export declare class ScaffoldModuleCommand extends Command {
    static paths: string[][];
    moduleName: string;
    static usage: {
        category: string;
        description: string;
        details: string;
    };
    execute(): Promise<number>;
}
//# sourceMappingURL=scaffold-module.command.d.ts.map