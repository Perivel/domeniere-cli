
import { spawn, Output } from 'promisify-child-process';

export interface ShellOutput extends Output {}

/**
 * runShellCommand()
 * 
 * executes a shell command on a child process.
 * @param binary the binary to run
 * @param args any arguments or flags
 * @param cwd specify the current working directory to run the command in
 * @returns AShellOutput.
 */

export const runShellCommand = async (binary: string, args: string[] = [], cwd: string = process.cwd()): Promise<ShellOutput> => {
    return await spawn(binary, args, {
        cwd: cwd,
        shell: true
    });
}