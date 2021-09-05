import { Path } from "@swindle/filesystem";
import { Artifact } from "./../../artifact/artifact";
/**
 * QueryArtifact
 *
 * An artifact for constructing a Query.
 */
export declare class QueryArtifact extends Artifact {
    private static WELL_PATH;
    private static QUERY_PATH;
    private readonly projectRoot;
    private readonly details;
    private readonly domconfigPath;
    private readonly modulePath;
    private readonly moduleFilePath;
    private readonly moduleQueriesDirPath;
    private readonly moduleQueriesWellFilePath;
    private readonly queryPath;
    private readonly queryClassPath;
    private readonly stringFormatter;
    private readonly inputParser;
    private readonly moduleValidator;
    constructor(details: string, projectRoot: Path);
    /**
     * directoriesInfo()
     *
     * The directories to be created for the artifact.
     */
    directoriesInfo(): Path[];
    /**
     * filesInfo()
     *
     * gets the information related to the files to be created for the artifact.
     */
    filesInfo(): Promise<Map<Path, string>>;
    /**
     * exportsInfo()
     *
     * gets information about exports to add.
     */
    exportsInfo(): Promise<Map<Path, string>>;
    /**
     * validate()
     *
     * Perform any necessary validation. If the vallidation passes, null should be returned.
     * If the validation fails, a string consisting of the error message should be returned.
     *
     * If the validation fails (null is not returned), the artifact will not be built and an error will
     * be thrown.
     */
    validate(): Promise<string | null>;
    /**
     * loadQueryContents()
     *
     * loads the query contents.
     * @returns the query class contents.
     */
    loadQueryContents(): Promise<string>;
    /**
     * loadWellContents()
     *
     * loads the contents for an exceptions well file..
     * @returns the contents for the exceptions well file.
     */
    private loadWellContents;
}
//# sourceMappingURL=query.artifact.d.ts.map