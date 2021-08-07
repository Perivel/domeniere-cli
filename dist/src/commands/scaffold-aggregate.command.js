"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaffoldAggregateCommand = void 0;
const clipanion_1 = require("clipanion");
const t = __importStar(require("typanion"));
const directory_utils_1 = require("../utils/directory-utils");
const formatter_utils_1 = require("../utils/formatter-utils");
const spinner_util_1 = require("../utils/spinner-util");
/**
 * ScaffoldAggregateCommand
 *
 * Scaffolds an Aggregate.
 */
class ScaffoldAggregateCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        // ===================================================
        // The command Options
        // ===================================================
        /**
         * aggregateName
         *
         * The name of the aggregate
         */
        this.aggregateName = clipanion_1.Option.String({ required: true, name: 'name', validator: t.isString() });
        /**
         * module
         *
         * the module where the aggregate will be added.
         */
        this.module = clipanion_1.Option.String({ required: true, name: 'module', validator: t.isString() });
        /**
         * timestamped
         *
         * Indicates that the entity should be timestamped.
         */
        this.timestamped = clipanion_1.Option.Boolean('-t', { description: 'Indicates the aggregate will be timestamped.', required: false });
    }
    async execute() {
        this.context.stdout.write(formatter_utils_1.formatLogInfo('Creating Aggregate.\n'));
        // validation
        spinner_util_1.startSpinner(formatter_utils_1.formatLogInfo('Verifying...'));
        try {
            // make sure we are in a Domeniere project.
            if (!await directory_utils_1.isDomeniereProject(process.cwd())) {
                throw new Error('Not a Domeniere Project.');
            }
            // make sure the module exists.
            if (!await directory_utils_1.moduleExists(this.module, process.cwd())) {
                throw new Error(`Module ${formatter_utils_1.formatClassName(this.module)} does not exist.`);
            }
            // make sure the aggregate does not already exist
            if (await directory_utils_1.aggregateExists(this.aggregateName, this.module, process.cwd())) {
                throw new Error(`Aggregate ${formatter_utils_1.formatClassName(this.aggregateName)} already exists in module ${formatter_utils_1.formatClassName(this.module)}`);
            }
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo('Validation complete.'));
        }
        catch (e) {
            spinner_util_1.stopSpinnerWithFailure(formatter_utils_1.formatLogError('Validation failed.'));
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            return 1;
        }
        // create the aggregate
        spinner_util_1.startSpinner(formatter_utils_1.formatLogInfo("Writing Aggregate files..."));
        try {
            // create the aggregate directory if it does not already exist.
            if (!await directory_utils_1.aggregatesDirectoryExists(this.module, process.cwd())) {
                // create the aggregates directory.
                await directory_utils_1.createAggregatesDirectoryForModule(this.module, process.cwd());
                await directory_utils_1.exposeAggregatesWell(this.module, process.cwd());
            }
            // create the aggregate
            await directory_utils_1.createAggregate(this.aggregateName, this.module, process.cwd(), this.timestamped);
            // add the aggregate to the values well
            await directory_utils_1.exposeAggregate(this.aggregateName, this.module, process.cwd());
            spinner_util_1.stopSpinnerWithSuccess(formatter_utils_1.formatLogInfo("Successfully created aggregate files.."));
            this.context.stdout.write(formatter_utils_1.formatLogInfo(`Successfully created aggregate ${formatter_utils_1.formatClassName(this.aggregateName)} in module ${formatter_utils_1.formatClassName(this.module)}\n`));
            return 0;
        }
        catch (e) {
            spinner_util_1.stopSpinnerWithFailure(formatter_utils_1.formatLogError("Failed to write files."));
            this.context.stdout.write(formatter_utils_1.formatLogError(`Error: ${e.message}\n`));
            return 1;
        }
    }
}
exports.ScaffoldAggregateCommand = ScaffoldAggregateCommand;
ScaffoldAggregateCommand.paths = [
    ['create', 'aggregate'],
];
// ============================================
// usage information
// ============================================
ScaffoldAggregateCommand.usage = {
    category: 'Templates',
    description: "Creates an Aggregate",
    details: "Creates an Aggregate inside the specified module.",
};
