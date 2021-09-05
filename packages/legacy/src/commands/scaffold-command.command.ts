import {
    Command,
    Option
} from "clipanion";
import * as t from 'typanion';
import {
    commandExists,
    createCommand,
    createServicesDirectoryForModule,
    exposeCommand,
    exposeServicesWell,
    isDomeniereProject,
    moduleExists,
    servicesDirectoryExists} from "../utils/directory-utils";
import {
    formatClassName,
    formatLogError,
    formatLogInfo
} from "../utils/formatter-utils";
import {
    startSpinner,
    stopSpinnerWithFailure,
    stopSpinnerWithSuccess
} from "../utils/spinner-util";

/**
 * ScaffoldCommandCommand
 * 
 * Scaffolds an Command.
 */

export class ScaffoldCommandCommand extends Command {

    static paths = [
        ['create', 'command'],
    ];

    // ===================================================
    // The command Options
    // ===================================================

    /**
     * commandName
     * 
     * The name of the command
     */

    commandName = Option.String({ required: true, name: 'name', validator: t.isString() });

    /**
     * module
     * 
     * the module where the command will be added.
     */

    module = Option.String({ required: true, name: 'module', validator: t.isString() });

    // ============================================
    // usage information
    // ============================================

    static usage = {
        category: 'Templates',
        description: "Creates a Command",
        details: "Creates a Command inside the specified module.",
    }

    async execute(): Promise<number> {
        this.context.stdout.write(formatLogInfo('Creating Command.\n'));

        // validation
        startSpinner(formatLogInfo('Verifying...'));
        try {
            // make sure we are in a Domeniere project.
            if (!await isDomeniereProject(process.cwd())) {
                throw new Error('Not a Domeniere Project.');
            }

            // make sure the module exists.
            if (!await moduleExists(this.module, process.cwd())) {
                throw new Error(`Module ${formatClassName(this.module)} does not exist.`);
            }

            // make sure the command does not already exist
            if (await commandExists(this.commandName, this.module, process.cwd())) {
                throw new Error(`Command ${formatClassName(this.commandName)}Command already exists in module ${formatClassName(this.module)}`);
            }
            stopSpinnerWithSuccess(formatLogInfo('Validation complete.'))
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError('Validation failed.'));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }

        // create the command
        startSpinner(formatLogInfo("Writing Command files..."));
        try {
            // create the services directory if it does not already exist.
            if (!await servicesDirectoryExists(this.module, process.cwd())) {
                // create the services directory.
                await createServicesDirectoryForModule(this.module, process.cwd());
                await exposeServicesWell(this.module, process.cwd());
            }

            // create the command
            await createCommand(this.commandName, this.module, process.cwd());

            // add the command to the values well
            await exposeCommand(this.commandName, this.module, process.cwd());

            stopSpinnerWithSuccess(formatLogInfo("Successfully created command files."));
            this.context.stdout.write(formatLogInfo(`Successfully created Command ${formatClassName(this.commandName)}Command in module ${formatClassName(this.module)}\n`));
            return 0;
        }
        catch (e) {
            stopSpinnerWithFailure(formatLogError("Failed to write files."));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }
    }
}