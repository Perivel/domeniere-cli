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
exports.generateWellFileContents = exports.generateValueContents = exports.generateTsconfigFileContents = exports.generateTimestampedEntityContents = exports.generateTimestampedAggregateContents = exports.generateSpecificationContents = exports.generateRepositoryInterfaceContents = exports.generateRepositoryContents = exports.generateQueryContents = exports.generatePackageJsonFileContents = exports.generateModuleFileContents = exports.generateInterfaceContents = exports.generateFactoryInterfaceContents = exports.generateIndexFileContents = exports.generateIdentityRepositoryContents = exports.generateEventStoreFileContents = exports.generateIdentifierValueContents = exports.generateIdentifierInterfaceContents = exports.generateGitignoreFileContents = exports.generateFactoryContents = exports.generateExceptionContents = exports.generateEventContents = exports.generateEntityContents = exports.generateDtoContents = exports.generateDomConfigFileContents = exports.generateCommandContents = exports.generateApiFileContents = exports.generateAggregateContents = void 0;
const Path = __importStar(require("path"));
const fs_utils_1 = require("./fs-utils");
const formatter_utils_1 = require("./formatter-utils");
const directory_utils_1 = require("./directory-utils");
const API_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'API.template.txt');
const EVENTSTORE_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'EVENTSTORE.template.txt');
const PACKAGE_JSON_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'PACKAGE_JSON.template.txt');
const TSCONFIG_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'TSCONFIG.template.txt');
const GITIGNORE_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'GITIGNORE.template.txt');
const DOMCONFIG_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'DOMCONFIG.template.txt');
const INDEX_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'INDEX.template.txt');
const MODULE_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'MODULE.template.txt');
const WELL_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'WELL.template.txt');
const INTERFACE_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'INTERFACE.template.txt');
const FACTORY_INTERFACE_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'FACTORY_INTERFACE.template.txt');
const IDENTIFIER_INTERFACE_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'IDENTIFIER_INTERFACE.template.txt');
const VALUE_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'VALUE.template.txt');
const IDENTIFIER_VALUE_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'IDENTIFIER_VALUE.template.txt');
const ENTITY_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'ENTITY.template.txt');
const TIMESTAMPED_ENTITY_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'TIMESTAMPED_ENTITY.template.txt');
const AGGREGATE_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'AGGREGATE.template.txt');
const TIMESTAMPED_AGGREGATE_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'TIMESTAMPED_AGGREGATE.template.txt');
const FACTORY_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'FACTORY.template.txt');
const REPOSITORY_INTERFACE_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'REPOSITORY_INTERFACE.template.txt');
const REPOSITORY_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'REPOSITORY.template.txt');
const IDENTITY_REPOSITORY_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'IDENTITY_REPOSITORY.template.txt');
const COMMAND_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'COMMAND.template.txt');
const QUERY_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'QUERY.template.txt');
const EVENT_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'EVENT.template.txt');
const SPECIFICATION_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'SPECIFICATION.template.txt');
const DTO_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'DTO.template.txt');
const EXCEPTION_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'EXCEPTION.template.txt');
/**
 * generateAggregateContents()
 *
 * generates the aggregate class contents with the specified name name.
 * @param name the name of the aggregate class.
 * @returns the aggregate class contents.
 */
const generateAggregateContents = async (name) => {
    const template = await fs_utils_1.readFile(AGGREGATE_PATH);
    return template.toString()
        .replace(/__AGGREGATE_NAME__/g, formatter_utils_1.formatClassName(name))
        .replace(/__AGGREGATE_PATH__/g, formatter_utils_1.formatDirectoryOrFileName(name))
        .replace(/__AGGREGATE_ROOT_VAR_NAME__/g, formatter_utils_1.formatVariableName(name));
};
exports.generateAggregateContents = generateAggregateContents;
/**
 * generateApiFileContents()
 *
 * generates the .api contents from the given domain name.
 * @param domainName the name of the domain to use.
 * @returns the populated template.
 */
const generateApiFileContents = async (domainName) => {
    // load the template file context
    const baseTemplate = await fs_utils_1.readFile(API_PATH);
    // replace the placeholders
    const apiName = formatter_utils_1.formatClassName(domainName);
    const apiPath = formatter_utils_1.formatDirectoryOrFileName(domainName);
    return baseTemplate.toString()
        .replace(/__DOMAIN_NAME__/g, apiName)
        .replace(/__DOMAIN_PATH__/g, apiPath);
};
exports.generateApiFileContents = generateApiFileContents;
/**
 * generateCommandContents()
 *
 * generates the command class contents with the specified name.
 * @param name the name of the command class.
 * @returns the command class contents.
 */
const generateCommandContents = async (name) => {
    const template = await fs_utils_1.readFile(COMMAND_PATH);
    return template.toString()
        .replace(/__COMMAND_NAME__/g, formatter_utils_1.formatClassName(name));
};
exports.generateCommandContents = generateCommandContents;
/**
 * generateDomConfigFileContents()
 *
 * generates the domconfig.json file contents.
 * @param domainName the domain name to use
 * @param description the description to use
 * @param packageManager the package manager to set.
 * @returns the generated domconfig file contents.
 */
const generateDomConfigFileContents = async (domainName, description, packageManager) => {
    // load the template
    const baseTemplate = await fs_utils_1.readFile(DOMCONFIG_PATH);
    return baseTemplate.toString()
        .replace(/__DOMAIN_NAME__/g, formatter_utils_1.formatDirectoryOrFileName(domainName))
        .replace(/__DOMAIN_DESCRIPTION__/g, description)
        .replace(/__PACKAGE_MANAGER__/g, packageManager.toString());
};
exports.generateDomConfigFileContents = generateDomConfigFileContents;
/**
 * generateDtoContents()
 *
 * generates the dto class contents with the specified name.
 * @param name the name of the dto class.
 * @returns the specification class contents.
 */
const generateDtoContents = async (name) => {
    const template = await fs_utils_1.readFile(DTO_PATH);
    return template.toString()
        .replace(/__DTO_NAME__/g, formatter_utils_1.formatClassName(name));
};
exports.generateDtoContents = generateDtoContents;
/**
 * generateEntityContents()
 *
 * generates the entity class contents with the specified name and identitifier value name.
 * @param name the name of the entity class.
 * @returns the entity class contents.
 */
const generateEntityContents = async (name) => {
    const template = await fs_utils_1.readFile(ENTITY_PATH);
    return template.toString()
        .replace(/__ENTITY_NAME__/g, formatter_utils_1.formatClassName(name))
        .replace(/__ENTITY_PATH__/g, formatter_utils_1.formatDirectoryOrFileName(name));
};
exports.generateEntityContents = generateEntityContents;
/**
 * generateEventContents()
 *
 * generates the event class contents with the specified name.
 * @param name the name of the event class.
 * @returns the event class contents.
 */
const generateEventContents = async (name, rootDir, broadcastEvent = false) => {
    const domconfig = await directory_utils_1.loadDomConfigFileContents(rootDir);
    if (!domconfig.name) {
        throw new Error('Invalid domain name.');
    }
    const template = await fs_utils_1.readFile(EVENT_PATH);
    return template.toString()
        .replace(/__EVENT_CLASSIFICATION__/g, formatter_utils_1.formatDirectoryOrFileName(domconfig.name))
        .replace(/__EVENT_CLASS_NAME__/g, formatter_utils_1.formatClassName(name))
        .replace(/__EVENT_STRING_NAME__/g, formatter_utils_1.formatDirectoryOrFileName(name))
        .replace(/__BROADCAST_EVENT__/g, broadcastEvent ? 'true' : 'false');
};
exports.generateEventContents = generateEventContents;
/**
 * generateExceptionContents()
 *
 * generates the exception class contents with the specified name.
 * @param name the name of the exception class.
 * @returns the exception class contents.
 */
const generateExceptionContents = async (name) => {
    const template = await fs_utils_1.readFile(EXCEPTION_PATH);
    return template.toString()
        .replace(/__EXCEPTION_NAME__/g, formatter_utils_1.formatClassName(name))
        .replace(/__EXCEPTION_TEXT__/g, formatter_utils_1.formatTitleText(name));
};
exports.generateExceptionContents = generateExceptionContents;
/**
 * generateFactoryContents()
 *
 * generates the factory class contents with the specified name.
 * @param name the name of the factory class.
 * @returns the factory class contents.
 */
const generateFactoryContents = async (name) => {
    const template = await fs_utils_1.readFile(FACTORY_PATH);
    return template.toString()
        .replace(/__FACTORY_NAME__/g, formatter_utils_1.formatClassName(name))
        .replace(/__FACTORY_PATH__/g, formatter_utils_1.formatDirectoryOrFileName(name));
};
exports.generateFactoryContents = generateFactoryContents;
/**
 * generateGitignoreFileContents()
 *
 * generates the default .gitignore file contents.
 * @returns the gitignore file contents
 */
const generateGitignoreFileContents = async () => {
    const template = await fs_utils_1.readFile(GITIGNORE_PATH);
    return template.toString();
};
exports.generateGitignoreFileContents = generateGitignoreFileContents;
/**
 * generateIdentifierInterfaceContents()
 *
 * generates the identifier interface contents with the specified name.
 * @param name the name of the interface.
 * @returns the interface contents.
 */
const generateIdentifierInterfaceContents = async (name) => {
    const template = await fs_utils_1.readFile(IDENTIFIER_INTERFACE_PATH);
    return template.toString()
        .replace(/__NAME__/g, formatter_utils_1.formatClassName(name));
};
exports.generateIdentifierInterfaceContents = generateIdentifierInterfaceContents;
/**
 * generateIdentifierValueContents()
 *
 * generates the identifier value class contents with the specified name.
 * @param name the name of the identifier value class.
 * @returns the value class contents.
 */
const generateIdentifierValueContents = async (name) => {
    const template = await fs_utils_1.readFile(IDENTIFIER_VALUE_PATH);
    return template.toString()
        .replace(/__VALUE_NAME__/g, formatter_utils_1.formatClassName(name))
        .replace(/__VALUE_PATH__/g, formatter_utils_1.formatDirectoryOrFileName(name));
};
exports.generateIdentifierValueContents = generateIdentifierValueContents;
/**
 * generateEventStoreFileContents()
 *
 * generates the event store file ocntents for the domain name.
 * @param domainName the domain name to use.
 * @returns the populated template.
 */
const generateEventStoreFileContents = async (domainName) => {
    // load the template.
    const baseTemplate = await fs_utils_1.readFile(EVENTSTORE_PATH);
    // replace the placeholders
    const eventStoreName = formatter_utils_1.formatClassName(domainName);
    return baseTemplate.toString()
        .replace(/__DOMAIN_NAME__/g, eventStoreName);
};
exports.generateEventStoreFileContents = generateEventStoreFileContents;
/**
 * generateIdentityRepositoryContents()
 *
 * generates the identity repository class contents with the specified name.
 * @param name the name of the repository class.
 * @returns the repository class contents.
 */
const generateIdentityRepositoryContents = async (name) => {
    const template = await fs_utils_1.readFile(IDENTITY_REPOSITORY_PATH);
    return template.toString()
        .replace(/__REPOSITORY_NAME__/g, formatter_utils_1.formatClassName(name))
        .replace(/__REPOSITORY_PATH__/g, `${formatter_utils_1.formatDirectoryOrFileName(name)}`);
};
exports.generateIdentityRepositoryContents = generateIdentityRepositoryContents;
/**
 * generateIndexFileContents()
 *
 * generates the index file contents.
 * @param domainName the name of the domain.
 * @returns the index file contents.
 */
const generateIndexFileContents = async (domainName) => {
    const template = await fs_utils_1.readFile(INDEX_PATH);
    return template.toString()
        .replace(/__DOMAIN_NAME__/g, formatter_utils_1.formatDirectoryOrFileName(domainName));
};
exports.generateIndexFileContents = generateIndexFileContents;
/**
 * generateFactoryInterfaceContents()
 *
 * generates the factory interface contents with the specified name.
 * @param name the name of the interface.
 * @returns the interface contents.
 */
const generateFactoryInterfaceContents = async (name) => {
    const template = await fs_utils_1.readFile(FACTORY_INTERFACE_PATH);
    return template.toString()
        .replace(/__NAME__/g, formatter_utils_1.formatClassName(name));
};
exports.generateFactoryInterfaceContents = generateFactoryInterfaceContents;
/**
 * generateInterfaceContents()
 *
 * generates the interface contents with the specified name.
 * @param name the name of the interface.
 * @returns the interface contents.
 */
const generateInterfaceContents = async (name) => {
    const template = await fs_utils_1.readFile(INTERFACE_PATH);
    return template.toString()
        .replace(/__NAME__/g, formatter_utils_1.formatClassName(name));
};
exports.generateInterfaceContents = generateInterfaceContents;
/**
 * generateModuleFileContents()
 *
 * generates the contents of the module file.
 * @param moduleName the name of the module to generate.
 * @returns the contents of a generated module file.
 */
const generateModuleFileContents = async (moduleName) => {
    const capitalizedName = formatter_utils_1.formatClassName(moduleName);
    const parameterizedName = formatter_utils_1.formatDirectoryOrFileName(moduleName);
    const template = await fs_utils_1.readFile(MODULE_PATH);
    return template.toString()
        .replace(/__MODULE_NAME__/g, capitalizedName)
        .replace(/__MODULE_PATH__/g, parameterizedName);
};
exports.generateModuleFileContents = generateModuleFileContents;
/**
 * generatePackageJsonFileContents()
 *
 * generates the package.json file contents.
 * @param domainName the domain name
 * @param description The description
 * @returns the populated package.json contents.
 */
const generatePackageJsonFileContents = async (domainName, description, author, repository, license) => {
    // load template
    const baseTemplate = await fs_utils_1.readFile(PACKAGE_JSON_PATH);
    // replace placeholders
    return baseTemplate.toString()
        .replace(/__DOMAIN_NAME__/g, formatter_utils_1.formatDirectoryOrFileName(domainName))
        .replace(/__DOMAIN_DESCRIPTION__/g, description)
        .replace(/__DOMAIN_AUTHOR__/g, author)
        .replace(/__DOMAIN_REPOSITORY__/g, repository)
        .replace(/__DOMAIN_LICENSE__/g, license);
};
exports.generatePackageJsonFileContents = generatePackageJsonFileContents;
/**
 * generateQueryContents()
 *
 * generates the query class contents with the specified name.
 * @param name the name of the query class.
 * @returns the query class contents.
 */
const generateQueryContents = async (name) => {
    const template = await fs_utils_1.readFile(QUERY_PATH);
    return template.toString()
        .replace(/__QUERY_NAME__/g, formatter_utils_1.formatClassName(name));
};
exports.generateQueryContents = generateQueryContents;
/**
 * generateRepositoryContents()
 *
 * generates the repository class contents with the specified name.
 * @param name the name of the repository class.
 * @returns the repository class contents.
 */
const generateRepositoryContents = async (name) => {
    const template = await fs_utils_1.readFile(REPOSITORY_PATH);
    return template.toString()
        .replace(/__REPOSITORY_NAME__/g, formatter_utils_1.formatClassName(name))
        .replace(/__REPOSITORY_PATH__/g, formatter_utils_1.formatDirectoryOrFileName(name));
};
exports.generateRepositoryContents = generateRepositoryContents;
/**
 * generateRepositoryInterfaceContents()
 *
 * generates the repository interface contents with the specified name.
 * @param name the name of the interface.
 * @returns the interface contents.
 */
const generateRepositoryInterfaceContents = async (name) => {
    const template = await fs_utils_1.readFile(REPOSITORY_INTERFACE_PATH);
    return template.toString()
        .replace(/__NAME__/g, formatter_utils_1.formatClassName(name));
};
exports.generateRepositoryInterfaceContents = generateRepositoryInterfaceContents;
/**
 * generateSpecificationContents()
 *
 * generates the command class contents with the specified name.
 * @param name the name of the specification class.
 * @returns the specification class contents.
 */
const generateSpecificationContents = async (name) => {
    const template = await fs_utils_1.readFile(SPECIFICATION_PATH);
    return template.toString()
        .replace(/__SPECIFICATION_NAME__/g, formatter_utils_1.formatClassName(name));
};
exports.generateSpecificationContents = generateSpecificationContents;
/**
 * generateTimestampAggregateContents()
 *
 * generates the timestamped aggregate class contents with the specified name name.
 * @param name the name of the aggregate class.
 * @returns the aggregate class contents.
 */
const generateTimestampedAggregateContents = async (name) => {
    const template = await fs_utils_1.readFile(TIMESTAMPED_AGGREGATE_PATH);
    return template.toString()
        .replace(/__AGGREGATE_NAME__/g, formatter_utils_1.formatClassName(name))
        .replace(/__AGGREGATE_PATH__/g, formatter_utils_1.formatDirectoryOrFileName(name))
        .replace(/__AGGREGATE_ROOT_VAR_NAME__/g, formatter_utils_1.formatVariableName(name));
};
exports.generateTimestampedAggregateContents = generateTimestampedAggregateContents;
/**
 * generateTimestampedEntityContents()
 *
 * generates the timestamped entity class contents with the specified name and identitifier value name.
 * @param name the name of the entity class.
 * @returns the entity class contents.
 */
const generateTimestampedEntityContents = async (name) => {
    const template = await fs_utils_1.readFile(TIMESTAMPED_ENTITY_PATH);
    return template.toString()
        .replace(/__ENTITY_NAME__/g, formatter_utils_1.formatClassName(name))
        .replace(/__ENTITY_PATH__/g, formatter_utils_1.formatDirectoryOrFileName(name));
};
exports.generateTimestampedEntityContents = generateTimestampedEntityContents;
/**
 * generateTsconfigFileContents()
 *
 * generates the default tsconfig.json file contents.
 * @returns the tsconfig file contents
 */
const generateTsconfigFileContents = async () => {
    const template = await fs_utils_1.readFile(TSCONFIG_PATH);
    return template.toString();
};
exports.generateTsconfigFileContents = generateTsconfigFileContents;
/**
 * generateValueContents()
 *
 * generates the value class contents with the specified name.
 * @param name the name of the value class.
 * @returns the value class contents.
 */
const generateValueContents = async (name) => {
    const template = await fs_utils_1.readFile(VALUE_PATH);
    return template.toString()
        .replace(/__VALUE_NAME__/g, formatter_utils_1.formatClassName(name))
        .replace(/__VALUE_PATH__/g, formatter_utils_1.formatDirectoryOrFileName(name));
};
exports.generateValueContents = generateValueContents;
/**
 * generateWellFileContents()
 *
 * generates the well file contents.
 * @param type the type of the well file to create
 * @returns a template for a well file.
 */
const generateWellFileContents = async (type) => {
    const template = await fs_utils_1.readFile(WELL_PATH);
    return template.toString().replace(/__WELL_TYPE__/g, type);
};
exports.generateWellFileContents = generateWellFileContents;
