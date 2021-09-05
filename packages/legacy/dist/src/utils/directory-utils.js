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
exports.entitiesWellFileExists = exports.entityInterfacePath = exports.entitiesDirectoryPath = exports.entityDirectoryPath = exports.entityExists = exports.entitiesDirectoryExists = exports.entityClassPath = exports.eventStorePath = exports.dtosWellFilePath = exports.dtosWellFileExists = exports.dtosDirectoryPath = exports.dtosDirectoryExists = exports.dtoExists = exports.dtoClassPath = exports.domconfigPath = exports.deleteDomainDirectory = exports.createValue = exports.createValuesDirectoryForModule = exports.createSpecificationsDirectoryForModule = exports.createSpecification = exports.createServicesDirectoryForModule = exports.createRepository = exports.createRepositoriesDirectoryForModule = exports.createQuery = exports.createFactoriesDirectoryForModule = exports.createEventsDirectoryForModule = exports.createEntitiesDirectoryForModule = exports.createModule = exports.createFactory = exports.createExceptionsDirectoryForModule = exports.createException = exports.createEvent = exports.createEntity = exports.createDtosDirectoryForModule = exports.createDto = exports.createCommand = exports.createAggregatesDirectoryForModule = exports.createAggregate = exports.commandExists = exports.commandDirectoryPath = exports.commandClassPath = exports.aggregatesDirectoryPath = exports.apiFilePath = exports.aggregateExists = exports.aggregatesWellFilePath = exports.aggregatesWellFileExists = exports.aggregateInterfacePath = exports.aggregateClassPath = exports.aggregatesDirectoryExists = exports.aggregateDirectoryPath = void 0;
exports.isDomeniereProject = exports.indexPath = exports.gitignorePath = exports.getDomconfigFilePath = exports.getAbsolutePath = exports.fileContains = exports.factoryInterfacePath = exports.factoryExists = exports.factoryDirectoryPath = exports.factoryClassPath = exports.factoriesWellFilePath = exports.factoriesWellFileExists = exports.factoriesDirectoryPath = exports.factoriesDirectoryExists = exports.exposeValuesWell = exports.exposeValue = exports.exposeSpecificationsWell = exports.exposeServicesWell = exports.exposeSpecification = exports.exposeRepository = exports.exposeRepositoriesWell = exports.exposeQuery = exports.exposeModule = exports.exposeFactoriesWell = exports.exposeFactory = exports.exposeExceptionsWell = exports.exposeException = exports.exposeEventsWell = exports.exposeEvent = exports.exposeEntity = exports.exposeEntitiesWell = exports.exposeDtosWell = exports.exposeDto = exports.exposeCommand = exports.exposeAggregatesWell = exports.exposeAggregate = exports.exceptionsWellFilePath = exports.exceptionsWellFileExists = exports.exceptionExists = exports.exceptionsDirectoryPath = exports.exceptionsDirectoryExists = exports.exceptionClassPath = exports.eventsWellFilePath = exports.eventsWellFileExists = exports.eventsDirectoryPath = exports.eventsDirectoryExists = exports.eventExists = exports.eventDirectoryPath = exports.eventClassPath = exports.entitiesWellFilePath = void 0;
exports.valueObjectDirectoryPath = exports.valuesWellFilePath = exports.valuesDirectoryPath = exports.valuesWellFileExists = exports.valuesDirectoryExists = exports.valueInterfacePath = exports.valueExists = exports.valueClassPath = exports.tsconfigPath = exports.srcDirectoryPath = exports.specificationsWellFilePath = exports.specificationsWellFileExists = exports.specificationsDirectoryPath = exports.specificationsDirectoryExists = exports.specificationExists = exports.specificationDirectoryPath = exports.specificationClassPath = exports.servicesWellFilePath = exports.servicesWellFileExists = exports.servicesDirectoryPath = exports.servicesDirectoryExists = exports.scaffoldDomainDirectory = exports.repositoryInterfacePath = exports.repositoryExists = exports.repositoryDirectoryPath = exports.repositoryClassPath = exports.repositoriesWellFilePath = exports.repositoriesWellFileExists = exports.repositoriesDirectoryPath = exports.repositoriesDirectoryExists = exports.queryExists = exports.queryDirectoryPath = exports.queryClassPath = exports.pathExists = exports.packagePath = exports.moduleFilePath = exports.moduleExists = exports.moduleDirectoryPath = exports.loadDomConfigFileContents = void 0;
const Path = __importStar(require("path"));
const fs_utils_1 = require("./fs-utils");
const template_utils_1 = require("./template-utils");
const formatter_utils_1 = require("./formatter-utils");
/**
 * aggregateDirectoryPath()
 *
 * gets the path to the aggregate directory for the specified aggregate and module.
 * @param aggregateName the aggregate name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the aggregate directory.
 */
const aggregateDirectoryPath = (aggregateName, module, rootDir) => {
    return Path.resolve(exports.aggregatesDirectoryPath(module, rootDir), formatter_utils_1.formatDirectoryOrFileName(aggregateName));
};
exports.aggregateDirectoryPath = aggregateDirectoryPath;
/**
 * aggregatesDirectoryExists()
 *
 * determines if the aggregates directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the aggregates directory exists for the specified module. FALSE otherwise.
 */
const aggregatesDirectoryExists = async (moduleName, rootDir) => {
    const dirPath = exports.aggregatesWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.aggregatesDirectoryExists = aggregatesDirectoryExists;
/**
 * aggregateClassPath()
 *
 * gets the path to the class file of the specified aggregate name, in the specified module.
 * @param aggregateName the aggregate name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
const aggregateClassPath = (aggregateName, module, rootDir) => {
    return Path.resolve(exports.aggregateDirectoryPath(aggregateName, module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(aggregateName)}.ts`);
};
exports.aggregateClassPath = aggregateClassPath;
/**
 * aggregateInterfacePath()
 *
 * gets the path to the interface file of the specified aggregate name, in the specified module.
 * @param aggregateName the aggregate name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */
const aggregateInterfacePath = (aggregateName, module, rootDir) => {
    return Path.resolve(exports.aggregateDirectoryPath(aggregateName, module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(aggregateName)}.interface.ts`);
};
exports.aggregateInterfacePath = aggregateInterfacePath;
/**
 * aggregatesWellFileExists()
 *
 * determines if the aggregates well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the aggregates well exists. FALSE otehrwise.
 */
const aggregatesWellFileExists = async (moduleName, rootDir) => {
    const dirPath = exports.aggregatesWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.aggregatesWellFileExists = aggregatesWellFileExists;
/**
 * aggregatesWellFilePath()
 *
 * gets the path for the aggregates well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
const aggregatesWellFilePath = (moduleName, rootDir) => {
    return Path.resolve(exports.aggregatesDirectoryPath(moduleName, rootDir), 'aggregates.well.ts');
};
exports.aggregatesWellFilePath = aggregatesWellFilePath;
/**
 * aggregateExists()
 *
 * determines if the specified aggregate exists in the specified module.
 * @param aggregateName the aggregate name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the aggregate exists. FALSE otherwise.
 */
const aggregateExists = async (aggregateName, moduleName, rootDir) => {
    return await exports.pathExists(exports.aggregateDirectoryPath(aggregateName, moduleName, rootDir));
};
exports.aggregateExists = aggregateExists;
/**
 * apiFilePath()
 *
 * gets the API file path.
 * @param domainName the domain name
 * @param rootDir the root directory.
 * @returns the api file path.
 */
const apiFilePath = (domainName, rootDir) => {
    return Path.resolve(exports.srcDirectoryPath(rootDir), formatter_utils_1.formatApiFileName(domainName));
};
exports.apiFilePath = apiFilePath;
/**
 * aggregatesDirectoryPath()
 *
 * gets the path to the aggregates directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the aggregates directory for that module.
 */
const aggregatesDirectoryPath = (moduleName, rootDir) => {
    return Path.resolve(exports.srcDirectoryPath(rootDir), formatter_utils_1.formatDirectoryOrFileName(moduleName), 'aggregates');
};
exports.aggregatesDirectoryPath = aggregatesDirectoryPath;
/**
 * commandClassPath()
 *
 * gets the path to the class file of the specified command name, in the specified module.
 * @param commandName the command name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
const commandClassPath = (commandName, module, rootDir) => {
    return Path.resolve(exports.commandDirectoryPath(commandName, module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(commandName)}.command.ts`);
};
exports.commandClassPath = commandClassPath;
/**
 * commandDirectoryPath()
 *
 * gets the path to the command directory for the specified command and module.
 * @param commandName the command name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the command directory.
 */
const commandDirectoryPath = (commandName, module, rootDir) => {
    return Path.resolve(exports.servicesDirectoryPath(module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(commandName)}-command`);
};
exports.commandDirectoryPath = commandDirectoryPath;
/**
 * commandExists()
 *
 * determines if the specified command exists in the specified module.
 * @param commandName the command name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the command exists. FALSE otherwise.
 */
const commandExists = async (commandName, moduleName, rootDir) => {
    return await exports.pathExists(exports.commandDirectoryPath(commandName, moduleName, rootDir));
};
exports.commandExists = commandExists;
/**
 * createAggregate()
 *
 * creates an aggregate.
 * @param aggregateName the aggregate name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param timestamped a flag to indicate whether the aggregate should be timestamped.
 */
const createAggregate = async (aggregateName, moduleName, rootDir, timestamped = false) => {
    // make sure the module and aggregates directories exists.
    if (await exports.moduleExists(moduleName, rootDir) && await exports.aggregatesDirectoryExists(moduleName, rootDir)) {
        // load the aggregate contents
        const aggregateInterfaceContents = await template_utils_1.generateInterfaceContents(aggregateName);
        const aggregateClassContent = timestamped ? await template_utils_1.generateTimestampedAggregateContents(aggregateName) : await template_utils_1.generateAggregateContents(aggregateName);
        const aggregateDirPath = exports.aggregateDirectoryPath(aggregateName, moduleName, rootDir);
        const aggregateInterfaceFilePath = exports.aggregateInterfacePath(aggregateName, moduleName, rootDir);
        const aggregateClassFilePath = exports.aggregateClassPath(aggregateName, moduleName, rootDir);
        // create the directory.
        await fs_utils_1.makeDirectory(aggregateDirPath);
        // create the files.
        try {
            await fs_utils_1.writeFile(aggregateInterfaceFilePath, aggregateInterfaceContents);
            await fs_utils_1.writeFile(aggregateClassFilePath, aggregateClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await fs_utils_1.destroyDirectory(aggregateDirPath, {
                recursive: true,
                force: true,
            });
            return e;
        }
    }
    else {
        throw new Error('Module or Aggregates directory not found.');
    }
};
exports.createAggregate = createAggregate;
/**
 * createAggregatesDirectoryForModule()
 *
 * creates a aggregates directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
const createAggregatesDirectoryForModule = async (moduleName, rootDir) => {
    if (!await exports.aggregatesDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const aggregatesDirectoryPathToCreate = exports.aggregatesDirectoryPath(moduleName, rootDir);
        const aggregatesWellFilePathToCreate = exports.aggregatesWellFilePath(moduleName, rootDir);
        const wellFileContents = await template_utils_1.generateWellFileContents('aggregtes');
        // write directory.
        await fs_utils_1.makeDirectory(aggregatesDirectoryPathToCreate);
        try {
            // write well file
            await fs_utils_1.writeFile(aggregatesWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await fs_utils_1.destroyDirectory(aggregatesDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Aggregates directory for module ${formatter_utils_1.formatClassName(moduleName)} already exists.`);
    }
};
exports.createAggregatesDirectoryForModule = createAggregatesDirectoryForModule;
/**
 * createCommand()
 *
 * creates a command
 * @param commandName the command name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */
const createCommand = async (commandName, moduleName, rootDir) => {
    // make sure the module and services directories exists.
    if (await exports.moduleExists(moduleName, rootDir) && await exports.servicesDirectoryExists(moduleName, rootDir)) {
        // load the command contents
        const commandClassContent = await template_utils_1.generateCommandContents(commandName);
        const commandDirPath = exports.commandDirectoryPath(commandName, moduleName, rootDir);
        const commandClassFilePath = exports.commandClassPath(commandName, moduleName, rootDir);
        // create the directory.
        await fs_utils_1.makeDirectory(commandDirPath);
        // create the files.
        try {
            await fs_utils_1.writeFile(commandClassFilePath, commandClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await fs_utils_1.destroyDirectory(commandDirPath, {
                recursive: true,
                force: true,
            });
            return e;
        }
    }
    else {
        throw new Error('Module or Services directory not found.');
    }
};
exports.createCommand = createCommand;
/**
 * createDto()
 *
 * creates a DTO
 * @param dtoName the dto name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */
const createDto = async (dtoName, moduleName, rootDir) => {
    // make sure the module and dtos directories exists.
    if (await exports.moduleExists(moduleName, rootDir) && await exports.dtosDirectoryExists(moduleName, rootDir)) {
        // load the dto contents
        const dtoClassContent = await template_utils_1.generateDtoContents(dtoName);
        const dtoClassFilePath = exports.dtoClassPath(dtoName, moduleName, rootDir);
        // create the files.
        try {
            await fs_utils_1.writeFile(dtoClassFilePath, dtoClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await fs_utils_1.destroyFile(dtoClassFilePath);
            return e;
        }
    }
    else {
        throw new Error('Module or Data directory not found.');
    }
};
exports.createDto = createDto;
/**
 * createDtosDirectoryForModule()
 *
 * creates a dtos directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
const createDtosDirectoryForModule = async (moduleName, rootDir) => {
    if (!await exports.dtosDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const dtosDirectoryPathToCreate = exports.dtosDirectoryPath(moduleName, rootDir);
        const dtosWellFilePathToCreate = exports.dtosWellFilePath(moduleName, rootDir);
        const wellFileContents = await template_utils_1.generateWellFileContents('data');
        // write directory.
        await fs_utils_1.makeDirectory(dtosDirectoryPathToCreate);
        try {
            // write well file
            await fs_utils_1.writeFile(dtosWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await fs_utils_1.destroyDirectory(dtosDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Data directory for module ${formatter_utils_1.formatClassName(moduleName)} already exists.`);
    }
};
exports.createDtosDirectoryForModule = createDtosDirectoryForModule;
/**
 * createEntity()
 *
 * creates an entity.
 * @param entityName the entity name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param timestamped a flag to indicate whether the entity should be timestamped.
 */
const createEntity = async (entityName, moduleName, rootDir, timestamped = false) => {
    // make sure the module and entities directories exists.
    if (await exports.moduleExists(moduleName, rootDir) && await exports.entitiesDirectoryExists(moduleName, rootDir)) {
        // load the entity contents
        const entityInterfaceContents = await template_utils_1.generateInterfaceContents(entityName);
        const entityClassContent = timestamped ? await template_utils_1.generateTimestampedEntityContents(entityName) : await template_utils_1.generateEntityContents(entityName);
        const entityDirPath = exports.entityDirectoryPath(entityName, moduleName, rootDir);
        const entityInterfaceFilePath = exports.entityInterfacePath(entityName, moduleName, rootDir);
        const entityClassFilePath = exports.entityClassPath(entityName, moduleName, rootDir);
        // create the directory.
        await fs_utils_1.makeDirectory(entityDirPath);
        // create the files.
        try {
            await fs_utils_1.writeFile(entityInterfaceFilePath, entityInterfaceContents);
            await fs_utils_1.writeFile(entityClassFilePath, entityClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await fs_utils_1.destroyDirectory(entityDirPath, {
                recursive: true,
                force: true,
            });
            return e;
        }
    }
    else {
        throw new Error('Module or Entities directory not found.');
    }
};
exports.createEntity = createEntity;
/**
 * createEvent()
 *
 * creates an event.
 * @param eventName the event name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param broadcastEvent a flag to indicate whether the event should be broadcasted
 */
const createEvent = async (eventName, moduleName, rootDir, broadcastEvent = false) => {
    // make sure the module and events directories exists.
    if (await exports.moduleExists(moduleName, rootDir) && await exports.eventsDirectoryExists(moduleName, rootDir)) {
        // load the event contents
        const eventClassContent = await template_utils_1.generateEventContents(eventName, rootDir, broadcastEvent);
        const eventClassFilePath = exports.eventClassPath(eventName, moduleName, rootDir);
        // create the files.
        try {
            await fs_utils_1.writeFile(eventClassFilePath, eventClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await fs_utils_1.destroyFile(eventClassFilePath);
            return e;
        }
    }
    else {
        throw new Error('Module or Events directory not found.');
    }
};
exports.createEvent = createEvent;
/**
 * createException()
 *
 * creates an Exception
 * @param exceptionName the exception name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */
const createException = async (dtoName, moduleName, rootDir) => {
    // make sure the module and exceptions directories exists.
    if (await exports.moduleExists(moduleName, rootDir) && await exports.exceptionsDirectoryExists(moduleName, rootDir)) {
        // load the exception contents
        const exceptionClassContent = await template_utils_1.generateExceptionContents(dtoName);
        const exceptionClassFilePath = exports.exceptionClassPath(dtoName, moduleName, rootDir);
        // create the files.
        try {
            await fs_utils_1.writeFile(exceptionClassFilePath, exceptionClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await fs_utils_1.destroyFile(exceptionClassFilePath);
            return e;
        }
    }
    else {
        throw new Error('Module or Exception directory not found.');
    }
};
exports.createException = createException;
/**
 * createExceptionsDirectoryForModule()
 *
 * creates a exceptions directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
const createExceptionsDirectoryForModule = async (moduleName, rootDir) => {
    if (!await exports.exceptionsDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const exceptionsDirectoryPathToCreate = exports.exceptionsDirectoryPath(moduleName, rootDir);
        const exceptionsWellFilePathToCreate = exports.exceptionsWellFilePath(moduleName, rootDir);
        const wellFileContents = await template_utils_1.generateWellFileContents('exceptions');
        // write directory.
        await fs_utils_1.makeDirectory(exceptionsDirectoryPathToCreate);
        try {
            // write well file
            await fs_utils_1.writeFile(exceptionsWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await fs_utils_1.destroyDirectory(exceptionsDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Exceptions directory for module ${formatter_utils_1.formatClassName(moduleName)} already exists.`);
    }
};
exports.createExceptionsDirectoryForModule = createExceptionsDirectoryForModule;
/**
 * createFactory()
 *
 * creates an factory.
 * @param factoryName the factory name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */
const createFactory = async (factoryName, moduleName, rootDir) => {
    // make sure the module and factories directories exists.
    if (await exports.moduleExists(moduleName, rootDir) && await exports.factoriesDirectoryExists(moduleName, rootDir)) {
        // load the factory contents
        const factoryInterfaceContents = await template_utils_1.generateFactoryInterfaceContents(factoryName);
        const factoryClassContent = await template_utils_1.generateFactoryContents(factoryName);
        const factoryDirPath = exports.factoryDirectoryPath(factoryName, moduleName, rootDir);
        const factoryInterfaceFilePath = exports.factoryInterfacePath(factoryName, moduleName, rootDir);
        const factoryClassFilePath = exports.factoryClassPath(factoryName, moduleName, rootDir);
        // create the directory.
        await fs_utils_1.makeDirectory(factoryDirPath);
        // create the files.
        try {
            await fs_utils_1.writeFile(factoryInterfaceFilePath, factoryInterfaceContents);
            await fs_utils_1.writeFile(factoryClassFilePath, factoryClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await fs_utils_1.destroyDirectory(factoryDirPath, {
                recursive: true,
                force: true,
            });
            return e;
        }
    }
    else {
        throw new Error('Module or Factories directory not found.');
    }
};
exports.createFactory = createFactory;
/**
 * createModule()
 *
 * creates a module with the specified name.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
const createModule = async (moduleName, rootDir) => {
    // create the template file.
    const modFileContents = await template_utils_1.generateModuleFileContents(moduleName);
    const modDirectoryPath = exports.moduleDirectoryPath(moduleName, rootDir);
    const modFilePath = exports.moduleFilePath(moduleName, rootDir);
    // create the directory.
    if (await exports.pathExists(modDirectoryPath)) {
        throw new Error('Module already exists');
    }
    try {
        await fs_utils_1.makeDirectory(modDirectoryPath);
    }
    catch (e) {
        // failed to make directory.
        throw new Error("Could not create module directory");
    }
    // write the data
    try {
        await fs_utils_1.writeFile(modFilePath, modFileContents);
    }
    catch (e) {
        // failed to write data.
        // something went wrong.
        // undo the directory creation.
        await fs_utils_1.destroyDirectory(modDirectoryPath, {
            recursive: true,
            force: true,
        });
        throw e;
    }
};
exports.createModule = createModule;
/**
 * createEntitiesDirectoryForModule()
 *
 * creates a entities directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
const createEntitiesDirectoryForModule = async (moduleName, rootDir) => {
    if (!await exports.entitiesDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const entitiesDirectoryPathToCreate = exports.entitiesDirectoryPath(moduleName, rootDir);
        const entitiesWellFilePathToCreate = exports.entitiesWellFilePath(moduleName, rootDir);
        const wellFileContents = await template_utils_1.generateWellFileContents('entities');
        // write directory.
        await fs_utils_1.makeDirectory(entitiesDirectoryPathToCreate);
        try {
            // write well file
            await fs_utils_1.writeFile(entitiesWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await fs_utils_1.destroyDirectory(entitiesDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Entities directory for module ${formatter_utils_1.formatClassName(moduleName)} already exists.`);
    }
};
exports.createEntitiesDirectoryForModule = createEntitiesDirectoryForModule;
/**
 * createEventsDirectoryForModule()
 *
 * creates an events directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
const createEventsDirectoryForModule = async (moduleName, rootDir) => {
    if (!await exports.eventsDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const eventsDirectoryPathToCreate = exports.eventsDirectoryPath(moduleName, rootDir);
        const eventsWellFilePathToCreate = exports.eventsWellFilePath(moduleName, rootDir);
        const wellFileContents = await template_utils_1.generateWellFileContents('events');
        // write directory.
        await fs_utils_1.makeDirectory(eventsDirectoryPathToCreate);
        try {
            // write well file
            await fs_utils_1.writeFile(eventsWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await fs_utils_1.destroyDirectory(eventsDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Events directory for module ${formatter_utils_1.formatClassName(moduleName)} already exists.`);
    }
};
exports.createEventsDirectoryForModule = createEventsDirectoryForModule;
/**
 * createFactoriesDirectoryForModule()
 *
 * creates a factories directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
const createFactoriesDirectoryForModule = async (moduleName, rootDir) => {
    if (!await exports.factoriesDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const factoriesDirectoryPathToCreate = exports.factoriesDirectoryPath(moduleName, rootDir);
        const factoriesWellFilePathToCreate = exports.factoriesWellFilePath(moduleName, rootDir);
        const wellFileContents = await template_utils_1.generateWellFileContents('factories');
        // write directory.
        await fs_utils_1.makeDirectory(factoriesDirectoryPathToCreate);
        try {
            // write well file
            await fs_utils_1.writeFile(factoriesWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await fs_utils_1.destroyDirectory(factoriesDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Factories directory for module ${formatter_utils_1.formatClassName(moduleName)} already exists.`);
    }
};
exports.createFactoriesDirectoryForModule = createFactoriesDirectoryForModule;
/**
 * createQuery()
 *
 * creates an query.
 * @param queryName the query name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */
const createQuery = async (queryName, moduleName, rootDir, identity = false) => {
    // make sure the module and services directories exists.
    if (await exports.moduleExists(moduleName, rootDir) && await exports.servicesDirectoryExists(moduleName, rootDir)) {
        // load the query contents
        const queryClassContent = await template_utils_1.generateQueryContents(queryName);
        const queryDirPath = exports.queryDirectoryPath(queryName, moduleName, rootDir);
        const queryClassFilePath = exports.queryClassPath(queryName, moduleName, rootDir);
        // create the directory.
        await fs_utils_1.makeDirectory(queryDirPath);
        // create the files.
        try {
            await fs_utils_1.writeFile(queryClassFilePath, queryClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await fs_utils_1.destroyDirectory(queryDirPath, {
                recursive: true,
                force: true,
            });
            return e;
        }
    }
    else {
        throw new Error('Module or services directory not found.');
    }
};
exports.createQuery = createQuery;
/**
 * createRepositoriesDirectoryForModule()
 *
 * creates a repositories directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
const createRepositoriesDirectoryForModule = async (moduleName, rootDir) => {
    if (!await exports.repositoriesDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const repositoriesDirectoryPathToCreate = exports.repositoriesDirectoryPath(moduleName, rootDir);
        const repositoriesWellFilePathToCreate = exports.repositoriesWellFilePath(moduleName, rootDir);
        const wellFileContents = await template_utils_1.generateWellFileContents('repositories');
        // write directory.
        await fs_utils_1.makeDirectory(repositoriesDirectoryPathToCreate);
        try {
            // write well file
            await fs_utils_1.writeFile(repositoriesWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await fs_utils_1.destroyDirectory(repositoriesDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Repositories directory for module ${formatter_utils_1.formatClassName(moduleName)} already exists.`);
    }
};
exports.createRepositoriesDirectoryForModule = createRepositoriesDirectoryForModule;
/**
 * createRepository()
 *
 * creates an factory.
 * @param repositoryName the repository name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param identity indicates whether the repository is an identity generating repository.
 */
const createRepository = async (repositoryName, moduleName, rootDir, identity = false) => {
    // make sure the module and repositories directories exists.
    if (await exports.moduleExists(moduleName, rootDir) && await exports.repositoriesDirectoryExists(moduleName, rootDir)) {
        // load the repository contents
        const repositoryInterfaceContents = await template_utils_1.generateRepositoryInterfaceContents(`${repositoryName}`);
        const repositoryClassContent = identity ? await template_utils_1.generateIdentityRepositoryContents(repositoryName) : await template_utils_1.generateRepositoryContents(repositoryName);
        const repositoryDirPath = exports.repositoryDirectoryPath(repositoryName, moduleName, rootDir);
        const repositoryInterfaceFilePath = exports.repositoryInterfacePath(repositoryName, moduleName, rootDir);
        const repositoryClassFilePath = exports.repositoryClassPath(repositoryName, moduleName, rootDir);
        // create the directory.
        await fs_utils_1.makeDirectory(repositoryDirPath);
        // create the files.
        try {
            await fs_utils_1.writeFile(repositoryInterfaceFilePath, repositoryInterfaceContents);
            await fs_utils_1.writeFile(repositoryClassFilePath, repositoryClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await fs_utils_1.destroyDirectory(repositoryDirPath, {
                recursive: true,
                force: true,
            });
            return e;
        }
    }
    else {
        throw new Error('Module or Repositories directory not found.');
    }
};
exports.createRepository = createRepository;
/**
 * createServicesDirectoryForModule()
 *
 * creates a services directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
const createServicesDirectoryForModule = async (moduleName, rootDir) => {
    if (!await exports.servicesDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const servicesDirectoryPathToCreate = exports.servicesDirectoryPath(moduleName, rootDir);
        const servicesWellFilePathToCreate = exports.servicesWellFilePath(moduleName, rootDir);
        const wellFileContents = await template_utils_1.generateWellFileContents('services');
        // write directory.
        await fs_utils_1.makeDirectory(servicesDirectoryPathToCreate);
        try {
            // write well file
            await fs_utils_1.writeFile(servicesWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await fs_utils_1.destroyDirectory(servicesDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Services directory for module ${formatter_utils_1.formatClassName(moduleName)} already exists.`);
    }
};
exports.createServicesDirectoryForModule = createServicesDirectoryForModule;
/**
 * createSpecification()
 *
 * creates an specification
 * @param specificationName the specification name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */
const createSpecification = async (specificationName, moduleName, rootDir) => {
    // make sure the module and specifications directories exists.
    if (await exports.moduleExists(moduleName, rootDir) && await exports.specificationsDirectoryExists(moduleName, rootDir)) {
        // load the specification contents
        const specificationClassContent = await template_utils_1.generateSpecificationContents(specificationName);
        const specificationClassFilePath = exports.specificationClassPath(specificationName, moduleName, rootDir);
        // create the files.
        try {
            await fs_utils_1.writeFile(specificationClassFilePath, specificationClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await fs_utils_1.destroyFile(specificationClassFilePath);
            return e;
        }
    }
    else {
        throw new Error('Module or Specifications directory not found.');
    }
};
exports.createSpecification = createSpecification;
/**
 * createSpecificationsDirectoryForModule()
 *
 * creates a specifications directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
const createSpecificationsDirectoryForModule = async (moduleName, rootDir) => {
    if (!await exports.specificationsDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const specificationsDirectoryPathToCreate = exports.specificationsDirectoryPath(moduleName, rootDir);
        const specificationsWellFilePathToCreate = exports.specificationsWellFilePath(moduleName, rootDir);
        const wellFileContents = await template_utils_1.generateWellFileContents('specifications');
        // write directory.
        await fs_utils_1.makeDirectory(specificationsDirectoryPathToCreate);
        try {
            // write well file
            await fs_utils_1.writeFile(specificationsWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await fs_utils_1.destroyDirectory(specificationsDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Specifications directory for module ${formatter_utils_1.formatClassName(moduleName)} already exists.`);
    }
};
exports.createSpecificationsDirectoryForModule = createSpecificationsDirectoryForModule;
/**
 * createValuesDirectoryForModule()
 *
 * creates a values directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */
const createValuesDirectoryForModule = async (moduleName, rootDir) => {
    if (!await exports.valuesDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const valuesDirectoryPathToCreate = exports.valuesDirectoryPath(moduleName, rootDir);
        const valuesWellFilePathToCreate = exports.valuesWellFilePath(moduleName, rootDir);
        const wellFileContents = await template_utils_1.generateWellFileContents('values');
        // write directory.
        await fs_utils_1.makeDirectory(valuesDirectoryPathToCreate);
        try {
            // write well file
            await fs_utils_1.writeFile(valuesWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await fs_utils_1.destroyDirectory(valuesDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Values directory for module ${formatter_utils_1.formatClassName(moduleName)} already exists.`);
    }
};
exports.createValuesDirectoryForModule = createValuesDirectoryForModule;
/**
 * createValue()
 *
 * creates a value object.
 * @param valueName the value name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param identifier a flag to indicate whether the value is to be used as an identifier.
 */
const createValue = async (valueName, moduleName, rootDir, identifier = false) => {
    // make sure the module and values directories exists.
    if (await exports.moduleExists(moduleName, rootDir) && await exports.valuesDirectoryExists(moduleName, rootDir)) {
        // load the value contents
        const valueInterfaceContents = identifier ? await template_utils_1.generateIdentifierInterfaceContents(valueName) : await template_utils_1.generateInterfaceContents(valueName);
        const valueClassContent = identifier ? await template_utils_1.generateIdentifierValueContents(valueName) : await template_utils_1.generateValueContents(valueName);
        const valueDirPath = exports.valueObjectDirectoryPath(valueName, moduleName, rootDir);
        const valueInterfaceFilePath = exports.valueInterfacePath(valueName, moduleName, rootDir);
        const valueClassFilePath = exports.valueClassPath(valueName, moduleName, rootDir);
        // create the directory.
        await fs_utils_1.makeDirectory(valueDirPath);
        // create the files.
        try {
            await fs_utils_1.writeFile(valueInterfaceFilePath, valueInterfaceContents);
            await fs_utils_1.writeFile(valueClassFilePath, valueClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await fs_utils_1.destroyDirectory(valueDirPath, {
                recursive: true,
                force: true,
            });
            return e;
        }
    }
    else {
        throw new Error('Module or Values directory not found.');
    }
};
exports.createValue = createValue;
/**
 * destroyDomainDirectory()
 *
 * destroys the domain directory.
 * @param domainName the domain name to delete
 */
const deleteDomainDirectory = async (domainName) => {
    const fileNameFormattedDomainName = formatter_utils_1.formatDomainDirectoryName(domainName);
    const rootDirectoryPath = exports.getAbsolutePath(fileNameFormattedDomainName);
    await fs_utils_1.destroyDirectory(rootDirectoryPath, {
        recursive: true,
        force: true,
    });
};
exports.deleteDomainDirectory = deleteDomainDirectory;
/**
 * domconfigPath()
 *
 * gets the path to the domconfig.json file.
 * @param rootDir the root directory.
 * @returns the path to the domconfig.json file.
 */
const domconfigPath = (rootDir) => {
    return Path.resolve(rootDir, 'domconfig.json');
};
exports.domconfigPath = domconfigPath;
/**
 * dtoClassPath()
 *
 * gets the path to the class file of the specified dto name, in the specified module.
 * @param dtoName the dto name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
const dtoClassPath = (dtoName, module, rootDir) => {
    return Path.resolve(exports.dtosDirectoryPath(module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(dtoName)}.data.ts`);
};
exports.dtoClassPath = dtoClassPath;
/**
 * dtoExists()
 *
 * determines if the specified dto exists in the specified module.
 * @param dtoName the dto name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns
 */
const dtoExists = async (dtoName, moduleName, rootDir) => {
    return await exports.pathExists(exports.dtoClassPath(dtoName, moduleName, rootDir));
};
exports.dtoExists = dtoExists;
/**
 * dtosDirectoryExists()
 *
 * determines if the dtos directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the DTO directory exists for the specified module. FALSE otherwise.
 */
const dtosDirectoryExists = async (moduleName, rootDir) => {
    const dirPath = exports.dtosWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.dtosDirectoryExists = dtosDirectoryExists;
/**
 * dtosDirectoryPath()
 *
 * gets the path to the dtos directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the dtos directory for that module.
 */
const dtosDirectoryPath = (moduleName, rootDir) => {
    return Path.resolve(exports.srcDirectoryPath(rootDir), formatter_utils_1.formatDirectoryOrFileName(moduleName), 'data');
};
exports.dtosDirectoryPath = dtosDirectoryPath;
/**
 * dtosWellFileExists()
 *
 * determines if the dtos well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the dtos well exists. FALSE otehrwise.
 */
const dtosWellFileExists = async (moduleName, rootDir) => {
    const dirPath = exports.dtosWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.dtosWellFileExists = dtosWellFileExists;
/**
 * dtosWellFilePath()
 *
 * gets the path for the dtos well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
const dtosWellFilePath = (moduleName, rootDir) => {
    return Path.resolve(exports.dtosDirectoryPath(moduleName, rootDir), 'data.well.ts');
};
exports.dtosWellFilePath = dtosWellFilePath;
/**
 * eventStorePath()
 *
 * gets the event store path.
 * @param domainName the domain name.
 * @param rootDir the root directory of the project.
 * @returns
 */
const eventStorePath = (domainName, rootDir) => {
    return Path.resolve(exports.srcDirectoryPath(rootDir), formatter_utils_1.formatEventStoreFileName(domainName));
};
exports.eventStorePath = eventStorePath;
/**
 * entityClassPath()
 *
 * gets the path to the class file of the specified entity name, in the specified module.
 * @param entityName the entity name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
const entityClassPath = (entityName, module, rootDir) => {
    return Path.resolve(exports.entityDirectoryPath(entityName, module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(entityName)}.ts`);
};
exports.entityClassPath = entityClassPath;
/**
 * entitiesDirectoryExists()
 *
 * determines if the entitiess directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the entities directory exists for the specified module. FALSE otherwise.
 */
const entitiesDirectoryExists = async (moduleName, rootDir) => {
    const dirPath = exports.entitiesWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.entitiesDirectoryExists = entitiesDirectoryExists;
/**
 * entityExists()
 *
 * determines if the specified entity exists in the specified module.
 * @param entityName the entity name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns
 */
const entityExists = async (entityName, moduleName, rootDir) => {
    return await exports.pathExists(exports.entityDirectoryPath(entityName, moduleName, rootDir));
};
exports.entityExists = entityExists;
/**
 * entityDirectoryPath()
 *
 * gets the path to the  entity directory for the specified entity and module.
 * @param entityName the entity name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the entity object directory.
 */
const entityDirectoryPath = (entityName, module, rootDir) => {
    return Path.resolve(exports.entitiesDirectoryPath(module, rootDir), formatter_utils_1.formatDirectoryOrFileName(entityName));
};
exports.entityDirectoryPath = entityDirectoryPath;
/**
 * entitiesDirectoryPath()
 *
 * gets the path to the entities directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the entities directory for that module.
 */
const entitiesDirectoryPath = (moduleName, rootDir) => {
    return Path.resolve(exports.srcDirectoryPath(rootDir), formatter_utils_1.formatDirectoryOrFileName(moduleName), 'entities');
};
exports.entitiesDirectoryPath = entitiesDirectoryPath;
/**
 * entitiesInterfacePath()
 *
 * gets the path to the interface file of the specified entity name, in the specified module.
 * @param entityName the entity name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */
const entityInterfacePath = (entityName, module, rootDir) => {
    return Path.resolve(exports.entityDirectoryPath(entityName, module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(entityName)}.interface.ts`);
};
exports.entityInterfacePath = entityInterfacePath;
/**
 * entitiesWellFileExists()
 *
 * determines if the entities well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the entities well exists. FALSE otehrwise.
 */
const entitiesWellFileExists = async (moduleName, rootDir) => {
    const dirPath = exports.entitiesWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.entitiesWellFileExists = entitiesWellFileExists;
/**
 * entitiesWellFilePath()
 *
 * gets the path for the entities well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
const entitiesWellFilePath = (moduleName, rootDir) => {
    return Path.resolve(exports.entitiesDirectoryPath(moduleName, rootDir), 'entities.well.ts');
};
exports.entitiesWellFilePath = entitiesWellFilePath;
/**
 * evemtClassPath()
 *
 * gets the path to the class file of the specified event name, in the specified module.
 * @param evmtName the event name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
const eventClassPath = (eventName, module, rootDir) => {
    return Path.resolve(exports.eventsDirectoryPath(module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(eventName)}.event.ts`);
};
exports.eventClassPath = eventClassPath;
/**
 * eventDirectoryPath()
 *
 * gets the path to the events directory for the specified command and module.
 * @param eventName the event name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the repository directory.
 */
const eventDirectoryPath = (eventName, module, rootDir) => {
    return Path.resolve(exports.eventsDirectoryPath(module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(eventName)}-event`);
};
exports.eventDirectoryPath = eventDirectoryPath;
/**
 * eventExists()
 *
 * determines if the specified event exists in the specified module.
 * @param eventName the event name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns
 */
const eventExists = async (eventName, moduleName, rootDir) => {
    return await exports.pathExists(exports.eventClassPath(eventName, moduleName, rootDir));
};
exports.eventExists = eventExists;
/**
 * eventsDirectoryExists()
 *
 * determines if the events directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the events directory exists for the specified module. FALSE otherwise.
 */
const eventsDirectoryExists = async (moduleName, rootDir) => {
    const dirPath = exports.eventsWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.eventsDirectoryExists = eventsDirectoryExists;
/**
 * eventsDirectoryPath()
 *
 * gets the path to the events directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the events directory for that module.
 */
const eventsDirectoryPath = (moduleName, rootDir) => {
    return Path.resolve(exports.srcDirectoryPath(rootDir), formatter_utils_1.formatDirectoryOrFileName(moduleName), 'events');
};
exports.eventsDirectoryPath = eventsDirectoryPath;
/**
 * eventsWellFileExists()
 *
 * determines if the events well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the events well exists. FALSE otehrwise.
 */
const eventsWellFileExists = async (moduleName, rootDir) => {
    const dirPath = exports.eventsWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.eventsWellFileExists = eventsWellFileExists;
/**
 * eventsWellFilePath()
 *
 * gets the path for the events well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 * @returns the path to the events well for the specified module.
 */
const eventsWellFilePath = (moduleName, rootDir) => {
    return Path.resolve(exports.eventsDirectoryPath(moduleName, rootDir), 'events.well.ts');
};
exports.eventsWellFilePath = eventsWellFilePath;
/**
 * exceptionClassPath()
 *
 * gets the path to the class file of the specified exception name, in the specified module.
 * @param exceptionName the exception name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
const exceptionClassPath = (exceptionName, module, rootDir) => {
    return Path.resolve(exports.exceptionsDirectoryPath(module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(exceptionName)}.exception.ts`);
};
exports.exceptionClassPath = exceptionClassPath;
/**
 * exceptionsDirectoryExists()
 *
 * determines if the exceptions directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the DTO directory exists for the specified module. FALSE otherwise.
 */
const exceptionsDirectoryExists = async (moduleName, rootDir) => {
    const dirPath = exports.exceptionsWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.exceptionsDirectoryExists = exceptionsDirectoryExists;
/**
 * exceptionsDirectoryPath()
 *
 * gets the path to the exceptions directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the exceptions directory for that module.
 */
const exceptionsDirectoryPath = (moduleName, rootDir) => {
    return Path.resolve(exports.srcDirectoryPath(rootDir), formatter_utils_1.formatDirectoryOrFileName(moduleName), 'exceptions');
};
exports.exceptionsDirectoryPath = exceptionsDirectoryPath;
/**
 * exceptionExists()
 *
 * determines if the specified exception exists in the specified module.
 * @param exceptionName the exception name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the exception exists. FALSE otherwise.
 */
const exceptionExists = async (exceptionName, moduleName, rootDir) => {
    return await exports.pathExists(exports.exceptionClassPath(exceptionName, moduleName, rootDir));
};
exports.exceptionExists = exceptionExists;
/**
 * exceptionsWellFileExists()
 *
 * determines if the exceptions well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the exceptions well exists. FALSE otehrwise.
 */
const exceptionsWellFileExists = async (moduleName, rootDir) => {
    const dirPath = exports.exceptionsWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.exceptionsWellFileExists = exceptionsWellFileExists;
/**
 * exceptionsWellFilePath()
 *
 * gets the path for the exceptions well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
const exceptionsWellFilePath = (moduleName, rootDir) => {
    return Path.resolve(exports.exceptionsDirectoryPath(moduleName, rootDir), 'exceptions.well.ts');
};
exports.exceptionsWellFilePath = exceptionsWellFilePath;
/**
 * exposeAggregate()
 *
 * adds the specified aggregate to the module's well file.
 * @param aggregateName the name of the aggregate to export.
 * @param moduleName the module where the value resides.
 * @param rootDir the project root directory.
 */
const exposeAggregate = async (aggregateName, moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.aggregatesWellFileExists(moduleName, rootDir) && await exports.aggregateExists(aggregateName, moduleName, rootDir)) {
        // data
        const wellFilePath = exports.aggregatesWellFilePath(moduleName, rootDir);
        const patherizedAggregateName = formatter_utils_1.formatDirectoryOrFileName(aggregateName);
        const exportLine = `\nexport * from './${patherizedAggregateName}/${patherizedAggregateName}.interface';\nexport * from './${patherizedAggregateName}/${patherizedAggregateName}';`;
        // append the module file.
        if (!await exports.fileContains(wellFilePath, exportLine)) {
            await fs_utils_1.appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find Module or Aggregates directory.');
    }
};
exports.exposeAggregate = exposeAggregate;
/**
 * exposeAggregatesWell()
 *
 * exposes the aggregates well to the module.
 * @param moduleName the name of the module who's
 * @param rootDir the project root directory.
 */
const exposeAggregatesWell = async (moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.aggregatesWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = exports.moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './aggregates/aggregates.well';`;
        // append the module file.
        if (!await exports.fileContains(modulePath, exportLine)) {
            await fs_utils_1.appendFile(modulePath, exportLine);
            ;
        }
    }
    else {
        throw new Error('Could not find module or Aggregates directory.');
    }
};
exports.exposeAggregatesWell = exposeAggregatesWell;
/**
 * exposeCommand()
 *
 * adds the specified command to the module's well file.
 * @param commandName the name of the command to export.
 * @param moduleName the module where the command resides.
 * @param rootDir the project root directory.
 */
const exposeCommand = async (commandName, moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.servicesWellFileExists(moduleName, rootDir) && await exports.commandExists(commandName, moduleName, rootDir)) {
        // data
        const wellFilePath = exports.servicesWellFilePath(moduleName, rootDir);
        const patherizedCommandName = formatter_utils_1.formatDirectoryOrFileName(commandName);
        const exportLine = `\nexport * from './${patherizedCommandName}-command/${patherizedCommandName}.command';`;
        // append the module file.
        if (!await exports.fileContains(wellFilePath, exportLine)) {
            await fs_utils_1.appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or command directory.');
    }
};
exports.exposeCommand = exposeCommand;
/**
 * exposeDto()
 *
 * adds the specified dto to the module's well file.
 * @param dtoName the name of the dto to export.
 * @param moduleName the module where the dto resides.
 * @param rootDir the project root directory.
 */
const exposeDto = async (dtoName, moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.dtosWellFileExists(moduleName, rootDir) && await exports.dtoExists(dtoName, moduleName, rootDir)) {
        // data
        const wellFilePath = exports.dtosWellFilePath(moduleName, rootDir);
        const patherizedDtoName = formatter_utils_1.formatDirectoryOrFileName(dtoName);
        const exportLine = `\nexport * from './${patherizedDtoName}.data';`;
        // append the module file.
        if (!await exports.fileContains(wellFilePath, exportLine)) {
            await fs_utils_1.appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Data directory.');
    }
};
exports.exposeDto = exposeDto;
/**
 * exposeDtosWell()
 *
 * exposes the dtos well to the module.
 * @param moduleName the name of the module who's
 * @param rootDir the project root directory.
 */
const exposeDtosWell = async (moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.dtosWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = exports.moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './data/data.well';`;
        // append the module file.
        if (!await exports.fileContains(modulePath, exportLine)) {
            await fs_utils_1.appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Data directory.');
    }
};
exports.exposeDtosWell = exposeDtosWell;
/**
 * exposeEntitiesWell()
 *
 * exposes the entities well to the module.
 * @param moduleName the name of the module
 * @param rootDir the project root directory.
 */
const exposeEntitiesWell = async (moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.valuesWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = exports.moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './entities/entities.well';`;
        // append the module file.
        if (!await exports.fileContains(modulePath, exportLine)) {
            await fs_utils_1.appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Entities directory.');
    }
};
exports.exposeEntitiesWell = exposeEntitiesWell;
/**
 * exposeEntity()
 *
 * adds the specified entity to the module's well file.
 * @param entityName the name of the entity to export.
 * @param moduleName the module where the entity resides
 * @param rootDir the project root directory.
 */
const exposeEntity = async (entityName, moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.entitiesWellFileExists(moduleName, rootDir) && await exports.entityExists(entityName, moduleName, rootDir)) {
        // data
        const wellFilePath = exports.entitiesWellFilePath(moduleName, rootDir);
        const patherizedEntityName = formatter_utils_1.formatDirectoryOrFileName(entityName);
        const exportLine = `\nexport * from './${patherizedEntityName}/${patherizedEntityName}.interface';\nexport * from './${patherizedEntityName}/${patherizedEntityName}';`;
        // append the module file.
        if (!await exports.fileContains(wellFilePath, exportLine)) {
            await fs_utils_1.appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find Module or Entities directory.');
    }
};
exports.exposeEntity = exposeEntity;
/**
 * exposeEvent()
 *
 * adds the specified event to the module's well file.
 * @param evemtName the name of the evemt to export.
 * @param moduleName the module where the event resides.
 * @param rootDir the project root directory.
 */
const exposeEvent = async (eventName, moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.eventsWellFileExists(moduleName, rootDir) && await exports.eventExists(eventName, moduleName, rootDir)) {
        // data
        const wellFilePath = exports.eventsWellFilePath(moduleName, rootDir);
        const patherizedEventName = formatter_utils_1.formatDirectoryOrFileName(eventName);
        const exportLine = `\nexport * from './${patherizedEventName}.event';`;
        // append the module file.
        if (!await exports.fileContains(wellFilePath, exportLine)) {
            await fs_utils_1.appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or event directory.');
    }
};
exports.exposeEvent = exposeEvent;
/**
 * exposeEventsWell()
 *
 * exposes the events well to the module.
 * @param moduleName the name of the module
 * @param rootDir the project root directory.
 */
const exposeEventsWell = async (moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.eventsWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = exports.moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './events/events.well';`;
        // append the module file.
        if (!await exports.fileContains(modulePath, exportLine)) {
            await fs_utils_1.appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Events directory.');
    }
};
exports.exposeEventsWell = exposeEventsWell;
/**
 * exposeException()
 *
 * adds the specified exception to the module's well file.
 * @param exceptionName the name of the exception to export.
 * @param moduleName the module where the dto resides.
 * @param rootDir the project root directory.
 */
const exposeException = async (exceptionName, moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.exceptionsWellFileExists(moduleName, rootDir) && await exports.exceptionExists(exceptionName, moduleName, rootDir)) {
        // data
        const wellFilePath = exports.exceptionsWellFilePath(moduleName, rootDir);
        const patherizedExceptionName = formatter_utils_1.formatDirectoryOrFileName(exceptionName);
        const exportLine = `\nexport * from './${patherizedExceptionName}.exception';`;
        // append the module file.
        if (!await exports.fileContains(wellFilePath, exportLine)) {
            await fs_utils_1.appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Exceptions directory.');
    }
};
exports.exposeException = exposeException;
/**
 * exposeExceptionsWell()
 *
 * exposes the exceptions well to the module.
 * @param moduleName the name of the module who's
 * @param rootDir the project root directory.
 */
const exposeExceptionsWell = async (moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.exceptionsWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = exports.moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './exceptions/exceptions.well';`;
        // append the module file.
        if (!await exports.fileContains(modulePath, exportLine)) {
            await fs_utils_1.appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Exceptions directory.');
    }
};
exports.exposeExceptionsWell = exposeExceptionsWell;
/**
 * exposeFactory()
 *
 * adds the specified factory to the module's well file.
 * @param factoryName the name of the factory to export.
 * @param moduleName the module where the factory resides.
 * @param rootDir the project root directory.
 */
const exposeFactory = async (factoryName, moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.factoriesWellFileExists(moduleName, rootDir) && await exports.factoryExists(factoryName, moduleName, rootDir)) {
        // data
        const wellFilePath = exports.factoriesWellFilePath(moduleName, rootDir);
        const patherizedFactoryName = formatter_utils_1.formatDirectoryOrFileName(factoryName);
        const exportLine = `\nexport * from './${patherizedFactoryName}-factory/${patherizedFactoryName}-factory.interface';\nexport * from './${patherizedFactoryName}-factory/${patherizedFactoryName}.factory';`;
        // append the module file.
        if (!await exports.fileContains(wellFilePath, exportLine)) {
            await fs_utils_1.appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Factories directory.');
    }
};
exports.exposeFactory = exposeFactory;
/**
 * exposeFactoriesWell()
 *
 * exposes the factories well to the module.
 * @param moduleName the name of the module who's
 * @param rootDir the project root directory.
 */
const exposeFactoriesWell = async (moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.factoriesWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = exports.moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './factories/factories.well';`;
        // append the module file.
        if (!await exports.fileContains(modulePath, exportLine)) {
            await fs_utils_1.appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Factories directory.');
    }
};
exports.exposeFactoriesWell = exposeFactoriesWell;
/**
 * exposeModule()
 *
 * exposes a module.
 * @param moduleName the module to expose
 * @param rootDir the root directory of the project.
 */
const exposeModule = async (moduleName, rootDir = process.cwd()) => {
    if (await exports.moduleExists(moduleName, rootDir)) {
        // module data
        const domconfig = await exports.loadDomConfigFileContents(rootDir);
        const indexFilePath = exports.indexPath(domconfig.name, rootDir);
        const moduleDirName = formatter_utils_1.formatDirectoryOrFileName(moduleName);
        const exportLine = `\nexport * from './src/${moduleDirName}/${moduleDirName}.module';`;
        // append the index file.
        if (!await exports.fileContains(indexFilePath, exportLine)) {
            await fs_utils_1.appendFile(indexFilePath, exportLine);
        }
    }
    else {
        throw new Error('Module not found.');
    }
};
exports.exposeModule = exposeModule;
/**
 * exposeQuery()
 *
 * adds the specified query to the module's well file.
 * @param queryName the name of the query to export.
 * @param moduleName the module where the query resides.
 * @param rootDir the project root directory.
 */
const exposeQuery = async (queryName, moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.servicesWellFileExists(moduleName, rootDir) && await exports.queryExists(queryName, moduleName, rootDir)) {
        // data
        const wellFilePath = exports.servicesWellFilePath(moduleName, rootDir);
        const patherizedQueryName = formatter_utils_1.formatDirectoryOrFileName(queryName);
        const exportLine = `\nexport * from './${patherizedQueryName}-query/${patherizedQueryName}.query';`;
        // append the module file.
        if (!await exports.fileContains(wellFilePath, exportLine)) {
            await fs_utils_1.appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or query directory.');
    }
};
exports.exposeQuery = exposeQuery;
/**
 * exposeRepositoriesWell()
 *
 * exposes the repositories well to the module.
 * @param moduleName the name of the module
 * @param rootDir the project root directory.
 */
const exposeRepositoriesWell = async (moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.repositoriesWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = exports.moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './repositories/repositories.well';`;
        // append the module file.
        if (!await exports.fileContains(modulePath, exportLine)) {
            await fs_utils_1.appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or repositories directory.');
    }
};
exports.exposeRepositoriesWell = exposeRepositoriesWell;
/**
 * exposeRepository()
 *
 * adds the specified repository to the module's well file.
 * @param repositoryName the name of the repository to export.
 * @param moduleName the module where the repository resides.
 * @param rootDir the project root directory.
 */
const exposeRepository = async (repositoryName, moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.repositoriesWellFileExists(moduleName, rootDir) && await exports.repositoryExists(repositoryName, moduleName, rootDir)) {
        // data
        const wellFilePath = exports.repositoriesWellFilePath(moduleName, rootDir);
        const patherizedRepositoryName = formatter_utils_1.formatDirectoryOrFileName(repositoryName);
        const exportLine = `\nexport * from './${patherizedRepositoryName}-repository/${patherizedRepositoryName}-repository.interface';\nexport * from './${patherizedRepositoryName}-repository/${patherizedRepositoryName}.repository';`;
        // append the module file.
        if (!await exports.fileContains(wellFilePath, exportLine)) {
            await fs_utils_1.appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or repositories directory.');
    }
};
exports.exposeRepository = exposeRepository;
/**
 * exposeSpecification()
 *
 * adds the specified specification to the module's well file.
 * @param specificationName the name of the specification to export.
 * @param moduleName the module where the specification resides.
 * @param rootDir the project root directory.
 */
const exposeSpecification = async (specificationName, moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.specificationsWellFileExists(moduleName, rootDir) && await exports.specificationExists(specificationName, moduleName, rootDir)) {
        // data
        const wellFilePath = exports.specificationsWellFilePath(moduleName, rootDir);
        const patherizedSpecificationName = formatter_utils_1.formatDirectoryOrFileName(specificationName);
        const exportLine = `\nexport * from './${patherizedSpecificationName}.specification';`;
        // append the module file.
        if (!await exports.fileContains(wellFilePath, exportLine)) {
            await fs_utils_1.appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or specification directory.');
    }
};
exports.exposeSpecification = exposeSpecification;
/**
 * exposeServicesWell()
 *
 * exposes the services well to the module.
 * @param moduleName the name of the module who's
 * @param rootDir the project root directory.
 */
const exposeServicesWell = async (moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.servicesWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = exports.moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './services/services.well';`;
        // append the module file.
        if (!await exports.fileContains(modulePath, exportLine)) {
            await fs_utils_1.appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Services directory.');
    }
};
exports.exposeServicesWell = exposeServicesWell;
/**
 * exposeSpecificationsWell()
 *
 * exposes the specifications well to the module.
 * @param moduleName the name of the module who's
 * @param rootDir the project root directory.
 */
const exposeSpecificationsWell = async (moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.specificationsWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = exports.moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './specifications/specifications.well';`;
        // append the module file.
        if (!await exports.fileContains(modulePath, exportLine)) {
            await fs_utils_1.appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Specification directory.');
    }
};
exports.exposeSpecificationsWell = exposeSpecificationsWell;
/**
 * exposeValue()
 *
 * adds the specified value to the module's well file.
 * @param valueName the name of the value to export.
 * @param moduleName the module where the value resides.
 * @param rootDir the project root directory.
 */
const exposeValue = async (valueName, moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.valuesWellFileExists(moduleName, rootDir) && await exports.valueExists(valueName, moduleName, rootDir)) {
        // data
        const wellFilePath = exports.valuesWellFilePath(moduleName, rootDir);
        const patherizedValueName = formatter_utils_1.formatDirectoryOrFileName(valueName);
        const exportLine = `\nexport * from './${patherizedValueName}/${patherizedValueName}.interface';\nexport * from './${patherizedValueName}/${patherizedValueName}';`;
        // append the module file.
        if (!await exports.fileContains(wellFilePath, exportLine)) {
            await fs_utils_1.appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Values directory.');
    }
};
exports.exposeValue = exposeValue;
/**
 * exposeValuesWell()
 *
 * exposes the values well to the module.
 * @param moduleName the name of the module who's
 * @param rootDir the project root directory.
 */
const exposeValuesWell = async (moduleName, rootDir) => {
    if (await exports.moduleExists(moduleName, rootDir) && await exports.valuesWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = exports.moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './values/values.well';`;
        // append the module file.
        if (!await exports.fileContains(modulePath, exportLine)) {
            await fs_utils_1.appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Values directory.');
    }
};
exports.exposeValuesWell = exposeValuesWell;
/**
 * factoriesDirectoryExists()
 *
 * determines if the factories directory for the specified module exists.
 * @param moduleName module name
 * @param rootDir the root directory.
 * @returns TRUE if the values directory exists for the specified module. FALSE otherwise.
 */
const factoriesDirectoryExists = async (moduleName, rootDir) => {
    const dirPath = exports.factoriesWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.factoriesDirectoryExists = factoriesDirectoryExists;
/**
 * factoriesDirectoryPath()
 *
 * gets the path to the factories directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the factories directory for that module.
 */
const factoriesDirectoryPath = (moduleName, rootDir) => {
    return Path.resolve(exports.srcDirectoryPath(rootDir), formatter_utils_1.formatDirectoryOrFileName(moduleName), 'factories');
};
exports.factoriesDirectoryPath = factoriesDirectoryPath;
/**
 * factoriesWellFileExists()
 *
 * determines if the factories well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the factproes well exists. FALSE otehrwise.
 */
const factoriesWellFileExists = async (moduleName, rootDir) => {
    const dirPath = exports.factoriesWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.factoriesWellFileExists = factoriesWellFileExists;
/**
 * factoriesWellFilePath()
 *
 * gets the path for the value well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
const factoriesWellFilePath = (moduleName, rootDir) => {
    return Path.resolve(exports.factoriesDirectoryPath(moduleName, rootDir), 'factories.well.ts');
};
exports.factoriesWellFilePath = factoriesWellFilePath;
/**
 * factoryClassPath()
 *
 * gets the path to the class file of the specified factory name, in the specified module.
 * @param factoryName the factory name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
const factoryClassPath = (factoryName, module, rootDir) => {
    return Path.resolve(exports.factoryDirectoryPath(factoryName, module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(factoryName)}.factory.ts`);
};
exports.factoryClassPath = factoryClassPath;
/**
 * factoryDirectoryPath()
 *
 * gets the path to the factory directory for the specified factory and module.
 * @param factoryName the factory name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the factories object directory.
 */
const factoryDirectoryPath = (factoryName, module, rootDir) => {
    return Path.resolve(exports.factoriesDirectoryPath(module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(factoryName)}-factory`);
};
exports.factoryDirectoryPath = factoryDirectoryPath;
/**
 * factoryExists()
 *
 * determines if the specified value exists in the specified module.
 * @param factoryName the factory name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the specified factory exists. FALSE otherwise.
 */
const factoryExists = async (factoryName, moduleName, rootDir) => {
    return await exports.pathExists(exports.factoryDirectoryPath(factoryName, moduleName, rootDir));
};
exports.factoryExists = factoryExists;
/**
 * factoryInterfacePath()
 *
 * gets the path to the interface file of the specified factory name, in the specified module.
 * @param factoryName the factory name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */
const factoryInterfacePath = (factoryName, module, rootDir) => {
    return Path.resolve(exports.factoryDirectoryPath(factoryName, module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(factoryName)}-factory.interface.ts`);
};
exports.factoryInterfacePath = factoryInterfacePath;
/**
 * fileContains()
 *
 * determines if the file contains the contents.
 * @param path the path of the file to check.
 * @param contents the contents to check for
 * @returns TRUE if the the file contains the contents. FALSE otherwise.
 */
const fileContains = async (path, contents) => {
    const file = await fs_utils_1.readFile(path);
    return file.toString().includes(contents);
};
exports.fileContains = fileContains;
/**
 * getAbsolutePath()
 *
 * gets the absolute path from a path segment.
 * @param segment The path segment.
 * @returns the absolute path.
 */
const getAbsolutePath = (segment) => {
    return Path.resolve(process.cwd(), segment);
};
exports.getAbsolutePath = getAbsolutePath;
/**
 * getDomconfigPath()
 *
 * gets the path to the domconfig.json file.
 * @param rootDir the domain root directory.
 * @returns the path to the domconfig.json file.
 */
const getDomconfigFilePath = (rootDir) => {
    return Path.resolve(rootDir, 'domconfig.json');
};
exports.getDomconfigFilePath = getDomconfigFilePath;
/**
 * gitignorePath()
 *
 * gets the path to the .gitignore file from the root.
 * @param rootDir the root directory.
 * @returns the path to the package.json file.
 */
const gitignorePath = (rootDir) => {
    return Path.resolve(rootDir, '.gitignore');
};
exports.gitignorePath = gitignorePath;
/**
 * indexPath()
 *
 * gets the index path.
 * @param domainName the domain name
 * @param rootDir the root of the project
 * @returns the index file path.
 */
const indexPath = (domainName, rootDir) => {
    return Path.resolve(rootDir, `${formatter_utils_1.formatDirectoryOrFileName(domainName)}.ts`);
};
exports.indexPath = indexPath;
/**
 * isDomeniereProject()
 *
 * determines if the specified path is a Domeniere Project.
 * @param rootDir the path to test.
 * @returns TRUE if the path is a domeniere project root.
 */
const isDomeniereProject = async (rootDir) => {
    if (await fs_utils_1.isDirectory(rootDir)) {
        const domConfigPath = exports.getDomconfigFilePath(rootDir);
        return await exports.pathExists(domConfigPath);
    }
    return false;
};
exports.isDomeniereProject = isDomeniereProject;
/**
 * loadDomConfigFileContents()
 *
 * loads the domconfig.json file contents.
 * @param rootDir the path to load.
 * @returns the loaded DOMCONFIG contents.
 */
const loadDomConfigFileContents = async (rootDir) => {
    // make sure that the DomConfig is what the path is pointing to.
    try {
        const domConfigPath = exports.getDomconfigFilePath(rootDir);
        if (await exports.pathExists(domConfigPath)) {
            // parse the file.
            const contents = await fs_utils_1.readFile(domConfigPath);
            const config = JSON.parse(contents.toString());
            return config;
        }
        else {
            throw new Error(`domconfig.json not found`);
        }
    }
    catch (e) {
        throw new Error(e.message);
    }
};
exports.loadDomConfigFileContents = loadDomConfigFileContents;
/**
 * moduleDirectoryPath()
 *
 * gets the path to the specified module directory.
 * @param moduleName the module name.
 * @param rootDir the root directory of the project. It defaults to the current working directory.
 * @returns the path to the specified module.
 */
const moduleDirectoryPath = (moduleName, rootDir = process.cwd()) => {
    return Path.resolve(rootDir, 'src', formatter_utils_1.formatDirectoryOrFileName(moduleName));
};
exports.moduleDirectoryPath = moduleDirectoryPath;
/**
 * moduleExists()
 *
 * determines if the module exists.
 * @param moduleName the module to test
 * @param rootDir thr root directory to search.
 * @returns TRUE if the module exists. FALSE otherwise.
 */
const moduleExists = async (moduleName, rootDir) => {
    const modulePath = exports.moduleFilePath(moduleName, rootDir);
    return await exports.pathExists(modulePath);
};
exports.moduleExists = moduleExists;
/**
 * moduleFilePath()
 *
 * gets the path to the specified module file.
 * @param moduleName the module name.
 * @param rootDir the root directory of the project. It defaults to the current working directory.
 * @returns the path to the specified module.
 */
const moduleFilePath = (moduleName, rootDir = process.cwd()) => {
    return Path.resolve(exports.moduleDirectoryPath(moduleName, rootDir), formatter_utils_1.formatModuleFileName(moduleName));
};
exports.moduleFilePath = moduleFilePath;
/**
 * packagePath()
 *
 * gets the path to the package.json file from the root.
 * @param rootDir the root directory.
 * @returns the path to the package.json file.
 */
const packagePath = (rootDir) => {
    return Path.resolve(rootDir, 'package.json');
};
exports.packagePath = packagePath;
/**
 * pathExists()
 *
 * determines if the specified path exists.
 * @param path the path to test.
 * @returns TRUE if the directory exists. FALSE otherwise.
 */
const pathExists = async (path) => {
    try {
        await fs_utils_1.dirExists(path);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.pathExists = pathExists;
/**
 * queryClassPath()
 *
 * gets the path to the class file of the specified query name, in the specified module.
 * @param queryName the query name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
const queryClassPath = (queryName, module, rootDir) => {
    return Path.resolve(exports.queryDirectoryPath(queryName, module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(queryName)}.query.ts`);
};
exports.queryClassPath = queryClassPath;
/**
 * queryDirectoryPath()
 *
 * gets the path to the query directory for the specified command and module.
 * @param queryName the query name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the query directory.
 */
const queryDirectoryPath = (queryName, module, rootDir) => {
    return Path.resolve(exports.servicesDirectoryPath(module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(queryName)}-query`);
};
exports.queryDirectoryPath = queryDirectoryPath;
/**
 * queryExists()
 *
 * determines if the specified query exists in the specified module.
 * @param queryName the query name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the query exists. FALSE otherwise.
 */
const queryExists = async (queryName, moduleName, rootDir) => {
    return await exports.pathExists(exports.queryDirectoryPath(queryName, moduleName, rootDir));
};
exports.queryExists = queryExists;
/**
 * repositoriesDirectoryExists()
 *
 * determines if the repositories directory for the specified module exists.
 * @param moduleName module name
 * @param rootDir the root directory.
 * @returns TRUE if the repositories directory exists for the specified module. FALSE otherwise.
 */
const repositoriesDirectoryExists = async (moduleName, rootDir) => {
    const dirPath = exports.repositoriesWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.repositoriesDirectoryExists = repositoriesDirectoryExists;
/**
 * repositoriesDirectoryPath()
 *
 * gets the path to the repositories directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the repositories directory for that module.
 */
const repositoriesDirectoryPath = (moduleName, rootDir) => {
    return Path.resolve(exports.srcDirectoryPath(rootDir), formatter_utils_1.formatDirectoryOrFileName(moduleName), 'repositories');
};
exports.repositoriesDirectoryPath = repositoriesDirectoryPath;
/**
 * repositoriesWellFileExists()
 *
 * determines if the repositories well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the repositories well exists. FALSE otehrwise.
 */
const repositoriesWellFileExists = async (moduleName, rootDir) => {
    const dirPath = exports.repositoriesWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.repositoriesWellFileExists = repositoriesWellFileExists;
/**
 * repositoriesWellFilePath()
 *
 * gets the path for the repositories well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
const repositoriesWellFilePath = (moduleName, rootDir) => {
    return Path.resolve(exports.repositoriesDirectoryPath(moduleName, rootDir), 'repositories.well.ts');
};
exports.repositoriesWellFilePath = repositoriesWellFilePath;
/**
 * repositoryClassPath()
 *
 * gets the path to the class file of the specified repository name, in the specified module.
 * @param repositoryName the repository name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
const repositoryClassPath = (repositoryName, module, rootDir) => {
    return Path.resolve(exports.repositoryDirectoryPath(repositoryName, module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(repositoryName)}.repository.ts`);
};
exports.repositoryClassPath = repositoryClassPath;
/**
 * repositoryDirectoryPath()
 *
 * gets the path to the repository directory for the specified repository and module.
 * @param repositoryName the repository name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the repository directory.
 */
const repositoryDirectoryPath = (repositoryName, module, rootDir) => {
    return Path.resolve(exports.repositoriesDirectoryPath(module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(repositoryName)}-repository`);
};
exports.repositoryDirectoryPath = repositoryDirectoryPath;
/**
 * repositoryExists()
 *
 * determines if the specified repository exists in the specified module.
 * @param repositoryName the repository name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the repository exists. FALSE otherwise.
 */
const repositoryExists = async (repositoryName, moduleName, rootDir) => {
    return await exports.pathExists(exports.repositoryDirectoryPath(repositoryName, moduleName, rootDir));
};
exports.repositoryExists = repositoryExists;
/**
 * repositoryInterfacePath()
 *
 * gets the path to the interface file of the specified repository name, in the specified module.
 * @param repositoryName the repository name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */
const repositoryInterfacePath = (repositoryName, module, rootDir) => {
    return Path.resolve(exports.repositoryDirectoryPath(repositoryName, module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(repositoryName)}-repository.interface.ts`);
};
exports.repositoryInterfacePath = repositoryInterfacePath;
/**
 * scaffoldDomainDirectory()
 *
 * scaffolds a Domeniere domain directory.
 * @param path the path to scaffold.
 */
const scaffoldDomainDirectory = async (domainName, description, author, repository, license, packageManager) => {
    // create the directory.
    const fileNameFormattedDomainName = formatter_utils_1.formatDomainDirectoryName(domainName);
    const rootDirectoryPath = exports.getAbsolutePath(fileNameFormattedDomainName);
    try {
        await fs_utils_1.makeDirectory(rootDirectoryPath);
    }
    catch (e) {
        throw new Error("Could not create domain directory.");
    }
    try {
        // create src directory
        const srcDirectory = exports.srcDirectoryPath(rootDirectoryPath);
        // create <domain-name>.eventstore.ts file in src
        const domainEventStorePath = exports.eventStorePath(domainName, rootDirectoryPath);
        const eventStoreFileContents = await template_utils_1.generateEventStoreFileContents(domainName);
        // create <domain-name>.api.ts file in src
        const apiPath = exports.apiFilePath(domainName, rootDirectoryPath);
        const apiFileContents = await template_utils_1.generateApiFileContents(domainName);
        // create package.json file
        const packageJsonPath = exports.packagePath(rootDirectoryPath);
        const packageJsonContents = await template_utils_1.generatePackageJsonFileContents(domainName, description, author, repository, license);
        // create the gitignore file
        const gitignoreFilePath = exports.gitignorePath(rootDirectoryPath);
        const gitignoreContents = await template_utils_1.generateGitignoreFileContents();
        // create tsconfig file
        const tsconfigFilePath = exports.tsconfigPath(rootDirectoryPath);
        const tsconfigContent = await template_utils_1.generateTsconfigFileContents();
        // create domconfig.json
        const domconfigFilePath = exports.domconfigPath(rootDirectoryPath);
        const domconfigContents = await template_utils_1.generateDomConfigFileContents(domainName, description, packageManager);
        // create index.ts file
        const indexFilePath = exports.indexPath(domainName, rootDirectoryPath);
        const indexContents = await template_utils_1.generateIndexFileContents(domainName);
        // create all the files
        // root directory
        await fs_utils_1.writeFile(packageJsonPath, packageJsonContents);
        await fs_utils_1.writeFile(tsconfigFilePath, tsconfigContent);
        await fs_utils_1.writeFile(domconfigFilePath, domconfigContents);
        await fs_utils_1.writeFile(indexFilePath, indexContents);
        await fs_utils_1.writeFile(gitignoreFilePath, gitignoreContents);
        // src directory
        await fs_utils_1.makeDirectory(srcDirectory);
        await fs_utils_1.writeFile(domainEventStorePath, eventStoreFileContents);
        await fs_utils_1.writeFile(apiPath, apiFileContents);
    }
    catch (e) {
        // something went wrong.
        // undo the directory creation.
        await fs_utils_1.destroyDirectory(rootDirectoryPath, {
            recursive: true,
            force: true,
        });
        throw e;
    }
};
exports.scaffoldDomainDirectory = scaffoldDomainDirectory;
/**
 * servicesDirectoryExists()
 *
 * determines if the services directory for the specified module exists.
 * @param moduleName module name
 * @param rootDir the root directory.
 * @returns TRUE if the services directory exists for the specified module. FALSE otherwise.
 */
const servicesDirectoryExists = async (moduleName, rootDir) => {
    const dirPath = exports.servicesWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.servicesDirectoryExists = servicesDirectoryExists;
/**
 * servicesDirectoryPath()
 *
 * gets the path to the services directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the services directory for that module.
 */
const servicesDirectoryPath = (moduleName, rootDir) => {
    return Path.resolve(exports.srcDirectoryPath(rootDir), formatter_utils_1.formatDirectoryOrFileName(moduleName), 'services');
};
exports.servicesDirectoryPath = servicesDirectoryPath;
/**
 * servicesWellFileExists()
 *
 * determines if the services well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the services well exists. FALSE otehrwise.
 */
const servicesWellFileExists = async (moduleName, rootDir) => {
    const dirPath = exports.servicesWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.servicesWellFileExists = servicesWellFileExists;
/**
 * servicesWellFilePath()
 *
 * gets the path for the services well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
const servicesWellFilePath = (moduleName, rootDir) => {
    return Path.resolve(exports.servicesDirectoryPath(moduleName, rootDir), 'services.well.ts');
};
exports.servicesWellFilePath = servicesWellFilePath;
/**
 * specificationClassPath()
 *
 * gets the path to the class file of the specified specification name, in the specified module.
 * @param specificationName the specification name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
const specificationClassPath = (specificationName, module, rootDir) => {
    return Path.resolve(exports.specificationsDirectoryPath(module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(specificationName)}.specification.ts`);
};
exports.specificationClassPath = specificationClassPath;
/**
 * specificationDirectoryPath()
 *
 * gets the path to the specification directory for the specified specification and module.
 * @param specificationName the specification name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the specification directory.
 */
const specificationDirectoryPath = (specificationName, module, rootDir) => {
    return Path.resolve(exports.specificationsDirectoryPath(module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(specificationName)}-specification`);
};
exports.specificationDirectoryPath = specificationDirectoryPath;
/**
 * specificationExists()
 *
 * determines if the specified specification exists in the specified module.
 * @param specificationName the specification name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the specification exists. FALSE otherwise.
 */
const specificationExists = async (specificationName, moduleName, rootDir) => {
    return await exports.pathExists(exports.specificationClassPath(specificationName, moduleName, rootDir));
};
exports.specificationExists = specificationExists;
/**
 * specificationsDirectoryExists()
 *
 * determines if the specifications directory for the specified module exists.
 * @param moduleName module name
 * @param rootDir the root directory.
 * @returns TRUE if the values directory exists for the specified module. FALSE otherwise.
 */
const specificationsDirectoryExists = async (moduleName, rootDir) => {
    const dirPath = exports.specificationsWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.specificationsDirectoryExists = specificationsDirectoryExists;
/**
 * specificationsDirectoryPath()
 *
 * gets the path to the specifications directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the specifications directory for that module.
 */
const specificationsDirectoryPath = (moduleName, rootDir) => {
    return Path.resolve(exports.srcDirectoryPath(rootDir), formatter_utils_1.formatDirectoryOrFileName(moduleName), 'specifications');
};
exports.specificationsDirectoryPath = specificationsDirectoryPath;
/**
 * specificationsWellFileExists()
 *
 * determines if the specifications well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the specifications well exists. FALSE otehrwise.
 */
const specificationsWellFileExists = async (moduleName, rootDir) => {
    const dirPath = exports.specificationsWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.specificationsWellFileExists = specificationsWellFileExists;
/**
 * specificationsWellFilePath()
 *
 * gets the path for the specifications well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
const specificationsWellFilePath = (moduleName, rootDir) => {
    return Path.resolve(exports.specificationsDirectoryPath(moduleName, rootDir), 'specifications.well.ts');
};
exports.specificationsWellFilePath = specificationsWellFilePath;
/**
 * srcDirectoryPath()
 *
 * gets the src directory path starting with the provided root directory.
 * @param rootDir the root directory.
 * @returns the domain src directory path.
 */
const srcDirectoryPath = (rootDir) => {
    return Path.resolve(rootDir, 'src');
};
exports.srcDirectoryPath = srcDirectoryPath;
/**
 * tsconfigPath()
 *
 * gets the tsconfig path.
 * @param rootDir the root directory.
 * @returns
 */
const tsconfigPath = (rootDir) => {
    return Path.resolve(rootDir, 'tsconfig.json');
};
exports.tsconfigPath = tsconfigPath;
/**
 * valueClassPath()
 *
 * gets the path to the class file of the specified value name, in the specified module.
 * @param valueName the value name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */
const valueClassPath = (valueName, module, rootDir) => {
    return Path.resolve(exports.valueObjectDirectoryPath(valueName, module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(valueName)}.ts`);
};
exports.valueClassPath = valueClassPath;
/**
 * valueExists()
 *
 * determines if the specified value exists in the specified module.
 * @param valueName the value name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns TRUE if the value exists. FALSE otherwise.
 */
const valueExists = async (valueName, moduleName, rootDir) => {
    return await exports.pathExists(exports.valueObjectDirectoryPath(valueName, moduleName, rootDir));
};
exports.valueExists = valueExists;
/**
 * valueInterfacePath()
 *
 * gets the path to the interface file of the specified value name, in the specified module.
 * @param valueName the value name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */
const valueInterfacePath = (valueName, module, rootDir) => {
    return Path.resolve(exports.valueObjectDirectoryPath(valueName, module, rootDir), `${formatter_utils_1.formatDirectoryOrFileName(valueName)}.interface.ts`);
};
exports.valueInterfacePath = valueInterfacePath;
/**
 * valuesDirectoryExists()
 *
 * determines if the values directory for the specified module exists.
 * @param moduleName module name
 * @param rootDir the root directory.
 * @returns TRUE if the values directory exists for the specified module. FALSE otherwise.
 */
const valuesDirectoryExists = async (moduleName, rootDir) => {
    const dirPath = exports.valuesWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.valuesDirectoryExists = valuesDirectoryExists;
/**
 * valueWellFileExists()
 *
 * determines if the values well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the values well exists. FALSE otehrwise.
 */
const valuesWellFileExists = async (moduleName, rootDir) => {
    const dirPath = exports.valuesWellFilePath(moduleName, rootDir);
    return await exports.pathExists(dirPath);
};
exports.valuesWellFileExists = valuesWellFileExists;
/**
 * valuesDirectoryPath()
 *
 * gets the path to the values directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the values directory for that module.
 */
const valuesDirectoryPath = (moduleName, rootDir) => {
    return Path.resolve(exports.srcDirectoryPath(rootDir), formatter_utils_1.formatDirectoryOrFileName(moduleName), 'values');
};
exports.valuesDirectoryPath = valuesDirectoryPath;
/**
 * valueWellFilePath()
 *
 * gets the path for the value well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */
const valuesWellFilePath = (moduleName, rootDir) => {
    return Path.resolve(exports.valuesDirectoryPath(moduleName, rootDir), 'values.well.ts');
};
exports.valuesWellFilePath = valuesWellFilePath;
/**
 * valueObjectDirectoryPath()
 *
 * gets the path to the value object directory for the specified value and module.
 * @param valueName the value name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the value object directory.
 */
const valueObjectDirectoryPath = (valueName, module, rootDir) => {
    return Path.resolve(exports.valuesDirectoryPath(module, rootDir), formatter_utils_1.formatDirectoryOrFileName(valueName));
};
exports.valueObjectDirectoryPath = valueObjectDirectoryPath;
