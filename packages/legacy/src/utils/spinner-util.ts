import Ora from 'ora';

// The spinner instance.
let spinner: Ora.Ora|null = null;

/**
 * startSpinner()
 * 
 * starts the spinner.
 * @param message the message to display.
 */

export const startSpinner = (message: string): void => {
    spinner = Ora({}).start(message);
}

/**
 * stopSpinnerWithSuccess()
 * 
 * stops the spinner with a success status.
 * @param message the message to display.
 */

export const stopSpinnerWithSuccess = (message: string): void => {
    if ((spinner !== null)) {
        spinner = spinner.succeed(message);
        spinner = null;
    }
}

/**
 * stopSpinnerWithFailure()
 * 
 * stops the spinner with a failure.
 * @param message the message to display.
 */

export const stopSpinnerWithFailure = (message: string): void => {
    if ((spinner !== null)) {
        spinner = spinner.fail(message);
        spinner = null;
    }
}