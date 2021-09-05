import { Command } from 'clipanion';
/**
 * ScaffoldDomainCommand
 *
 * A Command to scaffold a new Domain.
 */
export declare class ScaffoldDomainCommand extends Command {
    static paths: string[][];
    static usage: {
        description: string;
        details: string;
    };
    domainName: string;
    execute(): Promise<number>;
}
//# sourceMappingURL=scaffold-domain.command.d.ts.map