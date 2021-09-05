/// <reference types="node" />
import * as FileSystem from 'fs';
export declare const dirExists: typeof FileSystem.access.__promisify__;
export declare const makeDirectory: typeof FileSystem.mkdir.__promisify__;
export declare const readFile: typeof FileSystem.readFile.__promisify__;
export declare const writeFile: typeof FileSystem.writeFile.__promisify__;
export declare const appendFile: typeof FileSystem.appendFile.__promisify__;
export declare const destroyDirectory: typeof FileSystem.rm.__promisify__;
export declare const destroyFile: typeof FileSystem.unlink.__promisify__;
/**
 * isDirectory()
 *
 * determines if a path is a directory.
 * @param path the path to test.
 * @returns TRUE if the path is a directory. FALSE otherwise.
 */
export declare const isDirectory: (path: string) => Promise<boolean>;
/**
 * isFile()
 *
 * determines if a path is a file.
 * @param path the path to test.
 * @returns TRUE if the path is a file. FALSE otherwise.
 */
export declare const isFile: (path: string) => Promise<boolean>;
//# sourceMappingURL=fs-utils.d.ts.map