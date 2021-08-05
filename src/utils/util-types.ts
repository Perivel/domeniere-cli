export enum PackageManager {
    NPM = "npm",
    YARN = "yarn",
}

export interface DomConfig {
    name: string;
    description: string;
    packageManager: PackageManager;
    modules: string[];
}
