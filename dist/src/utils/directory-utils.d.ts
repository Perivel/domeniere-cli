import { DomConfig, PackageManager } from './util-types';
/**
 * aggregateDirectoryPath()
 *
 * gets the path to the aggregate directory for the specified aggregate and module.
 * @param aggregateName the aggregate name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the aggregate directory.
 */
export declare const aggregateDirectoryPath: (aggregateName: string, module: string, rootDir: string) => string;
/**
 * aggregatesDirectoryExists()
 *
 * determines if the aggregates directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the aggregates directory exists for the specified module. FALSE otherwise.
 */
export declare const aggregatesDirectoryExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * aggregateClassPath()
 *
 * gets the path to the class file of the specified aggregate name, in the specified module.
 * @param aggregateName the aggregate name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
export declare const aggregateClassPath: (aggregateName: string, module: string, rootDir: string) => string;
/**
 * aggregateInterfacePath()
 *
 * gets the path to the interface file of the specified aggregate name, in the specified module.
 * @param aggregateName the aggregate name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */
export declare const aggregateInterfacePath: (aggregateName: string, module: string, rootDir: string) => string;
/**
 * aggregatesWellFileExists()
 *
 * determines if the aggregates well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the aggregates well exists. FALSE otehrwise.
 */
export declare const aggregatesWellFileExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * aggregatesWellFilePath()
 *
 * gets the path for the aggregates well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
export declare const aggregatesWellFilePath: (moduleName: string, rootDir: string) => string;
/**
 * aggregateExists()
 *
 * determines if the specified aggregate exists in the specified module.
 * @param aggregateName the aggregate name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the aggregate exists. FALSE otherwise.
 */
export declare const aggregateExists: (aggregateName: string, moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * apiFilePath()
 *
 * gets the API file path.
 * @param domainName the domain name
 * @param rootDir the root directory.
 * @returns the api file path.
 */
export declare const apiFilePath: (domainName: string, rootDir: string) => string;
/**
 * aggregatesDirectoryPath()
 *
 * gets the path to the aggregates directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the aggregates directory for that module.
 */
export declare const aggregatesDirectoryPath: (moduleName: string, rootDir: string) => string;
/**
 * commandClassPath()
 *
 * gets the path to the class file of the specified command name, in the specified module.
 * @param commandName the command name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
export declare const commandClassPath: (commandName: string, module: string, rootDir: string) => string;
/**
 * commandDirectoryPath()
 *
 * gets the path to the command directory for the specified command and module.
 * @param commandName the command name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the command directory.
 */
export declare const commandDirectoryPath: (commandName: string, module: string, rootDir: string) => string;
/**
 * commandExists()
 *
 * determines if the specified command exists in the specified module.
 * @param commandName the command name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the command exists. FALSE otherwise.
 */
export declare const commandExists: (commandName: string, moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * createAggregate()
 *
 * creates an aggregate.
 * @param aggregateName the aggregate name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param timestamped a flag to indicate whether the aggregate should be timestamped.
 */
export declare const createAggregate: (aggregateName: string, moduleName: string, rootDir: string, timestamped?: boolean) => Promise<void>;
/**
 * createAggregatesDirectoryForModule()
 *
 * creates a aggregates directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
export declare const createAggregatesDirectoryForModule: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * createCommand()
 *
 * creates a command
 * @param commandName the command name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */
export declare const createCommand: (commandName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * createDto()
 *
 * creates a DTO
 * @param dtoName the dto name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */
export declare const createDto: (dtoName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * createDtosDirectoryForModule()
 *
 * creates a dtos directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
export declare const createDtosDirectoryForModule: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * createEntity()
 *
 * creates an entity.
 * @param entityName the entity name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param timestamped a flag to indicate whether the entity should be timestamped.
 */
export declare const createEntity: (entityName: string, moduleName: string, rootDir: string, timestamped?: boolean) => Promise<void>;
/**
 * createEvent()
 *
 * creates an event.
 * @param eventName the event name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param broadcastEvent a flag to indicate whether the event should be broadcasted
 */
export declare const createEvent: (eventName: string, moduleName: string, rootDir: string, broadcastEvent?: boolean) => Promise<void>;
/**
 * createException()
 *
 * creates an Exception
 * @param exceptionName the exception name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */
export declare const createException: (dtoName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * createExceptionsDirectoryForModule()
 *
 * creates a exceptions directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
export declare const createExceptionsDirectoryForModule: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * createFactory()
 *
 * creates an factory.
 * @param factoryName the factory name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */
export declare const createFactory: (factoryName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * createModule()
 *
 * creates a module with the specified name.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
export declare const createModule: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * createEntitiesDirectoryForModule()
 *
 * creates a entities directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
export declare const createEntitiesDirectoryForModule: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * createEventsDirectoryForModule()
 *
 * creates an events directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
export declare const createEventsDirectoryForModule: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * createFactoriesDirectoryForModule()
 *
 * creates a factories directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
export declare const createFactoriesDirectoryForModule: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * createQuery()
 *
 * creates an query.
 * @param queryName the query name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */
export declare const createQuery: (queryName: string, moduleName: string, rootDir: string, identity?: boolean) => Promise<void>;
/**
 * createRepositoriesDirectoryForModule()
 *
 * creates a repositories directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
export declare const createRepositoriesDirectoryForModule: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * createRepository()
 *
 * creates an factory.
 * @param repositoryName the repository name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param identity indicates whether the repository is an identity generating repository.
 */
export declare const createRepository: (repositoryName: string, moduleName: string, rootDir: string, identity?: boolean) => Promise<void>;
/**
 * createServicesDirectoryForModule()
 *
 * creates a services directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
export declare const createServicesDirectoryForModule: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * createSpecification()
 *
 * creates an specification
 * @param specificationName the specification name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */
export declare const createSpecification: (specificationName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * createSpecificationsDirectoryForModule()
 *
 * creates a specifications directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
export declare const createSpecificationsDirectoryForModule: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * createValuesDirectoryForModule()
 *
 * creates a values directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
export declare const createValuesDirectoryForModule: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * createValue()
 *
 * creates a value object.
 * @param valueName the value name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param identifier a flag to indicate whether the value is to be used as an identifier.
 */
export declare const createValue: (valueName: string, moduleName: string, rootDir: string, identifier?: boolean) => Promise<void>;
/**
 * destroyDomainDirectory()
 *
 * destroys the domain directory.
 * @param domainName the domain name to delete
 */
export declare const deleteDomainDirectory: (domainName: string) => Promise<void>;
/**
 * domconfigPath()
 *
 * gets the path to the domconfig.json file.
 * @param rootDir the root directory.
 * @returns the path to the domconfig.json file.
 */
export declare const domconfigPath: (rootDir: string) => string;
/**
 * dtoClassPath()
 *
 * gets the path to the class file of the specified dto name, in the specified module.
 * @param dtoName the dto name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
export declare const dtoClassPath: (dtoName: string, module: string, rootDir: string) => string;
/**
 * dtoExists()
 *
 * determines if the specified dto exists in the specified module.
 * @param dtoName the dto name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns
 */
export declare const dtoExists: (dtoName: string, moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * dtosDirectoryExists()
 *
 * determines if the dtos directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the DTO directory exists for the specified module. FALSE otherwise.
 */
export declare const dtosDirectoryExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * dtosDirectoryPath()
 *
 * gets the path to the dtos directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the dtos directory for that module.
 */
export declare const dtosDirectoryPath: (moduleName: string, rootDir: string) => string;
/**
 * dtosWellFileExists()
 *
 * determines if the dtos well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the dtos well exists. FALSE otehrwise.
 */
export declare const dtosWellFileExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * dtosWellFilePath()
 *
 * gets the path for the dtos well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
export declare const dtosWellFilePath: (moduleName: string, rootDir: string) => string;
/**
 * eventStorePath()
 *
 * gets the event store path.
 * @param domainName the domain name.
 * @param rootDir the root directory of the project.
 * @returns
 */
export declare const eventStorePath: (domainName: string, rootDir: string) => string;
/**
 * entityClassPath()
 *
 * gets the path to the class file of the specified entity name, in the specified module.
 * @param entityName the entity name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
export declare const entityClassPath: (entityName: string, module: string, rootDir: string) => string;
/**
 * entitiesDirectoryExists()
 *
 * determines if the entitiess directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the entities directory exists for the specified module. FALSE otherwise.
 */
export declare const entitiesDirectoryExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * entityExists()
 *
 * determines if the specified entity exists in the specified module.
 * @param entityName the entity name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns
 */
export declare const entityExists: (entityName: string, moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * entityDirectoryPath()
 *
 * gets the path to the  entity directory for the specified entity and module.
 * @param entityName the entity name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the entity object directory.
 */
export declare const entityDirectoryPath: (entityName: string, module: string, rootDir: string) => string;
/**
 * entitiesDirectoryPath()
 *
 * gets the path to the entities directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the entities directory for that module.
 */
export declare const entitiesDirectoryPath: (moduleName: string, rootDir: string) => string;
/**
 * entitiesInterfacePath()
 *
 * gets the path to the interface file of the specified entity name, in the specified module.
 * @param entityName the entity name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */
export declare const entityInterfacePath: (entityName: string, module: string, rootDir: string) => string;
/**
 * entitiesWellFileExists()
 *
 * determines if the entities well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the entities well exists. FALSE otehrwise.
 */
export declare const entitiesWellFileExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * entitiesWellFilePath()
 *
 * gets the path for the entities well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
export declare const entitiesWellFilePath: (moduleName: string, rootDir: string) => string;
/**
 * evemtClassPath()
 *
 * gets the path to the class file of the specified event name, in the specified module.
 * @param evmtName the event name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
export declare const eventClassPath: (eventName: string, module: string, rootDir: string) => string;
/**
 * eventDirectoryPath()
 *
 * gets the path to the events directory for the specified command and module.
 * @param eventName the event name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the repository directory.
 */
export declare const eventDirectoryPath: (eventName: string, module: string, rootDir: string) => string;
/**
 * eventExists()
 *
 * determines if the specified event exists in the specified module.
 * @param eventName the event name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns
 */
export declare const eventExists: (eventName: string, moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * eventsDirectoryExists()
 *
 * determines if the events directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the events directory exists for the specified module. FALSE otherwise.
 */
export declare const eventsDirectoryExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * eventsDirectoryPath()
 *
 * gets the path to the events directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the events directory for that module.
 */
export declare const eventsDirectoryPath: (moduleName: string, rootDir: string) => string;
/**
 * eventsWellFileExists()
 *
 * determines if the events well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the events well exists. FALSE otehrwise.
 */
export declare const eventsWellFileExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * eventsWellFilePath()
 *
 * gets the path for the events well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 * @returns the path to the events well for the specified module.
 */
export declare const eventsWellFilePath: (moduleName: string, rootDir: string) => string;
/**
 * exceptionClassPath()
 *
 * gets the path to the class file of the specified exception name, in the specified module.
 * @param exceptionName the exception name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
export declare const exceptionClassPath: (exceptionName: string, module: string, rootDir: string) => string;
/**
 * exceptionsDirectoryExists()
 *
 * determines if the exceptions directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the DTO directory exists for the specified module. FALSE otherwise.
 */
export declare const exceptionsDirectoryExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * exceptionsDirectoryPath()
 *
 * gets the path to the exceptions directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the exceptions directory for that module.
 */
export declare const exceptionsDirectoryPath: (moduleName: string, rootDir: string) => string;
/**
 * exceptionExists()
 *
 * determines if the specified exception exists in the specified module.
 * @param exceptionName the exception name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the exception exists. FALSE otherwise.
 */
export declare const exceptionExists: (exceptionName: string, moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * exceptionsWellFileExists()
 *
 * determines if the exceptions well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the exceptions well exists. FALSE otehrwise.
 */
export declare const exceptionsWellFileExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * exceptionsWellFilePath()
 *
 * gets the path for the exceptions well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
export declare const exceptionsWellFilePath: (moduleName: string, rootDir: string) => string;
/**
 * exposeAggregate()
 *
 * adds the specified aggregate to the module's well file.
 * @param aggregateName the name of the aggregate to export.
 * @param moduleName the module where the value resides.
 * @param rootDir the project root directory.
 */
export declare const exposeAggregate: (aggregateName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeAggregatesWell()
 *
 * exposes the aggregates well to the module.
 * @param moduleName the name of the module who's
 * @param rootDir the project root directory.
 */
export declare const exposeAggregatesWell: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeCommand()
 *
 * adds the specified command to the module's well file.
 * @param commandName the name of the command to export.
 * @param moduleName the module where the command resides.
 * @param rootDir the project root directory.
 */
export declare const exposeCommand: (commandName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeDto()
 *
 * adds the specified dto to the module's well file.
 * @param dtoName the name of the dto to export.
 * @param moduleName the module where the dto resides.
 * @param rootDir the project root directory.
 */
export declare const exposeDto: (dtoName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeDtosWell()
 *
 * exposes the dtos well to the module.
 * @param moduleName the name of the module who's
 * @param rootDir the project root directory.
 */
export declare const exposeDtosWell: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeEntitiesWell()
 *
 * exposes the entities well to the module.
 * @param moduleName the name of the module
 * @param rootDir the project root directory.
 */
export declare const exposeEntitiesWell: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeEntity()
 *
 * adds the specified entity to the module's well file.
 * @param entityName the name of the entity to export.
 * @param moduleName the module where the entity resides
 * @param rootDir the project root directory.
 */
export declare const exposeEntity: (entityName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeEvent()
 *
 * adds the specified event to the module's well file.
 * @param evemtName the name of the evemt to export.
 * @param moduleName the module where the event resides.
 * @param rootDir the project root directory.
 */
export declare const exposeEvent: (eventName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeEventsWell()
 *
 * exposes the events well to the module.
 * @param moduleName the name of the module
 * @param rootDir the project root directory.
 */
export declare const exposeEventsWell: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeException()
 *
 * adds the specified exception to the module's well file.
 * @param exceptionName the name of the exception to export.
 * @param moduleName the module where the dto resides.
 * @param rootDir the project root directory.
 */
export declare const exposeException: (exceptionName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeExceptionsWell()
 *
 * exposes the exceptions well to the module.
 * @param moduleName the name of the module who's
 * @param rootDir the project root directory.
 */
export declare const exposeExceptionsWell: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeFactory()
 *
 * adds the specified factory to the module's well file.
 * @param factoryName the name of the factory to export.
 * @param moduleName the module where the factory resides.
 * @param rootDir the project root directory.
 */
export declare const exposeFactory: (factoryName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeFactoriesWell()
 *
 * exposes the factories well to the module.
 * @param moduleName the name of the module who's
 * @param rootDir the project root directory.
 */
export declare const exposeFactoriesWell: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeModule()
 *
 * exposes a module.
 * @param moduleName the module to expose
 * @param rootDir the root directory of the project.
 */
export declare const exposeModule: (moduleName: string, rootDir?: string) => Promise<void>;
/**
 * exposeQuery()
 *
 * adds the specified query to the module's well file.
 * @param queryName the name of the query to export.
 * @param moduleName the module where the query resides.
 * @param rootDir the project root directory.
 */
export declare const exposeQuery: (queryName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeRepositoriesWell()
 *
 * exposes the repositories well to the module.
 * @param moduleName the name of the module
 * @param rootDir the project root directory.
 */
export declare const exposeRepositoriesWell: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeRepository()
 *
 * adds the specified repository to the module's well file.
 * @param repositoryName the name of the repository to export.
 * @param moduleName the module where the repository resides.
 * @param rootDir the project root directory.
 */
export declare const exposeRepository: (repositoryName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeSpecification()
 *
 * adds the specified specification to the module's well file.
 * @param specificationName the name of the specification to export.
 * @param moduleName the module where the specification resides.
 * @param rootDir the project root directory.
 */
export declare const exposeSpecification: (specificationName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeServicesWell()
 *
 * exposes the services well to the module.
 * @param moduleName the name of the module who's
 * @param rootDir the project root directory.
 */
export declare const exposeServicesWell: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeSpecificationsWell()
 *
 * exposes the specifications well to the module.
 * @param moduleName the name of the module who's
 * @param rootDir the project root directory.
 */
export declare const exposeSpecificationsWell: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeValue()
 *
 * adds the specified value to the module's well file.
 * @param valueName the name of the value to export.
 * @param moduleName the module where the value resides.
 * @param rootDir the project root directory.
 */
export declare const exposeValue: (valueName: string, moduleName: string, rootDir: string) => Promise<void>;
/**
 * exposeValuesWell()
 *
 * exposes the values well to the module.
 * @param moduleName the name of the module who's
 * @param rootDir the project root directory.
 */
export declare const exposeValuesWell: (moduleName: string, rootDir: string) => Promise<void>;
/**
 * factoriesDirectoryExists()
 *
 * determines if the factories directory for the specified module exists.
 * @param moduleName module name
 * @param rootDir the root directory.
 * @returns TRUE if the values directory exists for the specified module. FALSE otherwise.
 */
export declare const factoriesDirectoryExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * factoriesDirectoryPath()
 *
 * gets the path to the factories directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the factories directory for that module.
 */
export declare const factoriesDirectoryPath: (moduleName: string, rootDir: string) => string;
/**
 * factoriesWellFileExists()
 *
 * determines if the factories well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the factproes well exists. FALSE otehrwise.
 */
export declare const factoriesWellFileExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * factoriesWellFilePath()
 *
 * gets the path for the value well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
export declare const factoriesWellFilePath: (moduleName: string, rootDir: string) => string;
/**
 * factoryClassPath()
 *
 * gets the path to the class file of the specified factory name, in the specified module.
 * @param factoryName the factory name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
export declare const factoryClassPath: (factoryName: string, module: string, rootDir: string) => string;
/**
 * factoryDirectoryPath()
 *
 * gets the path to the factory directory for the specified factory and module.
 * @param factoryName the factory name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the factories object directory.
 */
export declare const factoryDirectoryPath: (factoryName: string, module: string, rootDir: string) => string;
/**
 * factoryExists()
 *
 * determines if the specified value exists in the specified module.
 * @param factoryName the factory name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the specified factory exists. FALSE otherwise.
 */
export declare const factoryExists: (factoryName: string, moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * factoryInterfacePath()
 *
 * gets the path to the interface file of the specified factory name, in the specified module.
 * @param factoryName the factory name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */
export declare const factoryInterfacePath: (factoryName: string, module: string, rootDir: string) => string;
/**
 * fileContains()
 *
 * determines if the file contains the contents.
 * @param path the path of the file to check.
 * @param contents the contents to check for
 * @returns TRUE if the the file contains the contents. FALSE otherwise.
 */
export declare const fileContains: (path: string, contents: string) => Promise<boolean>;
/**
 * getAbsolutePath()
 *
 * gets the absolute path from a path segment.
 * @param segment The path segment.
 * @returns the absolute path.
 */
export declare const getAbsolutePath: (segment: string) => string;
/**
 * getDomconfigPath()
 *
 * gets the path to the domconfig.json file.
 * @param rootDir the domain root directory.
 * @returns the path to the domconfig.json file.
 */
export declare const getDomconfigFilePath: (rootDir: string) => string;
/**
 * gitignorePath()
 *
 * gets the path to the .gitignore file from the root.
 * @param rootDir the root directory.
 * @returns the path to the package.json file.
 */
export declare const gitignorePath: (rootDir: string) => string;
/**
 * indexPath()
 *
 * gets the index path.
 * @param domainName the domain name
 * @param rootDir the root of the project
 * @returns the index file path.
 */
export declare const indexPath: (domainName: string, rootDir: string) => string;
/**
 * isDomeniereProject()
 *
 * determines if the specified path is a Domeniere Project.
 * @param rootDir the path to test.
 * @returns TRUE if the path is a domeniere project root.
 */
export declare const isDomeniereProject: (rootDir: string) => Promise<boolean>;
/**
 * loadDomConfigFileContents()
 *
 * loads the domconfig.json file contents.
 * @param rootDir the path to load.
 * @returns the loaded DOMCONFIG contents.
 */
export declare const loadDomConfigFileContents: (rootDir: string) => Promise<DomConfig>;
/**
 * moduleDirectoryPath()
 *
 * gets the path to the specified module directory.
 * @param moduleName the module name.
 * @param rootDir the root directory of the project. It defaults to the current working directory.
 * @returns the path to the specified module.
 */
export declare const moduleDirectoryPath: (moduleName: string, rootDir?: string) => string;
/**
 * moduleExists()
 *
 * determines if the module exists.
 * @param moduleName the module to test
 * @param rootDir thr root directory to search.
 * @returns TRUE if the module exists. FALSE otherwise.
 */
export declare const moduleExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * moduleFilePath()
 *
 * gets the path to the specified module file.
 * @param moduleName the module name.
 * @param rootDir the root directory of the project. It defaults to the current working directory.
 * @returns the path to the specified module.
 */
export declare const moduleFilePath: (moduleName: string, rootDir?: string) => string;
/**
 * packagePath()
 *
 * gets the path to the package.json file from the root.
 * @param rootDir the root directory.
 * @returns the path to the package.json file.
 */
export declare const packagePath: (rootDir: string) => string;
/**
 * pathExists()
 *
 * determines if the specified path exists.
 * @param path the path to test.
 * @returns TRUE if the directory exists. FALSE otherwise.
 */
export declare const pathExists: (path: string) => Promise<boolean>;
/**
 * queryClassPath()
 *
 * gets the path to the class file of the specified query name, in the specified module.
 * @param queryName the query name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
export declare const queryClassPath: (queryName: string, module: string, rootDir: string) => string;
/**
 * queryDirectoryPath()
 *
 * gets the path to the query directory for the specified command and module.
 * @param queryName the query name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the query directory.
 */
export declare const queryDirectoryPath: (queryName: string, module: string, rootDir: string) => string;
/**
 * queryExists()
 *
 * determines if the specified query exists in the specified module.
 * @param queryName the query name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the query exists. FALSE otherwise.
 */
export declare const queryExists: (queryName: string, moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * repositoriesDirectoryExists()
 *
 * determines if the repositories directory for the specified module exists.
 * @param moduleName module name
 * @param rootDir the root directory.
 * @returns TRUE if the repositories directory exists for the specified module. FALSE otherwise.
 */
export declare const repositoriesDirectoryExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * repositoriesDirectoryPath()
 *
 * gets the path to the repositories directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the repositories directory for that module.
 */
export declare const repositoriesDirectoryPath: (moduleName: string, rootDir: string) => string;
/**
 * repositoriesWellFileExists()
 *
 * determines if the repositories well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the repositories well exists. FALSE otehrwise.
 */
export declare const repositoriesWellFileExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * repositoriesWellFilePath()
 *
 * gets the path for the repositories well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
export declare const repositoriesWellFilePath: (moduleName: string, rootDir: string) => string;
/**
 * repositoryClassPath()
 *
 * gets the path to the class file of the specified repository name, in the specified module.
 * @param repositoryName the repository name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
export declare const repositoryClassPath: (repositoryName: string, module: string, rootDir: string) => string;
/**
 * repositoryDirectoryPath()
 *
 * gets the path to the repository directory for the specified repository and module.
 * @param repositoryName the repository name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the repository directory.
 */
export declare const repositoryDirectoryPath: (repositoryName: string, module: string, rootDir: string) => string;
/**
 * repositoryExists()
 *
 * determines if the specified repository exists in the specified module.
 * @param repositoryName the repository name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the repository exists. FALSE otherwise.
 */
export declare const repositoryExists: (repositoryName: string, moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * repositoryInterfacePath()
 *
 * gets the path to the interface file of the specified repository name, in the specified module.
 * @param repositoryName the repository name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */
export declare const repositoryInterfacePath: (repositoryName: string, module: string, rootDir: string) => string;
/**
 * scaffoldDomainDirectory()
 *
 * scaffolds a Domeniere domain directory.
 * @param path the path to scaffold.
 */
export declare const scaffoldDomainDirectory: (domainName: string, description: string, author: string, repository: string, license: string, packageManager: PackageManager) => Promise<void>;
/**
 * servicesDirectoryExists()
 *
 * determines if the services directory for the specified module exists.
 * @param moduleName module name
 * @param rootDir the root directory.
 * @returns TRUE if the services directory exists for the specified module. FALSE otherwise.
 */
export declare const servicesDirectoryExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * servicesDirectoryPath()
 *
 * gets the path to the services directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the services directory for that module.
 */
export declare const servicesDirectoryPath: (moduleName: string, rootDir: string) => string;
/**
 * servicesWellFileExists()
 *
 * determines if the services well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the services well exists. FALSE otehrwise.
 */
export declare const servicesWellFileExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * servicesWellFilePath()
 *
 * gets the path for the services well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
export declare const servicesWellFilePath: (moduleName: string, rootDir: string) => string;
/**
 * specificationClassPath()
 *
 * gets the path to the class file of the specified specification name, in the specified module.
 * @param specificationName the specification name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
export declare const specificationClassPath: (specificationName: string, module: string, rootDir: string) => string;
/**
 * specificationDirectoryPath()
 *
 * gets the path to the specification directory for the specified specification and module.
 * @param specificationName the specification name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the specification directory.
 */
export declare const specificationDirectoryPath: (specificationName: string, module: string, rootDir: string) => string;
/**
 * specificationExists()
 *
 * determines if the specified specification exists in the specified module.
 * @param specificationName the specification name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the specification exists. FALSE otherwise.
 */
export declare const specificationExists: (specificationName: string, moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * specificationsDirectoryExists()
 *
 * determines if the specifications directory for the specified module exists.
 * @param moduleName module name
 * @param rootDir the root directory.
 * @returns TRUE if the values directory exists for the specified module. FALSE otherwise.
 */
export declare const specificationsDirectoryExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * specificationsDirectoryPath()
 *
 * gets the path to the specifications directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the specifications directory for that module.
 */
export declare const specificationsDirectoryPath: (moduleName: string, rootDir: string) => string;
/**
 * specificationsWellFileExists()
 *
 * determines if the specifications well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the specifications well exists. FALSE otehrwise.
 */
export declare const specificationsWellFileExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * specificationsWellFilePath()
 *
 * gets the path for the specifications well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
export declare const specificationsWellFilePath: (moduleName: string, rootDir: string) => string;
/**
 * srcDirectoryPath()
 *
 * gets the src directory path starting with the provided root directory.
 * @param rootDir the root directory.
 * @returns the domain src directory path.
 */
export declare const srcDirectoryPath: (rootDir: string) => string;
/**
 * tsconfigPath()
 *
 * gets the tsconfig path.
 * @param rootDir the root directory.
 * @returns
 */
export declare const tsconfigPath: (rootDir: string) => string;
/**
 * valueClassPath()
 *
 * gets the path to the class file of the specified value name, in the specified module.
 * @param valueName the value name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
export declare const valueClassPath: (valueName: string, module: string, rootDir: string) => string;
/**
 * valueExists()
 *
 * determines if the specified value exists in the specified module.
 * @param valueName the value name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the value exists. FALSE otherwise.
 */
export declare const valueExists: (valueName: string, moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * valueInterfacePath()
 *
 * gets the path to the interface file of the specified value name, in the specified module.
 * @param valueName the value name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */
export declare const valueInterfacePath: (valueName: string, module: string, rootDir: string) => string;
/**
 * valuesDirectoryExists()
 *
 * determines if the values directory for the specified module exists.
 * @param moduleName module name
 * @param rootDir the root directory.
 * @returns TRUE if the values directory exists for the specified module. FALSE otherwise.
 */
export declare const valuesDirectoryExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * valueWellFileExists()
 *
 * determines if the values well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the values well exists. FALSE otehrwise.
 */
export declare const valuesWellFileExists: (moduleName: string, rootDir: string) => Promise<boolean>;
/**
 * valuesDirectoryPath()
 *
 * gets the path to the values directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the values directory for that module.
 */
export declare const valuesDirectoryPath: (moduleName: string, rootDir: string) => string;
/**
 * valueWellFilePath()
 *
 * gets the path for the value well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
export declare const valuesWellFilePath: (moduleName: string, rootDir: string) => string;
/**
 * valueObjectDirectoryPath()
 *
 * gets the path to the value object directory for the specified value and module.
 * @param valueName the value name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the value object directory.
 */
export declare const valueObjectDirectoryPath: (valueName: string, module: string, rootDir: string) => string;
//# sourceMappingURL=directory-utils.d.ts.map