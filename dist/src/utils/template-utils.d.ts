import { PackageManager } from './util-types';
/**
 * generateAggregateContents()
 *
 * generates the aggregate class contents with the specified name name.
 * @param name the name of the aggregate class.
 * @returns the aggregate class contents.
 */
export declare const generateAggregateContents: (name: string) => Promise<string>;
/**
 * generateApiFileContents()
 *
 * generates the .api contents from the given domain name.
 * @param domainName the name of the domain to use.
 * @returns the populated template.
 */
export declare const generateApiFileContents: (domainName: string) => Promise<string>;
/**
 * generateCommandContents()
 *
 * generates the command class contents with the specified name.
 * @param name the name of the command class.
 * @returns the command class contents.
 */
export declare const generateCommandContents: (name: string) => Promise<string>;
/**
 * generateDomConfigFileContents()
 *
 * generates the domconfig.json file contents.
 * @param domainName the domain name to use
 * @param description the description to use
 * @param packageManager the package manager to set.
 * @returns the generated domconfig file contents.
 */
export declare const generateDomConfigFileContents: (domainName: string, description: string, packageManager: PackageManager) => Promise<string>;
/**
 * generateDtoContents()
 *
 * generates the dto class contents with the specified name.
 * @param name the name of the dto class.
 * @returns the specification class contents.
 */
export declare const generateDtoContents: (name: string) => Promise<string>;
/**
 * generateEntityContents()
 *
 * generates the entity class contents with the specified name and identitifier value name.
 * @param name the name of the entity class.
 * @returns the entity class contents.
 */
export declare const generateEntityContents: (name: string) => Promise<string>;
/**
 * generateEventContents()
 *
 * generates the event class contents with the specified name.
 * @param name the name of the event class.
 * @returns the event class contents.
 */
export declare const generateEventContents: (name: string, rootDir: string, broadcastEvent?: boolean) => Promise<string>;
/**
 * generateExceptionContents()
 *
 * generates the exception class contents with the specified name.
 * @param name the name of the exception class.
 * @returns the exception class contents.
 */
export declare const generateExceptionContents: (name: string) => Promise<string>;
/**
 * generateFactoryContents()
 *
 * generates the factory class contents with the specified name.
 * @param name the name of the factory class.
 * @returns the factory class contents.
 */
export declare const generateFactoryContents: (name: string) => Promise<string>;
/**
 * generateGitignoreFileContents()
 *
 * generates the default .gitignore file contents.
 * @returns the gitignore file contents
 */
export declare const generateGitignoreFileContents: () => Promise<string>;
/**
 * generateIdentifierInterfaceContents()
 *
 * generates the identifier interface contents with the specified name.
 * @param name the name of the interface.
 * @returns the interface contents.
 */
export declare const generateIdentifierInterfaceContents: (name: string) => Promise<string>;
/**
 * generateIdentifierValueContents()
 *
 * generates the identifier value class contents with the specified name.
 * @param name the name of the identifier value class.
 * @returns the value class contents.
 */
export declare const generateIdentifierValueContents: (name: string) => Promise<string>;
/**
 * generateEventStoreFileContents()
 *
 * generates the event store file ocntents for the domain name.
 * @param domainName the domain name to use.
 * @returns the populated template.
 */
export declare const generateEventStoreFileContents: (domainName: string) => Promise<string>;
/**
 * generateIdentityRepositoryContents()
 *
 * generates the identity repository class contents with the specified name.
 * @param name the name of the repository class.
 * @returns the repository class contents.
 */
export declare const generateIdentityRepositoryContents: (name: string) => Promise<string>;
/**
 * generateIndexFileContents()
 *
 * generates the index file contents.
 * @param domainName the name of the domain.
 * @returns the index file contents.
 */
export declare const generateIndexFileContents: (domainName: string) => Promise<string>;
/**
 * generateFactoryInterfaceContents()
 *
 * generates the factory interface contents with the specified name.
 * @param name the name of the interface.
 * @returns the interface contents.
 */
export declare const generateFactoryInterfaceContents: (name: string) => Promise<string>;
/**
 * generateInterfaceContents()
 *
 * generates the interface contents with the specified name.
 * @param name the name of the interface.
 * @returns the interface contents.
 */
export declare const generateInterfaceContents: (name: string) => Promise<string>;
/**
 * generateModuleFileContents()
 *
 * generates the contents of the module file.
 * @param moduleName the name of the module to generate.
 * @returns the contents of a generated module file.
 */
export declare const generateModuleFileContents: (moduleName: string) => Promise<string>;
/**
 * generatePackageJsonFileContents()
 *
 * generates the package.json file contents.
 * @param domainName the domain name
 * @param description The description
 * @returns the populated package.json contents.
 */
export declare const generatePackageJsonFileContents: (domainName: string, description: string, author: string, repository: string, license: string) => Promise<string>;
/**
 * generateQueryContents()
 *
 * generates the query class contents with the specified name.
 * @param name the name of the query class.
 * @returns the query class contents.
 */
export declare const generateQueryContents: (name: string) => Promise<string>;
/**
 * generateRepositoryContents()
 *
 * generates the repository class contents with the specified name.
 * @param name the name of the repository class.
 * @returns the repository class contents.
 */
export declare const generateRepositoryContents: (name: string) => Promise<string>;
/**
 * generateRepositoryInterfaceContents()
 *
 * generates the repository interface contents with the specified name.
 * @param name the name of the interface.
 * @returns the interface contents.
 */
export declare const generateRepositoryInterfaceContents: (name: string) => Promise<string>;
/**
 * generateSpecificationContents()
 *
 * generates the command class contents with the specified name.
 * @param name the name of the specification class.
 * @returns the specification class contents.
 */
export declare const generateSpecificationContents: (name: string) => Promise<string>;
/**
 * generateTimestampAggregateContents()
 *
 * generates the timestamped aggregate class contents with the specified name name.
 * @param name the name of the aggregate class.
 * @returns the aggregate class contents.
 */
export declare const generateTimestampedAggregateContents: (name: string) => Promise<string>;
/**
 * generateTimestampedEntityContents()
 *
 * generates the timestamped entity class contents with the specified name and identitifier value name.
 * @param name the name of the entity class.
 * @returns the entity class contents.
 */
export declare const generateTimestampedEntityContents: (name: string) => Promise<string>;
/**
 * generateTsconfigFileContents()
 *
 * generates the default tsconfig.json file contents.
 * @returns the tsconfig file contents
 */
export declare const generateTsconfigFileContents: () => Promise<string>;
/**
 * generateValueContents()
 *
 * generates the value class contents with the specified name.
 * @param name the name of the value class.
 * @returns the value class contents.
 */
export declare const generateValueContents: (name: string) => Promise<string>;
/**
 * generateWellFileContents()
 *
 * generates the well file contents.
 * @param type the type of the well file to create
 * @returns a template for a well file.
 */
export declare const generateWellFileContents: (type: string) => Promise<string>;
//# sourceMappingURL=template-utils.d.ts.map