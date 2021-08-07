#!/usr/bin/env node
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
const config = __importStar(require("./cliconfig.json"));
const clipanion_1 = require("clipanion");
const commands_well_1 = require("./src/commands/commands.well");
const [node, app, ...args] = process.argv;
const cli = new clipanion_1.Cli({
    binaryLabel: config.name,
    binaryName: config.binary_name,
    binaryVersion: config.version,
});
cli.register(commands_well_1.ScaffoldAggregateCommand);
cli.register(commands_well_1.ScaffoldCommandCommand);
cli.register(commands_well_1.ScaffoldDomainCommand);
cli.register(commands_well_1.ScaffoldDtoCommand);
cli.register(commands_well_1.ScaffoldEntityCommand);
cli.register(commands_well_1.ScaffoldEventCommand);
cli.register(commands_well_1.ScaffoldFactoryCommand);
cli.register(commands_well_1.ScaffoldModuleCommand);
cli.register(commands_well_1.ScaffoldQueryCommand);
cli.register(commands_well_1.ScaffoldRepositoryCommand);
cli.register(commands_well_1.ScaffoldSpecificationCommand);
cli.register(commands_well_1.ScaffoldValueCommand);
cli.register(clipanion_1.Builtins.VersionCommand);
cli.register(clipanion_1.Builtins.HelpCommand);
cli.runExit(args, clipanion_1.Cli.defaultContext);
