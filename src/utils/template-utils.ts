import { PackageManager } from './util-types';
import * as Path from 'path';
import { readFile } from './fs-utils';
import { formatClassName, formatDirectoryOrFileName, formatVariableName } from './formatter-utils';

const API_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'API.template.txt');
const EVENTSTORE_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'EVENTSTORE.template.txt');
const PACKAGE_JSON_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'PACKAGE_JSON.template.txt');
const TSCONFIG_PATH = Path.resolve(__dirname, `..${Path.sep}..${Path.sep}`, 'templates', 'TSCONFIG.template.txt');
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

/**
 * generateAggregateContents()
 * 
 * generates the aggregate class contents with the specified name name.
 * @param name the name of the entity class.
 * @returns the value class contents.
 */

 export const generateAggregateContents = async (name: string): Promise<string> => {
    const template = await readFile(AGGREGATE_PATH);
    return template.toString()
        .replace(/__AGGREGATE_NAME__/g, formatClassName(name))
        .replace(/__AGGREGATE_PATH__/g, formatDirectoryOrFileName(name))
        .replace(/__AGGREGATE_ROOT_VAR_NAME__/g, formatVariableName(name));
}

/**
 * generateApiFileContents()
 * 
 * generates the .api contents from the given domain name.
 * @param domainName the name of the domain to use.
 * @returns the populated template.
 */

export const generateApiFileContents = async (domainName: string): Promise<string> => {
    // load the template file context
    const baseTemplate = await readFile(API_PATH);

    // replace the placeholders
    const apiName = formatClassName(domainName)
    const apiPath = formatDirectoryOrFileName(domainName);

    return baseTemplate.toString()
        .replace(/__DOMAIN_NAME__/g, apiName)
        .replace(/__DOMAIN_PATH__/g, apiPath);
}

/**
 * generateDomConfigFileContents()
 * 
 * generates the domconfig.json file contents.
 * @param domainName the domain name to use
 * @param description the description to use
 * @param packageManager the package manager to set.
 * @returns the generated domconfig file contents.
 */

export const generateDomConfigFileContents = async (domainName: string, description: string, packageManager: PackageManager) => {
    // load the template
    const baseTemplate = await readFile(DOMCONFIG_PATH);
    return baseTemplate.toString()
        .replace(/__DOMAIN_NAME__/g, formatDirectoryOrFileName(domainName))
        .replace(/__DOMAIN_DESCRIPTION__/g, description)
        .replace(/__PACKAGE_MANAGER__/g, packageManager.toString());
}

/**
 * generateEntityContents()
 * 
 * generates the entity class contents with the specified name and identitifier value name.
 * @param name the name of the entity class.
 * @returns the value class contents.
 */

export const generateEntityContents = async (name: string): Promise<string> => {
    const template = await readFile(ENTITY_PATH);
    return template.toString()
        .replace(/__ENTITY_NAME__/g, formatClassName(name))
        .replace(/__ENTITY_PATH__/g, formatDirectoryOrFileName(name));
}

/**
 * generateFactoryContents()
 * 
 * generates the factory class contents with the specified name.
 * @param name the name of the value class.
 * @returns the value class contents.
 */

 export const generateFactoryContents = async (name: string): Promise<string> => {
    const template = await readFile(FACTORY_PATH);
    return template.toString()
        .replace(/__FACTORY_NAME__/g, formatClassName(name))
        .replace(/__FACTORY_PATH__/g, formatDirectoryOrFileName(name));
}

/**
 * generateIdentifierInterfaceContents()
 * 
 * generates the identifier interface contents with the specified name.
 * @param name the name of the interface.
 * @returns the interface contents.
 */

export const generateIdentifierInterfaceContents = async (name: string): Promise<string> => {
    const template = await readFile(IDENTIFIER_INTERFACE_PATH);
    return template.toString()
        .replace(/__NAME__/g, formatClassName(name));
}

/**
 * generateIdentifierValueContents()
 * 
 * generates the identifier value class contents with the specified name.
 * @param name the name of the identifier value class.
 * @returns the value class contents.
 */

export const generateIdentifierValueContents = async (name: string): Promise<string> => {
    const template = await readFile(IDENTIFIER_VALUE_PATH);
    return template.toString()
        .replace(/__VALUE_NAME__/g, formatClassName(name))
        .replace(/__VALUE_PATH__/g, formatDirectoryOrFileName(name));
}


/**
 * generateEventStoreFileContents()
 * 
 * generates the event store file ocntents for the domain name.
 * @param domainName the domain name to use.
 * @returns the populated template.
 */

export const generateEventStoreFileContents = async (domainName: string): Promise<string> => {
    // load the template.
    const baseTemplate = await readFile(EVENTSTORE_PATH);

    // replace the placeholders
    const eventStoreName = formatClassName(domainName);
    return baseTemplate.toString()
        .replace(/__DOMAIN_NAME__/g, eventStoreName);
}

/**
 * generateIdentityRepositoryContents()
 * 
 * generates the identity repository class contents with the specified name.
 * @param name the name of the value class.
 * @returns the value class contents.
 */

export const generateIdentityRepositoryContents = async (name: string): Promise<string> => {
    const template = await readFile(IDENTITY_REPOSITORY_PATH);
    return template.toString()
        .replace(/__REPOSITORY_NAME__/g, formatClassName(name))
        .replace(/__REPOSITORY_PATH__/g, `${formatDirectoryOrFileName(name)}`);
}

/**
 * generateIndexFileContents()
 * 
 * generates the index file contents.
 * @param domainName the name of the domain.
 * @returns the index file contents.
 */

export const generateIndexFileContents = async (domainName: string): Promise<string> => {
    const template = await readFile(INDEX_PATH);
    return template.toString()
        .replace(/__DOMAIN_NAME__/g, formatDirectoryOrFileName(domainName));
}

/**
 * generateFactoryInterfaceContents()
 * 
 * generates the factory interface contents with the specified name.
 * @param name the name of the interface.
 * @returns the interface contents.
 */

export const generateFactoryInterfaceContents = async (name: string): Promise<string> => {
    const template = await readFile(FACTORY_INTERFACE_PATH);
    return template.toString()
        .replace(/__NAME__/g, formatClassName(name));
}

/**
 * generateInterfaceContents()
 * 
 * generates the interface contents with the specified name.
 * @param name the name of the interface.
 * @returns the interface contents.
 */

export const generateInterfaceContents = async (name: string): Promise<string> => {
    const template = await readFile(INTERFACE_PATH);
    return template.toString()
        .replace(/__NAME__/g, formatClassName(name));
}

/**
 * generateModuleFileContents()
 * 
 * generates the contents of the module file.
 * @param moduleName the name of the module to generate.
 * @returns the contents of a generated module file.
 */

export const generateModuleFileContents = async (moduleName: string): Promise<string> => {
    const capitalizedName = formatClassName(moduleName)
    const parameterizedName = formatDirectoryOrFileName(moduleName);
    const template = await readFile(MODULE_PATH);
    return template.toString()
        .replace(/__MODULE_NAME__/g, capitalizedName)
        .replace(/__MODULE_PATH__/g, parameterizedName);
}

/**
 * generatePackageJsonFileContents()
 * 
 * generates the package.json file contents.
 * @param domainName the domain name
 * @param description The description
 * @returns the populated package.json contents.
 */

export const generatePackageJsonFileContents = async (domainName: string, description: string, author: string, repository: string, license: string): Promise<string> => {
    // load template
    const baseTemplate = await readFile(PACKAGE_JSON_PATH);

    // replace placeholders
    return baseTemplate.toString()
        .replace(/__DOMAIN_NAME__/g, formatDirectoryOrFileName(domainName))
        .replace(/__DOMAIN_DESCRIPTION__/g, description)
        .replace(/__DOMAIN_AUTHOR__/g, author)
        .replace(/__DOMAIN_REPOSITORY__/g, repository)
        .replace(/__DOMAIN_LICENSE__/g, license);
}

/**
 * generateRepositoryContents()
 * 
 * generates the repository class contents with the specified name.
 * @param name the name of the value class.
 * @returns the value class contents.
 */

export const generateRepositoryContents = async (name: string): Promise<string> => {
    const template = await readFile(REPOSITORY_PATH);
    return template.toString()
        .replace(/__REPOSITORY_NAME__/g, formatClassName(name))
        .replace(/__REPOSITORY_PATH__/g, formatDirectoryOrFileName(name));
}

/**
 * generateRepositoryInterfaceContents()
 * 
 * generates the repository interface contents with the specified name.
 * @param name the name of the interface.
 * @returns the interface contents.
 */

export const generateRepositoryInterfaceContents = async (name: string): Promise<string> => {
    const template = await readFile(REPOSITORY_INTERFACE_PATH);
    return template.toString()
        .replace(/__NAME__/g, formatClassName(name));
}


/**
 * generateTimestampAggregateContents()
 * 
 * generates the timestamped aggregate class contents with the specified name name.
 * @param name the name of the entity class.
 * @returns the value class contents.
 */

 export const generateTimestampedAggregateContents = async (name: string): Promise<string> => {
    const template = await readFile(TIMESTAMPED_AGGREGATE_PATH);
    return template.toString()
        .replace(/__AGGREGATE_NAME__/g, formatClassName(name))
        .replace(/__AGGREGATE_PATH__/g, formatDirectoryOrFileName(name))
        .replace(/__AGGREGATE_ROOT_VAR_NAME__/g, formatVariableName(name));
}

/**
 * generateTimestampedEntityContents()
 * 
 * generates the timestamped entity class contents with the specified name and identitifier value name.
 * @param name the name of the entity class.
 * @returns the value class contents.
 */

export const generateTimestampedEntityContents = async (name: string): Promise<string> => {
    const template = await readFile(TIMESTAMPED_ENTITY_PATH);
    return template.toString()
        .replace(/__ENTITY_NAME__/g, formatClassName(name))
        .replace(/__ENTITY_PATH__/g, formatDirectoryOrFileName(name));
}

/**
 * generateTsconfigFileContents()
 * 
 * generates the default tsconfig.json file contents.
 * @returns the tsconfig file contents
 */

export const generateTsconfigFileContents = async (): Promise<string> => {
    const template = await readFile(TSCONFIG_PATH);
    return template.toString();
}

/**
 * generateValueContents()
 * 
 * generates the value class contents with the specified name.
 * @param name the name of the value class.
 * @returns the value class contents.
 */

export const generateValueContents = async (name: string): Promise<string> => {
    const template = await readFile(VALUE_PATH);
    return template.toString()
        .replace(/__VALUE_NAME__/g, formatClassName(name))
        .replace(/__VALUE_PATH__/g, formatDirectoryOrFileName(name));
}


/**
 * generateWellFileContents()
 * 
 * generates the well file contents.
 * @param type the type of the well file to create
 * @returns a template for a well file.
 */

export const generateWellFileContents = async (type: string): Promise<string> => {
    const template = await readFile(WELL_PATH);
    return template.toString().replace(/__WELL_TYPE__/g, type);
}