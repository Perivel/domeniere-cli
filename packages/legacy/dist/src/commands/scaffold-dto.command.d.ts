import { Command } from "clipanion";
/**
 * ScaffoldDtoCommand
 *
 * Scaffolds a Dto
 */
export declare class ScaffoldDtoCommand extends Command {
    static paths: string[][];
    /**
     * dtoName
     *
     * The name of the dto.
     */
    dtoName: string;
    /**
     * module
     *
     * the module where the dto will be added.
     */
    module: string;
    static usage: {
        category: string;
        description: string;
        details: string;
    };
    execute(): Promise<number>;
}
//# sourceMappingURL=scaffold-dto.command.d.ts.map