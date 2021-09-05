import * as FileSystem from 'fs';
import Util from 'util';
import { formatDirectoryOrFileName, formatModuleFileName } from './formatter-utils';

// Promisified functions
export const dirExists = Util.promisify(FileSystem.access);
export const makeDirectory = Util.promisify(FileSystem.mkdir);
export const readFile = Util.promisify(FileSystem.readFile);
export const writeFile = Util.promisify(FileSystem.writeFile);
export const appendFile = Util.promisify(FileSystem.appendFile);
export const destroyDirectory = Util.promisify(FileSystem.rm);
export const destroyFile = Util.promisify(FileSystem.unlink);

// custom functions
const getFileInfo = Util.promisify(FileSystem.stat);

/**
 * isDirectory()
 * 
 * determines if a path is a directory.
 * @param path the path to test.
 * @returns TRUE if the path is a directory. FALSE otherwise.
 */

export const isDirectory = async (path: string): Promise<boolean> => {
    const pathInfo = await getFileInfo(path);
    return pathInfo.isDirectory();
}

/**
 * isFile()
 *
 * determines if a path is a file.
 * @param path the path to test.
 * @returns TRUE if the path is a file. FALSE otherwise.
 */

export const isFile = async (path: string): Promise<boolean> => {
    const pathInfo = await getFileInfo(path);
    return pathInfo.isFile();
}