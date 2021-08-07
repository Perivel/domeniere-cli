import { 
    Command, 
    Option 
} from "clipanion";
import * as t from 'typanion';
import { 
    createValue, 
    createValuesDirectoryForModule, 
    exposeValue, 
    exposeValuesWell, 
    isDomeniereProject, 
    moduleExists, 
    valueExists, 
    valuesDirectoryExists 
} from "../utils/directory-utils";
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
 * ScaffoldValueCommand
 * 
 * Scaffolds a Value object.
 */

export class ScaffoldValueCommand extends Command {

    static paths = [
        ['create', 'value'],
    ];

    // ===================================================
    // The command Options
    // ===================================================

    /**
     * valueName
     * 
     * The name of the value.
     */

    valueName = Option.String({ required: true, name: 'name', validator: t.isString()});

    /**
     * module
     * 
     * the module where the value will be added.
     */

    module = Option.String({ required: true, name: 'module', validator: t.isString()});

    /**
     * identifier
     * 
     * Indicates whether or not the 
     */

    identifier = Option.Boolean('--id', {description: 'Indicates whether the value will be used as an ID', required: false});

    // ============================================
    // usage information
    // ============================================

    static usage = {
        category: 'Templates',
        description: "Creates a Value",
        details: "Creates a value object inside the specified module.",
    }

    async execute(): Promise<number> {
        this.context.stdout.write(formatLogInfo('Creating Value.\n'));

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

            // make sure the vlaue does not already exist
            if (await valueExists(this.valueName, this.module, process.cwd())) {
                throw new Error(`Value ${formatClassName(this.valueName)} already exists in module ${formatClassName(this.module)}`);
            }
            stopSpinnerWithSuccess(formatLogInfo('Validation complete.'))
        }
        catch(e) {
            stopSpinnerWithFailure(formatLogError('Validation failed.'));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }

        // create the value.
        startSpinner(formatLogInfo("Writing value files..."));
        try {
            // create the values directory if it does not already exist.
            if (!await valuesDirectoryExists(this.module, process.cwd())) {
                // create the values directory.
                await createValuesDirectoryForModule(this.module, process.cwd());
                await exposeValuesWell(this.module, process.cwd());
            }

            // create the value
            await createValue(this.valueName, this.module, process.cwd(), this.identifier);

            // add the value to the values well
            await exposeValue(this.valueName, this.module, process.cwd());

            stopSpinnerWithSuccess(formatLogInfo("Successfully created value files."));
            this.context.stdout.write(formatLogInfo(`Successfully created value ${formatClassName(this.valueName)} in module ${formatClassName(this.module)}\n`));
            return 0;
        }
        catch(e) {
            stopSpinnerWithFailure(formatLogError("Failed to write files."));
            this.context.stdout.write(formatLogError(`Error: ${(e as Error).message}\n`));
            return 1;
        }
    }
}