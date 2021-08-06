#!/usr/bin/env node

import { Cli, Builtins } from 'clipanion';
import * as config from './cliconfig.json';
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
    ScaffoldEventCommand
} from './src/commands/commands.well';

const [node, app, ...args] = process.argv;

const cli = new Cli({
    binaryLabel: config.name,
    binaryName: config.binary_name,
    binaryVersion: config.version,
});

cli.register(ScaffoldDomainCommand);
cli.register(ScaffoldModuleCommand);
cli.register(ScaffoldValueCommand);
cli.register(ScaffoldEntityCommand);
cli.register(ScaffoldAggregateCommand);
cli.register(ScaffoldFactoryCommand);
cli.register(ScaffoldRepositoryCommand);
cli.register(ScaffoldCommandCommand);
cli.register(ScaffoldQueryCommand);
cli.register(ScaffoldEventCommand);

cli.register(Builtins.VersionCommand);
cli.register(Builtins.HelpCommand);
cli.runExit(args, Cli.defaultContext);