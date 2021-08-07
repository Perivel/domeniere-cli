#!/usr/bin/env node

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
    ScaffoldDtoCommand
} from './src/commands/commands.well';

const [node, app, ...args] = process.argv;

const cli = new Cli({
    binaryLabel: 'domeniere',
    binaryName: 'domeniere',
    binaryVersion: '1.0.0',
});

cli.register(ScaffoldAggregateCommand);
cli.register(ScaffoldCommandCommand);
cli.register(ScaffoldDomainCommand);
cli.register(ScaffoldDtoCommand);
cli.register(ScaffoldEntityCommand);
cli.register(ScaffoldEventCommand);
cli.register(ScaffoldFactoryCommand);
cli.register(ScaffoldModuleCommand);
cli.register(ScaffoldQueryCommand);
cli.register(ScaffoldRepositoryCommand);
cli.register(ScaffoldSpecificationCommand);
cli.register(ScaffoldValueCommand);

cli.register(Builtins.VersionCommand);
cli.register(Builtins.HelpCommand);
cli.runExit(args, Cli.defaultContext);