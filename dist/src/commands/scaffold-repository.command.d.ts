import { Command } from "clipanion";
/**
 * ScaffoldRepositoryCommand
 *
 * Scaffolds a Repository.
 */
export declare class ScaffoldRepositoryCommand extends Command {
    static paths: string[][];
    /**
     * repositoryName
     *
     * The name of the repository
     */
    repositoryName: string;
    /**
     * module
     *
     * the module where the repository will be added.
     */
    module: string;
    /**
     * identity
     *
     * Indicates that the repository should be tasked with assigning identity.
     */
    identity: boolean | undefined;
    static usage: {
        category: string;
        description: string;
        details: string;
    };
    execute(): Promise<number>;
}
//# sourceMappingURL=scaffold-repository.command.d.ts.map