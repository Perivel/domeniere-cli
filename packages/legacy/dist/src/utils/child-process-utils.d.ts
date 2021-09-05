import { Output } from 'promisify-child-process';
export interface ShellOutput extends Output {
}
/**
 * runShellCommand()
 *
 * executes a shell command on a child process.
 * @param binary the binary to run
 * @param args any arguments or flags
 * @param cwd specify the current working directory to run the command in
 * @returns AShellOutput.
 */
export declare const runShellCommand: (binary: string, args?: string[], cwd?: string) => Promise<ShellOutput>;
//# sourceMappingURL=child-process-utils.d.ts.map