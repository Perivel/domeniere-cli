"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runShellCommand = void 0;
const promisify_child_process_1 = require("promisify-child-process");
/**
 * runShellCommand()
 *
 * executes a shell command on a child process.
 * @param binary the binary to run
 * @param args any arguments or flags
 * @param cwd specify the current working directory to run the command in
 * @returns AShellOutput.
 */
const runShellCommand = async (binary, args = [], cwd = process.cwd()) => {
    return await promisify_child_process_1.spawn(binary, args, {
        cwd: cwd,
        shell: true
    });
};
exports.runShellCommand = runShellCommand;
