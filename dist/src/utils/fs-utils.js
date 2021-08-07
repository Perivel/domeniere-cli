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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFile = exports.isDirectory = exports.destroyFile = exports.destroyDirectory = exports.appendFile = exports.writeFile = exports.readFile = exports.makeDirectory = exports.dirExists = void 0;
const FileSystem = __importStar(require("fs"));
const util_1 = __importDefault(require("util"));
// Promisified functions
exports.dirExists = util_1.default.promisify(FileSystem.access);
exports.makeDirectory = util_1.default.promisify(FileSystem.mkdir);
exports.readFile = util_1.default.promisify(FileSystem.readFile);
exports.writeFile = util_1.default.promisify(FileSystem.writeFile);
exports.appendFile = util_1.default.promisify(FileSystem.appendFile);
exports.destroyDirectory = util_1.default.promisify(FileSystem.rm);
exports.destroyFile = util_1.default.promisify(FileSystem.unlink);
// custom functions
const getFileInfo = util_1.default.promisify(FileSystem.stat);
/**
 * isDirectory()
 *
 * determines if a path is a directory.
 * @param path the path to test.
 * @returns TRUE if the path is a directory. FALSE otherwise.
 */
const isDirectory = async (path) => {
    const pathInfo = await getFileInfo(path);
    return pathInfo.isDirectory();
};
exports.isDirectory = isDirectory;
/**
 * isFile()
 *
 * determines if a path is a file.
 * @param path the path to test.
 * @returns TRUE if the path is a file. FALSE otherwise.
 */
const isFile = async (path) => {
    const pathInfo = await getFileInfo(path);
    return pathInfo.isFile();
};
exports.isFile = isFile;
