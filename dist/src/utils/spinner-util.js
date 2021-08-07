"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopSpinnerWithFailure = exports.stopSpinnerWithSuccess = exports.startSpinner = void 0;
const ora_1 = __importDefault(require("ora"));
// The spinner instance.
let spinner = null;
/**
 * startSpinner()
 *
 * starts the spinner.
 * @param message the message to display.
 */
const startSpinner = (message) => {
    spinner = ora_1.default({}).start(message);
};
exports.startSpinner = startSpinner;
/**
 * stopSpinnerWithSuccess()
 *
 * stops the spinner with a success status.
 * @param message the message to display.
 */
const stopSpinnerWithSuccess = (message) => {
    if ((spinner !== null)) {
        spinner = spinner.succeed(message);
        spinner = null;
    }
};
exports.stopSpinnerWithSuccess = stopSpinnerWithSuccess;
/**
 * stopSpinnerWithFailure()
 *
 * stops the spinner with a failure.
 * @param message the message to display.
 */
const stopSpinnerWithFailure = (message) => {
    if ((spinner !== null)) {
        spinner = spinner.fail(message);
        spinner = null;
    }
};
exports.stopSpinnerWithFailure = stopSpinnerWithFailure;
