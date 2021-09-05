#!/usr/bin/env node
import * as config from './cliconfig.json';
import { Cli, Builtins } from 'clipanion';
import {
    ScaffoldDomainCommand,
    ScaffoldModuleCommand,
    ScaffoldValueCommand,
    ScaffoldEntityCommand,
    ScaffoldAggregateCommand,
    ScaffoldFactoryCommand,
    ScaffoldRepositoryCommand,
    ScaffoldCommandCommand,
    ScaffoldQueryCommand,
    ScaffoldEventCommand,
    ScaffoldSpecificationCommand,
    ScaffoldDtoCommand,
    ScaffoldExceptionCommand
} from './src/commands/commands.well';

const [node, app, ...args] = process.argv;

const cli = new Cli({
    binaryLabel: config.name,
    binaryName: config.binary_name,
    binaryVersion: config.version,
});

cli.register(ScaffoldAggregateCommand);
cli.register(ScaffoldCommandCommand);
cli.register(ScaffoldDomainCommand);
cli.register(ScaffoldDtoCommand);
cli.register(ScaffoldEntityCommand);
cli.register(ScaffoldEventCommand);
cli.register(ScaffoldExceptionCommand);
cli.register(ScaffoldFactoryCommand);
cli.register(ScaffoldModuleCommand);
cli.register(ScaffoldQueryCommand);
cli.register(ScaffoldRepositoryCommand);
cli.register(ScaffoldSpecificationCommand);
cli.register(ScaffoldValueCommand);

cli.register(Builtins.VersionCommand);
cli.register(Builtins.HelpCommand);
cli.runExit(args, Cli.defaultContext);