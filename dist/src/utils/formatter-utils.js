"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatVariableName = exports.formatModuleFileName = exports.formatLogError = exports.formatLogInfo = exports.formatEventStoreFileName = exports.formatDomainDirectoryName = exports.formatDirectoryOrFileName = exports.formatClassName = exports.formatApiFileName = void 0;
const chalk_1 = __importDefault(require("chalk"));
const change_case_1 = require("change-case");
/**
 * formatApiFileName()
 *
 * formats the api file name.
 * @param domainName the domain name.
 * @returns the formatted api file name
 */
const formatApiFileName = (domainName) => {
    return `${exports.formatDirectoryOrFileName(domainName)}.api.ts`;
};
exports.formatApiFileName = formatApiFileName;
/**
 * formatClassName()
 *
 * formats a string to be suitabble for a class name.
 * @param dirty the string to format.
 * @returns the formatted thing.
 */
const formatClassName = (dirty) => {
    return change_case_1.capitalCase(dirty).replace(/\s+/g, '').trim();
};
exports.formatClassName = formatClassName;
/**
 * formatDirectoryOrFileName()
 *
 * formats a string to be suitable as a file or a directory name.
 * @param dirty the string to format.
 * @returns the formatted string.
 */
const formatDirectoryOrFileName = (dirty) => {
    return change_case_1.paramCase(dirty).trim();
};
exports.formatDirectoryOrFileName = formatDirectoryOrFileName;
/**
 * formatDomainDirectoryName()
 *
 * formats the domain directory name from the domain name.
 * @param domainname the domain name.
 * @returns the formatted domain directory name.
 */
const formatDomainDirectoryName = (domainname) => {
    return exports.formatDirectoryOrFileName(domainname);
};
exports.formatDomainDirectoryName = formatDomainDirectoryName;
/**
 * formatEventStoreFileName()
 *
 * formats the event store file name for the specified domain name.
 * @param domainName the domain name
 * @returns the event store file name.
 */
const formatEventStoreFileName = (domainName) => {
    return `${exports.formatDomainDirectoryName(domainName)}.eventstore.ts`;
};
exports.formatEventStoreFileName = formatEventStoreFileName;
/**
 * formatLogInfo()
 *
 * formats the log as informational log.
 * @param message the message to format.
 * @returns the formatted message.
 */
const formatLogInfo = (message) => {
    return chalk_1.default.green(message);
};
exports.formatLogInfo = formatLogInfo;
/**
 * formatLogError()
 *
 * formats the log as an error log.
 * @param message the message to format.
 * @returns the formatted message.
 */
const formatLogError = (message) => {
    return chalk_1.default.red(message);
};
exports.formatLogError = formatLogError;
/**
 * formatModuleFileName()
 *
 * formats a string to an appropriate module file name.
 * @param moduleName the name of the module.
 * @returns the formatted module file name.
 */
const formatModuleFileName = (moduleName) => {
    return `${exports.formatDirectoryOrFileName(moduleName)}.module.ts`;
};
exports.formatModuleFileName = formatModuleFileName;
/**
 * formatVariableName()
 *
 * formats the string for use as a variable name.
 * @param dirty the string to format.
 * @returns a string formatted for use as a variable name.
 */
const formatVariableName = (dirty) => {
    return change_case_1.camelCase(dirty);
};
exports.formatVariableName = formatVariableName;
