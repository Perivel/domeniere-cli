import chalk from 'chalk';
import { camelCase, capitalCase, paramCase } from 'change-case';

/**
 * formatApiFileName()
 * 
 * formats the api file name.
 * @param domainName the domain name.
 * @returns the formatted api file name
 */

export const formatApiFileName = (domainName: string): string => {
    return `${formatDirectoryOrFileName(domainName)}.api.ts`;
}

/**
 * formatClassName()
 * 
 * formats a string to be suitabble for a class name.
 * @param dirty the string to format.
 * @returns the formatted thing.
 */

export const formatClassName = (dirty: string): string => {
    return capitalCase(dirty).replace(' ', '');
}

/**
 * formatDirectoryOrFileName()
 * 
 * formats a string to be suitable as a file or a directory name.
 * @param dirty the string to format.
 * @returns the formatted string.
 */

export const formatDirectoryOrFileName = (dirty: string): string => {
    return paramCase(dirty);
}

/**
 * formatDomainDirectoryName()
 * 
 * formats the domain directory name from the domain name.
 * @param domainname the domain name.
 * @returns the formatted domain directory name.
 */

export const formatDomainDirectoryName = (domainname: string): string => {
    return formatDirectoryOrFileName(domainname);
}

/**
 * formatEventStoreFileName()
 * 
 * formats the event store file name for the specified domain name.
 * @param domainName the domain name
 * @returns the event store file name.
 */

export const formatEventStoreFileName = (domainName: string): string => {
    return `${formatDomainDirectoryName(domainName)}.eventstore.ts`;
}

/**
 * formatLogInfo()
 * 
 * formats the log as informational log.
 * @param message the message to format.
 * @returns the formatted message.
 */

export const formatLogInfo = (message: string): string => {
    return chalk.green(message);
}

/**
 * formatLogError()
 *
 * formats the log as an error log.
 * @param message the message to format.
 * @returns the formatted message.
 */

export const formatLogError = (message: string): string => {
    return chalk.red(message);
}

/**
 * formatModuleFileName()
 * 
 * formats a string to an appropriate module file name.
 * @param moduleName the name of the module.
 * @returns the formatted module file name.
 */

export const formatModuleFileName = (moduleName: string): string => {
    return `${formatDirectoryOrFileName(moduleName)}.module.ts`;
}

/**
 * formatVariableName()
 * 
 * formats the string for use as a variable name.
 * @param dirty the string to format.
 * @returns a string formatted for use as a variable name.
 */

export const formatVariableName = (dirty: string): string => {
    return camelCase(dirty);
}
