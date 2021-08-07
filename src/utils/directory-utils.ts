import * as Path from 'path';
import { 
    appendFile, 
    destroyDirectory, 
    destroyFile, 
    dirExists, 
    isDirectory, 
    makeDirectory, 
    readFile, 
    writeFile 
} from './fs-utils';
import { 
    generateAggregateContents,
    generateApiFileContents, 
    generateCommandContents, 
    generateDomConfigFileContents, 
    generateDtoContents, 
    generateEntityContents, 
    generateEventContents, 
    generateEventStoreFileContents,
    generateFactoryContents,
    generateFactoryInterfaceContents,
    generateIdentifierInterfaceContents,
    generateIdentifierValueContents,
    generateIdentityRepositoryContents,
    generateIndexFileContents,
    generateInterfaceContents,
    generateModuleFileContents,
    generatePackageJsonFileContents,
    generateQueryContents,
    generateRepositoryContents,
    generateRepositoryInterfaceContents,
    generateSpecificationContents,
    generateTimestampedAggregateContents,
    generateTimestampedEntityContents,
    generateTsconfigFileContents,
    generateValueContents,
    generateWellFileContents
} from './template-utils';
import { 
    DomConfig, 
    PackageManager 
} from './util-types';
import { 
    formatApiFileName, 
    formatClassName, 
    formatDirectoryOrFileName, 
    formatDomainDirectoryName, 
    formatEventStoreFileName, 
    formatModuleFileName 
} from './formatter-utils';


/**
 * aggregateDirectoryPath()
 * 
 * gets the path to the aggregate directory for the specified aggregate and module.
 * @param aggregateName the aggregate name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the value object directory.
 */

 export const aggregateDirectoryPath = (aggregateName: string, module: string, rootDir: string): string => {
    return Path.resolve(aggregatesDirectoryPath(module, rootDir), formatDirectoryOrFileName(aggregateName));
}

/**
 * aggregatesDirectoryExists()
 * 
 * determines if the aggregates directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the aggregates directory exists for the specified module. FALSE otherwise.
 */

 export const aggregatesDirectoryExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = aggregatesWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * aggregateClassPath()
 * 
 * gets the path to the class file of the specified aggregate name, in the specified module.
 * @param aggregateName the aggregate name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */

 export const aggregateClassPath = (aggregateName: string, module: string, rootDir: string): string => {
    return Path.resolve(aggregateDirectoryPath(aggregateName, module, rootDir), `${formatDirectoryOrFileName(aggregateName)}.ts`);
}

/**
 * aggregateInterfacePath()
 * 
 * gets the path to the interface file of the specified aggregate name, in the specified module.
 * @param aggregateName the aggregate name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */

 export const aggregateInterfacePath = (aggregateName: string, module: string, rootDir: string): string => {
    return Path.resolve(aggregateDirectoryPath(aggregateName, module, rootDir), `${formatDirectoryOrFileName(aggregateName)}.interface.ts`);
}

/**
 * aggregatesWellFileExists()
 * 
 * determines if the aggregates well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the entities well exists. FALSE otehrwise.
 */

 export const aggregatesWellFileExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = aggregatesWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * aggregatesWellFilePath()
 * 
 * gets the path for the aggregates well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */

 export const aggregatesWellFilePath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(aggregatesDirectoryPath(moduleName, rootDir), 'aggregates.well.ts');
}

/**
 * aggregateExists()
 * 
 * determines if the specified aggregate exists in the specified module.
 * @param aggregateName the aggregate name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns 
 */

 export const aggregateExists = async (aggregateName: string, moduleName: string, rootDir: string): Promise<boolean> => {
    return await pathExists(aggregateDirectoryPath(aggregateName, moduleName, rootDir));
}

/**
 * apiFilePath()
 * 
 * gets the API file path.
 * @param domainName the domain name
 * @param rootDir the root directory.
 * @returns the api file path.
 */

export const apiFilePath = (domainName: string, rootDir: string): string => {
    return Path.resolve(srcDirectoryPath(rootDir), formatApiFileName(domainName));
}

/**
 * aggregatesDirectoryPath()
 * 
 * gets the path to the aggregates directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the values directory for that module.
 */

 export const aggregatesDirectoryPath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(srcDirectoryPath(rootDir), formatDirectoryOrFileName(moduleName), 'aggregates');
}

/**
 * commandClassPath()
 * 
 * gets the path to the class file of the specified command name, in the specified module.
 * @param commandName the commandy name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */

export const commandClassPath = (commandName: string, module: string, rootDir: string): string => {
    return Path.resolve(commandDirectoryPath(commandName, module, rootDir), `${formatDirectoryOrFileName(commandName)}.command.ts`);
}

/**
 * commandDirectoryPath()
 * 
 * gets the path to the command directory for the specified command and module.
 * @param commandName the command name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the repository directory.
 */

export const commandDirectoryPath = (commandName: string, module: string, rootDir: string): string => {
    return Path.resolve(servicesDirectoryPath(module, rootDir), `${formatDirectoryOrFileName(commandName)}-command`);
}

/**
 * commandExists()
 * 
 * determines if the specified command exists in the specified module.
 * @param commandName the command name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns 
 */

export const commandExists = async (commandName: string, moduleName: string, rootDir: string): Promise<boolean> => {
    return await pathExists(commandDirectoryPath(commandName, moduleName, rootDir));
}

/**
 * createAggregate()
 * 
 * creates an aggregate.
 * @param aggregateName the aggregate name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param timestamped a flag to indicate whether the aggregate should be timestamped.
 */

 export const createAggregate = async (aggregateName: string, moduleName: string, rootDir: string, timestamped: boolean = false): Promise<void> => {
    // make sure the module and aggregates directories exists.
    if (await moduleExists(moduleName, rootDir) && await aggregatesDirectoryExists(moduleName, rootDir)) {
        // load the entity contents
        const aggregateInterfaceContents = await generateInterfaceContents(aggregateName);
        const aggregateClassContent = timestamped ? await generateTimestampedAggregateContents(aggregateName) : await generateAggregateContents(aggregateName);
        const aggregateDirPath = aggregateDirectoryPath(aggregateName, moduleName, rootDir);
        const aggregateInterfaceFilePath = aggregateInterfacePath(aggregateName, moduleName, rootDir);
        const aggregateClassFilePath = aggregateClassPath(aggregateName, moduleName, rootDir);

        // create the directory.
        await makeDirectory(aggregateDirPath);

        // create the files.
        try {
            await writeFile(aggregateInterfaceFilePath, aggregateInterfaceContents);
            await writeFile(aggregateClassFilePath, aggregateClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await destroyDirectory(aggregateDirPath, {
                recursive: true,
                force: true,
            });

            return e;
        }

    }
    else {
        throw new Error('Module or Aggregates directory not found.');
    }
}

/**
 * createAggregatesDirectoryForModule()
 * 
 * creates a aggregates directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */

 export const createAggregatesDirectoryForModule = async (moduleName: string, rootDir: string): Promise<void> => {
    if (!await aggregatesDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const aggregatesDirectoryPathToCreate = aggregatesDirectoryPath(moduleName, rootDir);
        const aggregatesWellFilePathToCreate = aggregatesWellFilePath(moduleName, rootDir);
        const wellFileContents = await generateWellFileContents('aggregtes');

        // write directory.
        await makeDirectory(aggregatesDirectoryPathToCreate);

        try {
            // write well file
            await writeFile(aggregatesWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await destroyDirectory(aggregatesDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Aggregates directory for module ${formatClassName(moduleName)} already exists.`);
    }
}

/**
 * createCommand()
 * 
 * creates an factory.
 * @param commandName the command name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param identity indicates whether the repository is an identity generating repository.
 */

export const createCommand = async (commandName: string, moduleName: string, rootDir: string, identity: boolean = false): Promise<void> => {
    // make sure the module and services directories exists.
    if (await moduleExists(moduleName, rootDir) && await servicesDirectoryExists(moduleName, rootDir)) {
        // load the command contents
        const commandClassContent = await generateCommandContents(commandName);
        const commandDirPath = commandDirectoryPath(commandName, moduleName, rootDir);
        const commandClassFilePath = commandClassPath(commandName, moduleName, rootDir);

        // create the directory.
        await makeDirectory(commandDirPath);

        // create the files.
        try {
            await writeFile(commandClassFilePath, commandClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await destroyDirectory(commandDirPath, {
                recursive: true,
                force: true,
            });

            return e;
        }

    }
    else {
        throw new Error('Module or Entities directory not found.');
    }
}

/**
 * createDto()
 * 
 * creates a DTO
 * @param dtoName the specification name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */

export const createDto = async (dtoName: string, moduleName: string, rootDir: string): Promise<void> => {
    // make sure the module and dtos directories exists.
    if (await moduleExists(moduleName, rootDir) && await dtosDirectoryExists(moduleName, rootDir)) {
        // load the specification contents
        const dtoClassContent = await generateDtoContents(dtoName);
        const dtoClassFilePath = dtoClassPath(dtoName, moduleName, rootDir);

        // create the files.
        try {
            await writeFile(dtoClassFilePath, dtoClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await destroyFile(dtoClassFilePath);

            return e;
        }

    }
    else {
        throw new Error('Module or Data directory not found.');
    }
}

/**
 * createDtosDirectoryForModule()
 * 
 * creates a dtos directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */

export const createDtosDirectoryForModule = async (moduleName: string, rootDir: string): Promise<void> => {
    if (!await dtosDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const dtosDirectoryPathToCreate = dtosDirectoryPath(moduleName, rootDir);
        const dtosWellFilePathToCreate = dtosWellFilePath(moduleName, rootDir);
        const wellFileContents = await generateWellFileContents('data');

        // write directory.
        await makeDirectory(dtosDirectoryPathToCreate);

        try {
            // write well file
            await writeFile(dtosWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await destroyDirectory(dtosDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Specifications directory for module ${formatClassName(moduleName)} already exists.`);
    }
}

/**
 * createEntity()
 * 
 * creates an entity.
 * @param entityName the entity name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param timestamped a flag to indicate whether the entity should be timestamped.
 */

export const createEntity = async (entityName: string, moduleName: string, rootDir: string, timestamped: boolean = false): Promise<void> => {
    // make sure the module and entities directories exists.
    if (await moduleExists(moduleName, rootDir) && await entitiesDirectoryExists(moduleName, rootDir)) {
        // load the entity contents
        const entityInterfaceContents = await generateInterfaceContents(entityName);
        const entityClassContent = timestamped ? await generateTimestampedEntityContents(entityName) : await generateEntityContents(entityName);
        const entityDirPath = entityDirectoryPath(entityName, moduleName, rootDir);
        const entityInterfaceFilePath = entityInterfacePath(entityName, moduleName, rootDir);
        const entityClassFilePath = entityClassPath(entityName, moduleName, rootDir);

        // create the directory.
        await makeDirectory(entityDirPath);

        // create the files.
        try {
            await writeFile(entityInterfaceFilePath, entityInterfaceContents);
            await writeFile(entityClassFilePath, entityClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await destroyDirectory(entityDirPath, {
                recursive: true,
                force: true,
            });

            return e;
        }

    }
    else {
        throw new Error('Module or Entities directory not found.');
    }
}

/**
 * createEvent()
 * 
 * creates an event.
 * @param eventName the event name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param broadcastEvent a flag to indicate whether the event should be broadcasted
 */

export const createEvent = async (eventName: string, moduleName: string, rootDir: string, broadcastEvent: boolean = false): Promise<void> => {
    // make sure the module and events directories exists.
    if (await moduleExists(moduleName, rootDir) && await eventsDirectoryExists(moduleName, rootDir)) {
        // load the entity contents
        const eventClassContent = await generateEventContents(eventName, rootDir, broadcastEvent);
        const eventDirPath = eventDirectoryPath(eventName, moduleName, rootDir);
        const eventClassFilePath = eventClassPath(eventName, moduleName, rootDir);

        // create the directory.
        await makeDirectory(eventDirPath);

        // create the files.
        try {
            await writeFile(eventClassFilePath, eventClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await destroyDirectory(eventDirPath, {
                recursive: true,
                force: true,
            });

            return e;
        }

    }
    else {
        throw new Error('Module or Events directory not found.');
    }
}

/**
 * createFactory()
 * 
 * creates an factory.
 * @param factoryName the factory name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */

 export const createFactory = async (factoryName: string, moduleName: string, rootDir: string): Promise<void> => {
    // make sure the module and factories directories exists.
    if (await moduleExists(moduleName, rootDir) && await factoriesDirectoryExists(moduleName, rootDir)) {
        // load the entity contents
        const factoryInterfaceContents = await generateFactoryInterfaceContents(factoryName);
        const factoryClassContent = await generateFactoryContents(factoryName);
        const factoryDirPath = factoryDirectoryPath(factoryName, moduleName, rootDir);
        const factoryInterfaceFilePath = factoryInterfacePath(factoryName, moduleName, rootDir);
        const factoryClassFilePath = factoryClassPath(factoryName, moduleName, rootDir);

        // create the directory.
        await makeDirectory(factoryDirPath);

        // create the files.
        try {
            await writeFile(factoryInterfaceFilePath, factoryInterfaceContents);
            await writeFile(factoryClassFilePath, factoryClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await destroyDirectory(factoryDirPath, {
                recursive: true,
                force: true,
            });

            return e;
        }

    }
    else {
        throw new Error('Module or Entities directory not found.');
    }
}

export const createModule = async (moduleName: string, rootDir: string): Promise<void> => {

    // create the template file.
    const modFileContents = await generateModuleFileContents(moduleName);
    const modDirectoryPath = moduleDirectoryPath(moduleName, rootDir);
    const modFilePath = moduleFilePath(moduleName, rootDir);

    // create the directory.
    if (await pathExists(modDirectoryPath)) {
        throw new Error('Module already exists');
    }

    try {
        await makeDirectory(modDirectoryPath);
    }
    catch(e) {
        // failed to make directory.
        throw new Error("Could not create module directory");
    }

    // write the data
    try {
        await writeFile(modFilePath, modFileContents);
    }
    catch(e) {
        // failed to write data.
        // something went wrong.
        // undo the directory creation.
        await destroyDirectory(modDirectoryPath, {
            recursive: true,
            force: true,
        });
        throw e;
    }
}

/**
 * createEntitiesDirectoryForModule()
 * 
 * creates a entities directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */

export const createEntitiesDirectoryForModule = async (moduleName: string, rootDir: string): Promise<void> => {
    if (!await entitiesDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const entitiesDirectoryPathToCreate = entitiesDirectoryPath(moduleName, rootDir);
        const entitiesWellFilePathToCreate = entitiesWellFilePath(moduleName, rootDir);
        const wellFileContents = await generateWellFileContents('entities');

        // write directory.
        await makeDirectory(entitiesDirectoryPathToCreate);

        try {
            // write well file
            await writeFile(entitiesWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await destroyDirectory(entitiesDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Entities directory for module ${formatClassName(moduleName)} already exists.`);
    }
}

/**
 * createEventsDirectoryForModule()
 * 
 * creates an events directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */

export const createEventsDirectoryForModule = async (moduleName: string, rootDir: string): Promise<void> => {
    if (!await eventsDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const eventsDirectoryPathToCreate = eventsDirectoryPath(moduleName, rootDir);
        const eventsWellFilePathToCreate = eventsWellFilePath(moduleName, rootDir);
        const wellFileContents = await generateWellFileContents('events');

        // write directory.
        await makeDirectory(eventsDirectoryPathToCreate);

        try {
            // write well file
            await writeFile(eventsWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await destroyDirectory(eventsDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Events directory for module ${formatClassName(moduleName)} already exists.`);
    }
}

/**
 * createFactoriesDirectoryForModule()
 * 
 * creates a factories directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */

 export const createFactoriesDirectoryForModule = async (moduleName: string, rootDir: string): Promise<void> => {
    if (!await factoriesDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const factoriesDirectoryPathToCreate = factoriesDirectoryPath(moduleName, rootDir);
        const factoriesWellFilePathToCreate = factoriesWellFilePath(moduleName, rootDir);
        const wellFileContents = await generateWellFileContents('factories');

        // write directory.
        await makeDirectory(factoriesDirectoryPathToCreate);

        try {
            // write well file
            await writeFile(factoriesWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await destroyDirectory(factoriesDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Factories directory for module ${formatClassName(moduleName)} already exists.`);
    }
}

/**
 * createQuery()
 * 
 * creates an query.
 * @param queryName the query name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */

export const createQuery = async (queryName: string, moduleName: string, rootDir: string, identity: boolean = false): Promise<void> => {
    // make sure the module and services directories exists.
    if (await moduleExists(moduleName, rootDir) && await servicesDirectoryExists(moduleName, rootDir)) {
        // load the query contents
        const queryClassContent = await generateQueryContents(queryName);
        const queryDirPath = queryDirectoryPath(queryName, moduleName, rootDir);
        const queryClassFilePath = queryClassPath(queryName, moduleName, rootDir);

        // create the directory.
        await makeDirectory(queryDirPath);

        // create the files.
        try {
            await writeFile(queryClassFilePath, queryClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await destroyDirectory(queryDirPath, {
                recursive: true,
                force: true,
            });

            return e;
        }

    }
    else {
        throw new Error('Module or services directory not found.');
    }
}

/**
 * createRepositoriesDirectoryForModule()
 * 
 * creates a repositories directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */

export const createRepositoriesDirectoryForModule = async (moduleName: string, rootDir: string): Promise<void> => {
    if (!await repositoriesDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const repositoriesDirectoryPathToCreate = repositoriesDirectoryPath(moduleName, rootDir);
        const repositoriesWellFilePathToCreate = repositoriesWellFilePath(moduleName, rootDir);
        const wellFileContents = await generateWellFileContents('repositories');

        // write directory.
        await makeDirectory(repositoriesDirectoryPathToCreate);

        try {
            // write well file
            await writeFile(repositoriesWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await destroyDirectory(repositoriesDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Repositories directory for module ${formatClassName(moduleName)} already exists.`);
    }
}

/**
 * createRepository()
 * 
 * creates an factory.
 * @param repositoryName the repository name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param identity indicates whether the repository is an identity generating repository.
 */

export const createRepository = async (repositoryName: string, moduleName: string, rootDir: string, identity: boolean = false): Promise<void> => {
    // make sure the module and repositories directories exists.
    if (await moduleExists(moduleName, rootDir) && await repositoriesDirectoryExists(moduleName, rootDir)) {
        // load the repository contents
        const repositoryInterfaceContents = await generateRepositoryInterfaceContents(`${repositoryName}`);
        const repositoryClassContent = identity ? await generateIdentityRepositoryContents(repositoryName) : await generateRepositoryContents(repositoryName);
        const repositoryDirPath = repositoryDirectoryPath(repositoryName, moduleName, rootDir);
        const repositoryInterfaceFilePath = repositoryInterfacePath(repositoryName, moduleName, rootDir);
        const repositoryClassFilePath = repositoryClassPath(repositoryName, moduleName, rootDir);

        // create the directory.
        await makeDirectory(repositoryDirPath);

        // create the files.
        try {
            await writeFile(repositoryInterfaceFilePath, repositoryInterfaceContents);
            await writeFile(repositoryClassFilePath, repositoryClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await destroyDirectory(repositoryDirPath, {
                recursive: true,
                force: true,
            });

            return e;
        }

    }
    else {
        throw new Error('Module or Entities directory not found.');
    }
}

/**
 * createServicesDirectoryForModule()
 * 
 * creates a services directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */

export const createServicesDirectoryForModule = async (moduleName: string, rootDir: string): Promise<void> => {
    if (!await servicesDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const servicesDirectoryPathToCreate = servicesDirectoryPath(moduleName, rootDir);
        const servicesWellFilePathToCreate = servicesWellFilePath(moduleName, rootDir);
        const wellFileContents = await generateWellFileContents('services');

        // write directory.
        await makeDirectory(servicesDirectoryPathToCreate);

        try {
            // write well file
            await writeFile(servicesWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await destroyDirectory(servicesDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Services directory for module ${formatClassName(moduleName)} already exists.`);
    }
}

/**
 * createSpecification()
 * 
 * creates an specification
 * @param specificationName the specification name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 */

export const createSpecification = async (specificationName: string, moduleName: string, rootDir: string): Promise<void> => {
    // make sure the module and specifications directories exists.
    if (await moduleExists(moduleName, rootDir) && await specificationsDirectoryExists(moduleName, rootDir)) {
        // load the specification contents
        const specificationClassContent = await generateSpecificationContents(specificationName);
        const specificationClassFilePath = specificationClassPath(specificationName, moduleName, rootDir);

        // create the files.
        try {
            await writeFile(specificationClassFilePath, specificationClassContent);
        }
        catch (e) {
            // failed to write files. Undo the operation.
            await destroyFile(specificationClassFilePath);

            return e;
        }

    }
    else {
        throw new Error('Module or Specifications directory not found.');
    }
}

/**
 * createSpecificationsDirectoryForModule()
 * 
 * creates a specifications directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */

export const createSpecificationsDirectoryForModule = async (moduleName: string, rootDir: string): Promise<void> => {
    if (!await specificationsDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const specificationsDirectoryPathToCreate = specificationsDirectoryPath(moduleName, rootDir);
        const specificationsWellFilePathToCreate = specificationsWellFilePath(moduleName, rootDir);
        const wellFileContents = await generateWellFileContents('specifications');

        // write directory.
        await makeDirectory(specificationsDirectoryPathToCreate);

        try {
            // write well file
            await writeFile(specificationsWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await destroyDirectory(specificationsDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Specifications directory for module ${formatClassName(moduleName)} already exists.`);
    }
}

/**
 * createValuesDirectoryForModule()
 * 
 * creates a values directory for the specified module.
 * @param moduleName the module name
 * @param rootDir the root directory.
 */

export const createValuesDirectoryForModule = async (moduleName: string, rootDir: string): Promise<void> => {
    if (!await valuesDirectoryExists(moduleName, rootDir)) {
        // prepare the directory information.
        const valuesDirectoryPathToCreate = valuesDirectoryPath(moduleName, rootDir);
        const valuesWellFilePathToCreate = valuesWellFilePath(moduleName, rootDir);
        const wellFileContents = await generateWellFileContents('values');

        // write directory.
        await makeDirectory(valuesDirectoryPathToCreate);

        try {
            // write well file
            await writeFile(valuesWellFilePathToCreate, wellFileContents);
        }
        catch (e) {
            // failed to create the well file.
            await destroyDirectory(valuesDirectoryPathToCreate, {
                recursive: true,
                force: true,
            });
            throw e;
        }
    }
    else {
        // The directory already exists.
        throw new Error(`Values directory for module ${formatClassName(moduleName)} already exists.`);
    }
}

/**
 * createValue()
 * 
 * creates a value object.
 * @param valueName the value name.
 * @param moduleName the module name.
 * @param rootDir the root directory.
 * @param identifier a flag to indicate whether the value is to be used as an identifier.
 */

export const createValue = async (valueName: string, moduleName: string, rootDir: string, identifier: boolean = false): Promise<void> => {
    // make sure the module and values directories exists.
    if (await moduleExists(moduleName, rootDir) && await valuesDirectoryExists(moduleName, rootDir)) {
        // load the value contents
        const valueInterfaceContents = identifier ? await generateIdentifierInterfaceContents(valueName) : await generateInterfaceContents(valueName);
        const valueClassContent = identifier ? await generateIdentifierValueContents(valueName) : await generateValueContents(valueName);
        const valueDirPath = valueObjectDirectoryPath(valueName, moduleName, rootDir);
        const valueInterfaceFilePath = valueInterfacePath(valueName, moduleName, rootDir);
        const valueClassFilePath = valueClassPath(valueName, moduleName, rootDir);

        // create the directory.
        await makeDirectory(valueDirPath);

        // create the files.
        try {
            await writeFile(valueInterfaceFilePath, valueInterfaceContents);
            await writeFile(valueClassFilePath, valueClassContent);
        }
        catch(e) {
            // failed to write files. Undo the operation.
            await destroyDirectory(valueDirPath, {
                recursive: true,
                force: true,
            });

            return e;
        }

    }
    else {
        throw new Error('Module or Values directory not found.');
    }
}

/**
 * domconfigPath()
 * 
 * gets the path to the domconfig.json file.
 * @param rootDir the root directory.
 * @returns the path to the domconfig.json file.
 */

export const domconfigPath = (rootDir: string): string => {
    return Path.resolve(rootDir, 'domconfig.json');
}

/**
 * dtoClassPath()
 * 
 * gets the path to the class file of the specified dto name, in the specified module.
 * @param dtoName the dto name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */

export const dtoClassPath = (dtoName: string, module: string, rootDir: string): string => {
    return Path.resolve(dtosDirectoryPath(module, rootDir), `${formatDirectoryOrFileName(dtoName)}.data.ts`);
}

/**
 * dtoExists()
 * 
 * determines if the specified dto exists in the specified module.
 * @param dtoName the dto name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns 
 */

export const dtoExists = async (dtoName: string, moduleName: string, rootDir: string): Promise<boolean> => {
    return await pathExists(dtoClassPath(dtoName, moduleName, rootDir));
}

/**
 * dtosDirectoryExists()
 * 
 * determines if the dtos directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the values directory exists for the specified module. FALSE otherwise.
 */

export const dtosDirectoryExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = dtosWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * dtosDirectoryPath()
 * 
 * gets the path to the dtos directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the factories directory for that module.
 */

export const dtosDirectoryPath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(srcDirectoryPath(rootDir), formatDirectoryOrFileName(moduleName), 'data');
}

/**
 * dtosWellFileExists()
 * 
 * determines if the dtos well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the values well exists. FALSE otehrwise.
 */

export const dtosWellFileExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = dtosWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * dtosWellFilePath()
 * 
 * gets the path for the dtos well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */

export const dtosWellFilePath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(dtosDirectoryPath(moduleName, rootDir), 'data.well.ts');
}

/**
 * eventStorePath()
 * 
 * gets the event store path.
 * @param domainName the domain name.
 * @param rootDir the root directory of the project.
 * @returns 
 */

export const eventStorePath = (domainName: string, rootDir: string): string => {
    return Path.resolve(srcDirectoryPath(rootDir), formatEventStoreFileName(domainName));
}

/**
 * entityClassPath()
 * 
 * gets the path to the class file of the specified entity name, in the specified module.
 * @param entityName the value name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */

export const entityClassPath = (entityName: string, module: string, rootDir: string): string => {
    return Path.resolve(entityDirectoryPath(entityName, module, rootDir), `${formatDirectoryOrFileName(entityName)}.ts`);
}

/**
 * entitiesDirectoryExists()
 * 
 * determines if the entitiess directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the values directory exists for the specified module. FALSE otherwise.
 */

export const entitiesDirectoryExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = entitiesWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * entityExists()
 * 
 * determines if the specified entity exists in the specified module.
 * @param entityName the entity name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns 
 */

export const entityExists = async (entityName: string, moduleName: string, rootDir: string): Promise<boolean> => {
    return await pathExists(entityDirectoryPath(entityName, moduleName, rootDir));
}

/**
 * entityDirectoryPath()
 * 
 * gets the path to the  entity directory for the specified entity and module.
 * @param entityName the entity name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the entity object directory.
 */

export const entityDirectoryPath = (entityName: string, module: string, rootDir: string): string => {
    return Path.resolve(entitiesDirectoryPath(module, rootDir), formatDirectoryOrFileName(entityName));
}

/**
 * entitiesDirectoryPath()
 * 
 * gets the path to the entities directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the entities directory for that module.
 */

export const entitiesDirectoryPath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(srcDirectoryPath(rootDir), formatDirectoryOrFileName(moduleName), 'entities');
}

/**
 * entitiesInterfacePath()
 * 
 * gets the path to the interface file of the specified entity name, in the specified module.
 * @param entityName the entity name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */

export const entityInterfacePath = (entityName: string, module: string, rootDir: string): string => {
    return Path.resolve(entityDirectoryPath(entityName, module, rootDir), `${formatDirectoryOrFileName(entityName)}.interface.ts`);
}

/**
 * entitiesWellFileExists()
 * 
 * determines if the entities well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the entities well exists. FALSE otehrwise.
 */

export const entitiesWellFileExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = entitiesWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * entitiesWellFilePath()
 * 
 * gets the path for the entities well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */

export const entitiesWellFilePath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(entitiesDirectoryPath(moduleName, rootDir), 'entities.well.ts');
}

/**
 * evemtClassPath()
 * 
 * gets the path to the class file of the specified event name, in the specified module.
 * @param evmtName the commandy name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */

export const eventClassPath = (eventName: string, module: string, rootDir: string): string => {
    return Path.resolve(eventDirectoryPath(eventName, module, rootDir), `${formatDirectoryOrFileName(eventName)}.event.ts`);
}

/**
 * eventDirectoryPath()
 * 
 * gets the path to the events directory for the specified command and module.
 * @param eventName the event name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the repository directory.
 */

export const eventDirectoryPath = (eventName: string, module: string, rootDir: string): string => {
    return Path.resolve(eventsDirectoryPath(module, rootDir), `${formatDirectoryOrFileName(eventName)}-event`);
}

/**
 * eventExists()
 * 
 * determines if the specified event exists in the specified module.
 * @param eventName the event name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns 
 */

export const eventExists = async (eventName: string, moduleName: string, rootDir: string): Promise<boolean> => {
    return await pathExists(eventDirectoryPath(eventName, moduleName, rootDir));
}

/**
 * eventsDirectoryExists()
 * 
 * determines if the events directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the values directory exists for the specified module. FALSE otherwise.
 */

export const eventsDirectoryExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = eventsWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * eventsDirectoryPath()
 * 
 * gets the path to the events directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the factories directory for that module.
 */

export const eventsDirectoryPath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(srcDirectoryPath(rootDir), formatDirectoryOrFileName(moduleName), 'events');
}

/**
 * eventsWellFileExists()
 * 
 * determines if the events well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the values well exists. FALSE otehrwise.
 */

export const eventsWellFileExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = eventsWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * eventsWellFilePath()
 * 
 * gets the path for the events well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */

export const eventsWellFilePath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(eventsDirectoryPath(moduleName, rootDir), 'events.well.ts');
}

/**
 * exposeAggregate()
 * 
 * adds the specified aggregate to the module's well file.
 * @param aggregateName the name of the aggregate to export.
 * @param moduleName the module where the value resides.
 * @param rootDir the project root directory.
 */

 export const exposeAggregate = async (aggregateName: string, moduleName: string, rootDir: string): Promise<void> => {
    if (await moduleExists(moduleName, rootDir) && await aggregatesWellFileExists(moduleName, rootDir) && await aggregateExists(aggregateName, moduleName, rootDir)) {
        // data
        const wellFilePath = aggregatesWellFilePath(moduleName, rootDir);
        const patherizedAggregateName = formatDirectoryOrFileName(aggregateName);
        const exportLine = `\nexport * from './${patherizedAggregateName}/${patherizedAggregateName}.interface';\nexport * from './${patherizedAggregateName}/${patherizedAggregateName}';`;

        // append the module file.
        if (!await fileContains(wellFilePath, exportLine)) {
            await appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find Module or Aggregates directory.');
    }
}

/**
 * exposeAggregatesWell()
 * 
 * exposes the aggregates well to the module.
 * @param moduleName the name of the module who's 
 * @param rootDir the project root directory.
 */

 export const exposeAggregatesWell = async (moduleName: string, rootDir: string): Promise<void> => {

    if (await moduleExists(moduleName, rootDir) && await aggregatesWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './aggregates/aggregates.well';`;
    
        // append the module file.
        if (!await fileContains(modulePath, exportLine)) {
            await appendFile(modulePath, exportLine);;
        }
    }
    else {
        throw new Error('Could not find module or Aggregates directory.');
    }
}

/**
 * exposeCommand()
 * 
 * adds the specified command to the module's well file.
 * @param commandName the name of the repository to export.
 * @param moduleName the module where the value resides.
 * @param rootDir the project root directory.
 */

export const exposeCommand = async (commandName: string, moduleName: string, rootDir: string): Promise<void> => {
    if (await moduleExists(moduleName, rootDir) && await servicesWellFileExists(moduleName, rootDir) && await commandExists(commandName, moduleName, rootDir)) {
        // data
        const wellFilePath = servicesWellFilePath(moduleName, rootDir);
        const patherizedCommandName = formatDirectoryOrFileName(commandName);
        const exportLine = `\nexport * from './${patherizedCommandName}-command/${patherizedCommandName}.command';`;

        // append the module file.
        if (!await fileContains(wellFilePath, exportLine)) {
            await appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or command directory.');
    }
}

/**
 * exposeDto()
 * 
 * adds the specified dto to the module's well file.
 * @param dtoName the name of the dto to export.
 * @param moduleName the module where the value resides.
 * @param rootDir the project root directory.
 */

export const exposeDto = async (dtoName: string, moduleName: string, rootDir: string): Promise<void> => {
    if (await moduleExists(moduleName, rootDir) && await dtosWellFileExists(moduleName, rootDir) && await dtoExists(dtoName, moduleName, rootDir)) {
        // data
        const wellFilePath = dtosWellFilePath(moduleName, rootDir);
        const patherizedDtoName = formatDirectoryOrFileName(dtoName);
        const exportLine = `\nexport * from './${patherizedDtoName}.data';`;

        // append the module file.
        if (!await fileContains(wellFilePath, exportLine)) {
            await appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Data directory.');
    }
}

/**
 * exposeDtosWell()
 * 
 * exposes the dtos well to the module.
 * @param moduleName the name of the module who's 
 * @param rootDir the project root directory.
 */

export const exposeDtosWell = async (moduleName: string, rootDir: string): Promise<void> => {

    if (await moduleExists(moduleName, rootDir) && await dtosWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './data/data.well';`;

        // append the module file.
        if (!await fileContains(modulePath, exportLine)) {
            await appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Data directory.');
    }
}

/**
 * exposeEntitiesWell()
 * 
 * exposes the entities well to the module.
 * @param moduleName the name of the module who's 
 * @param rootDir the project root directory.
 */

export const exposeEntitiesWell = async (moduleName: string, rootDir: string): Promise<void> => {

    if (await moduleExists(moduleName, rootDir) && await valuesWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './entities/entities.well';`;

        // append the module file.
        if (!await fileContains(modulePath, exportLine)) {
            await appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Entities directory.');
    }
}

/**
 * exposeEntity()
 * 
 * adds the specified entity to the module's well file.
 * @param entityName the name of the entity to export.
 * @param moduleName the module where the value resides.
 * @param rootDir the project root directory.
 */

export const exposeEntity = async (entityName: string, moduleName: string, rootDir: string): Promise<void> => {
    if (await moduleExists(moduleName, rootDir) && await entitiesWellFileExists(moduleName, rootDir) && await entityExists(entityName, moduleName, rootDir)) {
        // data
        const wellFilePath = entitiesWellFilePath(moduleName, rootDir);
        const patherizedEntityName = formatDirectoryOrFileName(entityName);
        const exportLine = `\nexport * from './${patherizedEntityName}/${patherizedEntityName}.interface';\nexport * from './${patherizedEntityName}/${patherizedEntityName}';`;

        // append the module file.
        if (!await fileContains(wellFilePath, exportLine)) {
            await appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find Module or Entities directory.');
    }
}

/**
 * exposeEvent()
 * 
 * adds the specified event to the module's well file.
 * @param evemtName the name of the evemt to export.
 * @param moduleName the module where the value resides.
 * @param rootDir the project root directory.
 */

export const exposeEvent = async (eventName: string, moduleName: string, rootDir: string): Promise<void> => {
    if (await moduleExists(moduleName, rootDir) && await eventsWellFileExists(moduleName, rootDir) && await eventExists(eventName, moduleName, rootDir)) {
        // data
        const wellFilePath = eventsWellFilePath(moduleName, rootDir);
        const patherizedEventName = formatDirectoryOrFileName(eventName);
        const exportLine = `\nexport * from './${patherizedEventName}-event/${patherizedEventName}.event';`;

        // append the module file.
        if (!await fileContains(wellFilePath, exportLine)) {
            await appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or event directory.');
    }
}

/**
 * exposeEventsWell()
 * 
 * exposes the events well to the module.
 * @param moduleName the name of the module who's 
 * @param rootDir the project root directory.
 */

export const exposeEventsWell = async (moduleName: string, rootDir: string): Promise<void> => {

    if (await moduleExists(moduleName, rootDir) && await eventsWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './events/events.well';`;

        // append the module file.
        if (!await fileContains(modulePath, exportLine)) {
            await appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Events directory.');
    }
}

/**
 * exposeFactory()
 * 
 * adds the specified factory to the module's well file.
 * @param factoryName the name of the factory to export.
 * @param moduleName the module where the value resides.
 * @param rootDir the project root directory.
 */

 export const exposeFactory  = async (factoryName: string, moduleName: string, rootDir: string): Promise<void> => {
    if (await moduleExists(moduleName, rootDir) && await factoriesWellFileExists(moduleName, rootDir) && await factoryExists(factoryName, moduleName, rootDir)) {
        // data
        const wellFilePath = factoriesWellFilePath(moduleName, rootDir);
        const patherizedFactoryName = formatDirectoryOrFileName(factoryName);
        const exportLine = `\nexport * from './${patherizedFactoryName}-factory/${patherizedFactoryName}-factory.interface';\nexport * from './${patherizedFactoryName}-factory/${patherizedFactoryName}.factory';`;

        // append the module file.
        if (!await fileContains(wellFilePath, exportLine)) {
            await appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Factories directory.');
    }
}

/**
 * exposeFactoriesWell()
 * 
 * exposes the factories well to the module.
 * @param moduleName the name of the module who's 
 * @param rootDir the project root directory.
 */

 export const exposeFactoriesWell = async (moduleName: string, rootDir: string): Promise<void> => {

    if (await moduleExists(moduleName, rootDir) && await factoriesWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './factories/factories.well';`;
    
        // append the module file.
        if (!await fileContains(modulePath, exportLine)) {
            await appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Factories directory.');
    }
}

/**
 * exposeModule()
 * 
 * exposes a module.
 * @param moduleName the module to expose
 * @param rootDir the root directory of the project.
 */

export const exposeModule = async (moduleName: string, rootDir: string = process.cwd()): Promise<void> => {

    if (await moduleExists(moduleName, rootDir)) {
        // module data
        const domconfig = await loadDomConfigFileContents(rootDir);
        const indexFilePath = indexPath(domconfig.name, rootDir);
        const moduleDirName = formatDirectoryOrFileName(moduleName);
        const exportLine = `\nexport * from './src/${moduleDirName}/${moduleDirName}.module';`;

        // append the index file.
        if (!await fileContains(indexFilePath, exportLine)) {
            await appendFile(indexFilePath, exportLine);
        }
    }
    else {
        throw new Error('Module not found.');
    }
}

/**
 * exposeQuery()
 * 
 * adds the specified query to the module's well file.
 * @param queryName the name of the query to export.
 * @param moduleName the module where the value resides.
 * @param rootDir the project root directory.
 */

export const exposeQuery = async (queryName: string, moduleName: string, rootDir: string): Promise<void> => {
    if (await moduleExists(moduleName, rootDir) && await servicesWellFileExists(moduleName, rootDir) && await queryExists(queryName, moduleName, rootDir)) {
        // data
        const wellFilePath = servicesWellFilePath(moduleName, rootDir);
        const patherizedQueryName = formatDirectoryOrFileName(queryName);
        const exportLine = `\nexport * from './${patherizedQueryName}-query/${patherizedQueryName}.query';`;

        // append the module file.
        if (!await fileContains(wellFilePath, exportLine)) {
            await appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or query directory.');
    }
}

/**
 * exposeRepositoriesWell()
 * 
 * exposes the repositories well to the module.
 * @param moduleName the name of the module  
 * @param rootDir the project root directory.
 */

export const exposeRepositoriesWell = async (moduleName: string, rootDir: string): Promise<void> => {

    if (await moduleExists(moduleName, rootDir) && await repositoriesWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './repositories/repositories.well';`;

        // append the module file.
        if (!await fileContains(modulePath, exportLine)) {
            await appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or repositories directory.');
    }
}

/**
 * exposeRepository()
 * 
 * adds the specified repository to the module's well file.
 * @param repositoryName the name of the repository to export.
 * @param moduleName the module where the value resides.
 * @param rootDir the project root directory.
 */

export const exposeRepository = async (repositoryName: string, moduleName: string, rootDir: string): Promise<void> => {
    if (await moduleExists(moduleName, rootDir) && await repositoriesWellFileExists(moduleName, rootDir) && await repositoryExists(repositoryName, moduleName, rootDir)) {
        // data
        const wellFilePath = repositoriesWellFilePath(moduleName, rootDir);
        const patherizedRepositoryName = formatDirectoryOrFileName(repositoryName);
        const exportLine = `\nexport * from './${patherizedRepositoryName}-repository/${patherizedRepositoryName}-repository.interface';\nexport * from './${patherizedRepositoryName}-repository/${patherizedRepositoryName}.repository';`;

        // append the module file.
        if (!await fileContains(wellFilePath, exportLine)) {
            await appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or repositories directory.');
    }
}

/**
 * exposeSpecification()
 * 
 * adds the specified specification to the module's well file.
 * @param specificationName the name of the specificatioin to export.
 * @param moduleName the module where the value resides.
 * @param rootDir the project root directory.
 */

export const exposeSpecification = async (specificationName: string, moduleName: string, rootDir: string): Promise<void> => {
    if (await moduleExists(moduleName, rootDir) && await specificationsWellFileExists(moduleName, rootDir) && await specificationExists(specificationName, moduleName, rootDir)) {
        // data
        const wellFilePath = specificationsWellFilePath(moduleName, rootDir);
        const patherizedSpecificationName = formatDirectoryOrFileName(specificationName);
        const exportLine = `\nexport * from './${patherizedSpecificationName}.specification';`;

        // append the module file.
        if (!await fileContains(wellFilePath, exportLine)) {
            await appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or specification directory.');
    }
}


/**
 * exposeServicesWell()
 * 
 * exposes the services well to the module.
 * @param moduleName the name of the module who's 
 * @param rootDir the project root directory.
 */

export const exposeServicesWell = async (moduleName: string, rootDir: string): Promise<void> => {

    if (await moduleExists(moduleName, rootDir) && await servicesWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './services/services.well';`;

        // append the module file.
        if (!await fileContains(modulePath, exportLine)) {
            await appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Services directory.');
    }
}

/**
 * exposeSpecificationsWell()
 * 
 * exposes the specifications well to the module.
 * @param moduleName the name of the module who's 
 * @param rootDir the project root directory.
 */

export const exposeSpecificationsWell = async (moduleName: string, rootDir: string): Promise<void> => {

    if (await moduleExists(moduleName, rootDir) && await specificationsWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './specifications/specifications.well';`;

        // append the module file.
        if (!await fileContains(modulePath, exportLine)) {
            await appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Events directory.');
    }
}


/**
 * exposeValue()
 * 
 * adds the specified value to the module's well file.
 * @param valueName the name of the value to export.
 * @param moduleName the module where the value resides.
 * @param rootDir the project root directory.
 */

export const exposeValue = async (valueName: string, moduleName: string, rootDir: string): Promise<void> => {
    if (await moduleExists(moduleName, rootDir) && await valuesWellFileExists(moduleName, rootDir) && await valueExists(valueName, moduleName, rootDir)) {
        // data
        const wellFilePath = valuesWellFilePath(moduleName, rootDir);
        const patherizedValueName = formatDirectoryOrFileName(valueName);
        const exportLine = `\nexport * from './${patherizedValueName}/${patherizedValueName}.interface';\nexport * from './${patherizedValueName}/${patherizedValueName}';`;

        // append the module file.
        if (!await fileContains(wellFilePath, exportLine)) {
            await appendFile(wellFilePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Values directory.');
    }
}

/**
 * exposeValuesWell()
 * 
 * exposes the values well to the module.
 * @param moduleName the name of the module who's 
 * @param rootDir the project root directory.
 */

export const exposeValuesWell = async (moduleName: string, rootDir: string): Promise<void> => {

    if (await moduleExists(moduleName, rootDir) && await valuesWellFileExists(moduleName, rootDir)) {
        // module data
        const modulePath = moduleFilePath(moduleName, rootDir);
        const exportLine = `\nexport * from './values/values.well';`;
    
        // append the module file.
        if (!await fileContains(modulePath, exportLine)) {
            await appendFile(modulePath, exportLine);
        }
    }
    else {
        throw new Error('Could not find module or Values directory.');
    }
}

/**
 * factoriesDirectoryExists()
 * 
 * determines if the factories directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the values directory exists for the specified module. FALSE otherwise.
 */

 export const factoriesDirectoryExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = factoriesWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * factoriesDirectoryPath()
 * 
 * gets the path to the factories directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the factories directory for that module.
 */

 export const factoriesDirectoryPath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(srcDirectoryPath(rootDir), formatDirectoryOrFileName(moduleName), 'factories');
}

/**
 * factoriesWellFileExists()
 * 
 * determines if the factories well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the values well exists. FALSE otehrwise.
 */

 export const factoriesWellFileExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = factoriesWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * factoriesWellFilePath()
 * 
 * gets the path for the value well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */

 export const factoriesWellFilePath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(factoriesDirectoryPath(moduleName, rootDir), 'factories.well.ts');
}

/**
 * factoryClassPath()
 * 
 * gets the path to the class file of the specified factory name, in the specified module.
 * @param factoryName the factory name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */

 export const factoryClassPath = (factoryName: string, module: string, rootDir: string): string => {
    return Path.resolve(factoryDirectoryPath(factoryName, module, rootDir), `${formatDirectoryOrFileName(factoryName)}.factory.ts`);
}

/**
 * factoryDirectoryPath()
 * 
 * gets the path to the factory directory for the specified factory and module.
 * @param factoryName the factory name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the value object directory.
 */

 export const factoryDirectoryPath = (factoryName: string, module: string, rootDir: string): string => {
    return Path.resolve(factoriesDirectoryPath(module, rootDir), `${formatDirectoryOrFileName(factoryName)}-factory`);
}

/**
 * factoryExists()
 * 
 * determines if the specified value exists in the specified module.
 * @param factoryName the factory name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns 
 */

 export const factoryExists = async (factoryName: string, moduleName: string, rootDir: string): Promise<boolean> => {
    return await pathExists(factoryDirectoryPath(factoryName, moduleName, rootDir));
}

/**
 * factoryInterfacePath()
 * 
 * gets the path to the interface file of the specified factory name, in the specified module.
 * @param factoryName the factory name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */

 export const factoryInterfacePath = (factoryName: string, module: string, rootDir: string): string => {
    return Path.resolve(factoryDirectoryPath(factoryName, module, rootDir), `${formatDirectoryOrFileName(factoryName)}-factory.interface.ts`);
}

/**
 * fileContains()
 * 
 * determines if the file contains the contents.
 * @param path the path of the file to check.
 * @param contents the contents to check for
 * @returns TRUE if the the file contains the contents. FALSE otherwise.
 */

export const fileContains = async (path: string, contents: string): Promise<boolean> => {
    const file = await readFile(path);
    return file.toString().includes(contents);
}

/**
 * getAbsolutePath()
 * 
 * gets the absolute path from a path segment.
 * @param segment The path segment.
 * @returns the absolute path.
 */

export const getAbsolutePath = (segment: string): string => {
    return Path.resolve(process.cwd(), segment);
}

/**
 * getDomconfigPath()
 * 
 * gets the path to the domconfig.json file.
 * @param rootDir the domain root directory.
 * @returns the path to the domconfig.json file.
 */

export const getDomconfigFilePath = (rootDir: string): string => {
    return Path.resolve(rootDir, 'domconfig.json');
}

/**
 * indexPath()
 * 
 * gets the index path.
 * @param domainName the domain name
 * @param rootDir the root of the project
 * @returns the index file path.
 */

export const indexPath = (domainName: string, rootDir: string): string => {
    return Path.resolve(rootDir, `${formatDirectoryOrFileName(domainName)}.ts`);
}

/**
 * isDomeniereProject()
 * 
 * determines if the specified path is a Domeniere Project.
 * @param rootDir the path to test.
 * @returns TRUE if the path is a domeniere project root.
 */

export const isDomeniereProject = async (rootDir: string): Promise<boolean> => {

    if (await isDirectory(rootDir)) {
        const domConfigPath = getDomconfigFilePath(rootDir);
        return await pathExists(domConfigPath);
    }
    
    return false;
}

/**
 * loadDomConfigFileContents()
 * 
 * loads the domconfig.json file contents.
 * @param rootDir the path to load.
 * @returns the loaded DOMCONFIG contents.
 */

export const loadDomConfigFileContents = async (rootDir: string): Promise<DomConfig> => {
    // make sure that the DomConfig is what the path is pointing to.
    try {
        const domConfigPath = getDomconfigFilePath(rootDir);

        if (await pathExists(domConfigPath)) {
            // parse the file.
            const contents = await readFile(domConfigPath);
            const config: DomConfig = JSON.parse(contents.toString());
            return config;
        }
        else {
            throw new Error(`domconfig.json not found`)
        }
    }
    catch(e) {
        throw new Error ((e as Error).message);
    }
}

/**
 * moduleDirectoryPath()
 * 
 * gets the path to the specified module directory.
 * @param moduleName the module name.
 * @param rootDir the root directory of the project. It defaults to the current working directory.
 * @returns the path to the specified module.
 */

export const moduleDirectoryPath = (moduleName: string, rootDir: string = process.cwd()): string => {
    return Path.resolve(rootDir, 'src', formatDirectoryOrFileName(moduleName));
}

/**
 * moduleExists()
 * 
 * determines if the module exists.
 * @param moduleName the module to test
 * @param rootDir thr root directory to search.
 * @returns TRUE if the module exists. FALSE otherwise.
 */

export const moduleExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const modulePath = moduleFilePath(moduleName, rootDir);
    return await pathExists(modulePath);
}

/**
 * moduleFilePath()
 * 
 * gets the path to the specified module file.
 * @param moduleName the module name.
 * @param rootDir the root directory of the project. It defaults to the current working directory.
 * @returns the path to the specified module.
 */

export const moduleFilePath = (moduleName: string, rootDir: string = process.cwd()): string => {
    return Path.resolve(moduleDirectoryPath(moduleName, rootDir), formatModuleFileName(moduleName));
}

/**
 * packagePath()
 * 
 * gets the path to the package.json file from the root.
 * @param rootDir the root directory.
 * @returns the path to the package.json file.
 */

export const packagePath = (rootDir: string): string => {
    return Path.resolve(rootDir, 'package.json');
}


/**
 * pathExists()
 * 
 * determines if the specified path exists.
 * @param path the path to test.
 * @returns TRUE if the directory exists. FALSE otherwise.
 */

export const pathExists = async (path: string): Promise<boolean> => {

    try {
        await dirExists(path);
        return true;
    }
    catch (e) {
        return false;
    }
}

/**
 * queryClassPath()
 * 
 * gets the path to the class file of the specified query name, in the specified module.
 * @param queryName the query name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */

export const queryClassPath = (queryName: string, module: string, rootDir: string): string => {
    return Path.resolve(queryDirectoryPath(queryName, module, rootDir), `${formatDirectoryOrFileName(queryName)}.query.ts`);
}

/**
 * queryDirectoryPath()
 * 
 * gets the path to the query directory for the specified command and module.
 * @param queryName the command name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the repository directory.
 */

export const queryDirectoryPath = (queryName: string, module: string, rootDir: string): string => {
    return Path.resolve(servicesDirectoryPath(module, rootDir), `${formatDirectoryOrFileName(queryName)}-query`);
}

/**
 * queryExists()
 * 
 * determines if the specified query exists in the specified module.
 * @param queryName the query name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns 
 */

export const queryExists = async (queryName: string, moduleName: string, rootDir: string): Promise<boolean> => {
    return await pathExists(queryDirectoryPath(queryName, moduleName, rootDir));
}

/**
 * repositoriesDirectoryExists()
 * 
 * determines if the repositories directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the values directory exists for the specified module. FALSE otherwise.
 */

export const repositoriesDirectoryExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = repositoriesWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}


/**
 * repositoriesDirectoryPath()
 * 
 * gets the path to the repositories directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the factories directory for that module.
 */

export const repositoriesDirectoryPath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(srcDirectoryPath(rootDir), formatDirectoryOrFileName(moduleName), 'repositories');
}

/**
 * repositoriesWellFileExists()
 * 
 * determines if the repositories well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the values well exists. FALSE otehrwise.
 */

export const repositoriesWellFileExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = repositoriesWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * repositoriesWellFilePath()
 * 
 * gets the path for the repositories well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */

export const repositoriesWellFilePath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(repositoriesDirectoryPath(moduleName, rootDir), 'repositories.well.ts');
}

/**
 * repositoryClassPath()
 * 
 * gets the path to the class file of the specified repository name, in the specified module.
 * @param repositoryName the repository name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */

export const repositoryClassPath = (repositoryName: string, module: string, rootDir: string): string => {
    return Path.resolve(repositoryDirectoryPath(repositoryName, module, rootDir), `${formatDirectoryOrFileName(repositoryName)}.repository.ts`);
}

/**
 * repositoryDirectoryPath()
 * 
 * gets the path to the repository directory for the specified repository and module.
 * @param repositoryName the repository name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the repository directory.
 */

export const repositoryDirectoryPath = (repositoryName: string, module: string, rootDir: string): string => {
    return Path.resolve(repositoriesDirectoryPath(module, rootDir), `${formatDirectoryOrFileName(repositoryName)}-repository`);
}

/**
 * repositoryExists()
 * 
 * determines if the specified repository exists in the specified module.
 * @param repositoryName the repository name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns 
 */

export const repositoryExists = async (repositoryName: string, moduleName: string, rootDir: string): Promise<boolean> => {
    return await pathExists(repositoryDirectoryPath(repositoryName, moduleName, rootDir));
}

/**
 * repositoryInterfacePath()
 * 
 * gets the path to the interface file of the specified repository name, in the specified module.
 * @param repositoryName the repository name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */

export const repositoryInterfacePath = (repositoryName: string, module: string, rootDir: string): string => {
    return Path.resolve(repositoryDirectoryPath(repositoryName, module, rootDir), `${formatDirectoryOrFileName(repositoryName)}-repository.interface.ts`);
}

/**
 * scaffoldDomainDirectory()
 * 
 * scaffolds a Domeniere domain directory.
 * @param path the path to scaffold. 
 */

export const scaffoldDomainDirectory = async (domainName: string, description: string, author: string, repository: string, license: string, packageManager: PackageManager): Promise<void> => {
    // create the directory.
    const fileNameFormattedDomainName = formatDomainDirectoryName(domainName);
    const rootDirectoryPath = getAbsolutePath(fileNameFormattedDomainName);
    
    try {
        await makeDirectory(rootDirectoryPath);
    }
    catch(e) {
        throw new Error("Could not create domain directory.");
    }

    try {
        // create src directory
        const srcDirectory = srcDirectoryPath(rootDirectoryPath);

        // create <domain-name>.eventstore.ts file in src
        const domainEventStorePath = eventStorePath(domainName, rootDirectoryPath);
        const eventStoreFileContents = await generateEventStoreFileContents(domainName);
        
        // create <domain-name>.api.ts file in src
        const apiPath = apiFilePath(domainName, rootDirectoryPath);
        const apiFileContents = await generateApiFileContents(domainName);

        // create package.json file
        const packageJsonPath = packagePath(rootDirectoryPath);
        const packageJsonContents = await generatePackageJsonFileContents(domainName, description, author, repository, license);

        // create tsconfig file
        const tsconfigFilePath = tsconfigPath(rootDirectoryPath);
        const tsconfigContent = await generateTsconfigFileContents();

        // create domconfig.json
        const domconfigFilePath = domconfigPath(rootDirectoryPath);
        const domconfigContents = await generateDomConfigFileContents(domainName, description, packageManager);

        // create index.ts file
        const indexFilePath = indexPath(domainName, rootDirectoryPath);
        const indexContents = await generateIndexFileContents(domainName);

        // create all the files

        // root directory
        await writeFile(packageJsonPath, packageJsonContents);
        await writeFile(tsconfigFilePath, tsconfigContent);
        await writeFile(domconfigFilePath, domconfigContents);
        await writeFile(indexFilePath, indexContents);

        // src directory
        await makeDirectory(srcDirectory);
        await writeFile(domainEventStorePath, eventStoreFileContents);
        await writeFile(apiPath, apiFileContents);
    }
    catch(e) {
        // something went wrong.
        // undo the directory creation.
        await destroyDirectory(rootDirectoryPath, {
            recursive: true,
            force: true,
        });
        throw e;
    }
}

/**
 * servicesDirectoryExists()
 * 
 * determines if the services directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the values directory exists for the specified module. FALSE otherwise.
 */

export const servicesDirectoryExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = servicesWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}



/**
 * servicesDirectoryPath()
 * 
 * gets the path to the services directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the factories directory for that module.
 */

export const servicesDirectoryPath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(srcDirectoryPath(rootDir), formatDirectoryOrFileName(moduleName), 'services');
}

/**
 * servicesWellFileExists()
 * 
 * determines if the services well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the values well exists. FALSE otehrwise.
 */

export const servicesWellFileExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = servicesWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * servicesWellFilePath()
 * 
 * gets the path for the services well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */

export const servicesWellFilePath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(servicesDirectoryPath(moduleName, rootDir), 'services.well.ts');
}

/**
 * specificationClassPath()
 * 
 * gets the path to the class file of the specified specification name, in the specified module.
 * @param specificationName the commandy name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */

export const specificationClassPath = (specificationName: string, module: string, rootDir: string): string => {
    return Path.resolve(specificationsDirectoryPath(module, rootDir), `${formatDirectoryOrFileName(specificationName)}.specification.ts`);
}

/**
 * specificationDirectoryPath()
 * 
 * gets the path to the specification directory for the specified specification and module.
 * @param specificationName the specification name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the repository directory.
 */

export const specificationDirectoryPath = (specificationName: string, module: string, rootDir: string): string => {
    return Path.resolve(specificationsDirectoryPath(module, rootDir), `${formatDirectoryOrFileName(specificationName)}-specification`);
}

/**
 * specificationExists()
 * 
 * determines if the specified specification exists in the specified module.
 * @param specificationName the specification name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns 
 */

export const specificationExists = async (specificationName: string, moduleName: string, rootDir: string): Promise<boolean> => {
    return await pathExists(specificationClassPath(specificationName, moduleName, rootDir));
}

/**
 * specificationsDirectoryExists()
 * 
 * determines if the specifications directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the values directory exists for the specified module. FALSE otherwise.
 */

export const specificationsDirectoryExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = specificationsWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * specificationsDirectoryPath()
 * 
 * gets the path to the specifications directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the factories directory for that module.
 */

export const specificationsDirectoryPath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(srcDirectoryPath(rootDir), formatDirectoryOrFileName(moduleName), 'specifications');
}

/**
 * specificationsWellFileExists()
 * 
 * determines if the specifications well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the values well exists. FALSE otehrwise.
 */

export const specificationsWellFileExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = specificationsWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * specificationsWellFilePath()
 * 
 * gets the path for the specifications well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */

export const specificationsWellFilePath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(specificationsDirectoryPath(moduleName, rootDir), 'specifications.well.ts');
}

/**
 * srcDirectoryPath()
 * 
 * gets the src directory path starting with the provided root directory.
 * @param rootDir the root directory.
 * @returns the domain src directory path.
 */

export const srcDirectoryPath = (rootDir: string): string => {
    return Path.resolve(rootDir, 'src');
}

/**
 * tsconfigPath()
 * 
 * gets the tsconfig path.
 * @param rootDir the root directory.
 * @returns 
 */

export const tsconfigPath = (rootDir: string): string => {
    return Path.resolve(rootDir, 'tsconfig.json');
}

/**
 * valueClassPath()
 * 
 * gets the path to the class file of the specified value name, in the specified module.
 * @param valueName the value name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the class path.
 */

export const valueClassPath = (valueName: string, module: string, rootDir: string): string => {
    return Path.resolve(valueObjectDirectoryPath(valueName, module, rootDir), `${formatDirectoryOrFileName(valueName)}.ts`);
}

/**
 * valueExists()
 * 
 * determines if the specified value exists in the specified module.
 * @param valueName the value name
 * @param moduleName the module name
 * @param rootDir the root directory.
 * @returns 
 */

export const valueExists = async (valueName: string, moduleName: string, rootDir: string): Promise<boolean> => {
    return await pathExists(valueObjectDirectoryPath(valueName, moduleName, rootDir));
}

/**
 * valueInterfacePath()
 * 
 * gets the path to the interface file of the specified value name, in the specified module.
 * @param valueName the value name
 * @param module the module name.
 * @param rootDir the root directory of the project.
 * @returns the interface path.
 */

export const valueInterfacePath = (valueName: string, module: string, rootDir: string): string => {
    return Path.resolve(valueObjectDirectoryPath(valueName, module, rootDir), `${formatDirectoryOrFileName(valueName)}.interface.ts`);
}

/**
 * valuesDirectoryExists()
 * 
 * determines if the values directory for the specified module exists.
 * @param moduleName moduleName
 * @param rootDir the root directory.
 * @returns TRUE if the values directory exists for the specified module. FALSE otherwise.
 */

export const valuesDirectoryExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = valuesWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * valueWellFileExists()
 * 
 * determines if the values well exists for the specified module.
 * @param moduleName the name of the module to test.
 * @param rootDir the root project directory.
 * @returns TRUE if the values well exists. FALSE otehrwise.
 */

export const valuesWellFileExists = async (moduleName: string, rootDir: string): Promise<boolean> => {
    const dirPath = valuesWellFilePath(moduleName, rootDir);
    return await pathExists(dirPath);
}

/**
 * valuesDirectoryPath()
 * 
 * gets the path to the values directory for the specified module.
 * @param moduleName the module to search in.
 * @param rootDir the root directory.
 * @returns the path to the values directory for that module.
 */

export const valuesDirectoryPath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(srcDirectoryPath(rootDir), formatDirectoryOrFileName(moduleName), 'values');
}

/**
 * valueWellFilePath()
 * 
 * gets the path for the value well.
 * @param moduleName the name of the module.
 * @param rootDir the root directory of the domeniere project.
 */

export const valuesWellFilePath = (moduleName: string, rootDir: string): string => {
    return Path.resolve(valuesDirectoryPath(moduleName, rootDir), 'values.well.ts');
}

/**
 * valueObjectDirectoryPath()
 * 
 * gets the path to the value object directory for the specified value and module.
 * @param valueName the value name
 * @param module the module name
 * @param rootDir the root project directory.
 * @returns the path to the value object directory.
 */

export const valueObjectDirectoryPath = (valueName: string, module: string, rootDir: string): string => {
    return Path.resolve(valuesDirectoryPath(module, rootDir), formatDirectoryOrFileName(valueName));
}