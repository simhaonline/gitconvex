const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const {
  HEALTH_CHECK,
  FETCH_REPO,
  REPO_DETAILS,
  REPO_TRACKED_DIFF,
  REPO_FILE_DIFF,
  COMMIT_LOGS,
  COMMIT_FILES,
  GIT_STAGED_FILES,
  GIT_UNPUSHED_COMMITS,
  SETTINGS_DBPATH,
  SETTINGS_REPODETAILS,
  SETTINGS_PORT,
  GIT_FOLDER_CONTENT,
  CODE_FILE_VIEW,
  BRANCH_COMPARE,
  COMMIT_COMPARE,
} = require("./globalRouteStore");

const graphqlHTTP = require("express-graphql");

const globalGQLSchema = require("../global/gqlGlobalAPISchema");

const {
  addRepoFunction,
  fetchRepoFunction,
  gitChangeTrackerFunction,
  gitFileDiffFunction,
  healthCheckFunction,
  repoDetailsFunction,
  gitCommitLogsFunction,
  gitCommitFileFunction,
  gitGetStagedFiles,
  gitUnpushedCommits,
  gitSetBranch,
  gitStageAllItems,
  gitCommitChanges,
  gitPushToRemote,
  gitStageItem,
  settingsFetchDbPath,
  settingsFetchRepoDetails,
  gitRemoveStagedItem,
  gitRemoveAllStagedItems,
  gitFetchFromRemote,
  gitPullFromRemote,
  deleteRepo,
  addBranch,
  updateDbFileApi,
  settingsGetPortDetails,
  settingsUpdatePortDetail,
  gitAddRemoteRepoApi,
  gitDeleteBranchApi,
  gitFolderContentApi,
  gitCommitLogSearchFunction,
  codeFileViewFunction,
  branchCompareApi,
  commitCompareApi,
} = require("./globalFunctionStore");

app.use(
  "/gitconvexapi",
  graphqlHTTP({
    schema: globalGQLSchema,
    graphiql: true,
    rootValue: {
      gitConvexApi: async (args) => {
        const { route, payload } = args;

        console.log("Api Route : " + route + "\nAPI Payload : " + payload);

        let parsedPayload = {};

        if (payload) {
          parsedPayload = JSON.parse(JSON.stringify(payload));
        }

        switch (route) {
          case HEALTH_CHECK:
            return healthCheckFunction();
          case FETCH_REPO:
            return fetchRepoFunction();
          case REPO_DETAILS:
            return repoDetailsFunction(parsedPayload);
          case REPO_TRACKED_DIFF:
            return gitChangeTrackerFunction(parsedPayload);
          case REPO_FILE_DIFF:
            return gitFileDiffFunction(parsedPayload);
          case COMMIT_LOGS:
            return gitCommitLogsFunction(parsedPayload);
          case COMMIT_FILES:
            return gitCommitFileFunction(parsedPayload);
          case GIT_STAGED_FILES:
            return gitGetStagedFiles(parsedPayload);
          case GIT_UNPUSHED_COMMITS:
            return gitUnpushedCommits(parsedPayload);
          case SETTINGS_DBPATH:
            return settingsFetchDbPath();
          case SETTINGS_PORT:
            return settingsGetPortDetails();
          case SETTINGS_REPODETAILS:
            return settingsFetchRepoDetails();
          case GIT_FOLDER_CONTENT:
            return gitFolderContentApi(parsedPayload);
          case CODE_FILE_VIEW:
            return codeFileViewFunction(parsedPayload);
          case BRANCH_COMPARE:
            return branchCompareApi(parsedPayload);
          case COMMIT_COMPARE:
            return commitCompareApi(parsedPayload);
          default:
            return { message: "Query Termination" };
        }
      },
      addRepo: async (args) => {
        const { repoName, repoPath, initSwitch, cloneSwitch, cloneUrl } = args;
        return await addRepoFunction(
          repoName,
          repoPath,
          initSwitch,
          cloneSwitch,
          cloneUrl
        );
      },
      setBranch: async (args) => {
        const { repoId, branch } = args;
        console.log(args);
        return await gitSetBranch(repoId, branch);
      },
      stageAllItems: async (args) => {
        const { repoId } = args;
        return await gitStageAllItems(repoId);
      },
      commitChanges: async (args) => {
        const { repoId, commitMessage } = args;
        return await gitCommitChanges(repoId, commitMessage);
      },
      pushToRemote: async (args) => {
        const { repoId, remoteHost, branch } = args;
        return await gitPushToRemote(repoId, remoteHost, branch);
      },
      stageItem: async (args) => {
        const { repoId, item } = args;
        return await gitStageItem(repoId, item);
      },
      removeStagedItem: async (args) => {
        const { repoId, item } = args;
        return await gitRemoveStagedItem(repoId, item);
      },
      removeAllStagedItem: async (args) => {
        const { repoId } = args;
        return await gitRemoveAllStagedItems(repoId);
      },
      fetchFromRemote: async (args) => {
        const { repoId, remoteUrl, remoteBranch } = args;
        return await gitFetchFromRemote(repoId, remoteUrl, remoteBranch);
      },
      pullFromRemote: async (args) => {
        const { repoId, remoteUrl, remoteBranch } = args;
        return await gitPullFromRemote(repoId, remoteUrl, remoteBranch);
      },
      deleteRepo: async (args) => {
        const { repoId } = args;
        return await deleteRepo(repoId);
      },
      addBranch: async (args) => {
        const { repoId, branchName } = args;
        return await addBranch(repoId, branchName);
      },
      updateRepoDataFile: async (args) => {
        const { newDbFile } = args;
        return await updateDbFileApi(newDbFile);
      },
      settingsEditPort: async (args) => {
        const { newPort } = args;
        return settingsUpdatePortDetail(newPort);
      },
      addRemoteRepo: async (args) => {
        const { repoId, remoteName, remoteUrl } = args;
        return gitAddRemoteRepoApi(repoId, remoteName, remoteUrl);
      },
      deleteBranch: (args) => {
        const { repoId, branchName, forceFlag } = args;
        return gitDeleteBranchApi(repoId, branchName, forceFlag);
      },
      searchCommitLogs: async (args) => {
        const { repoId, searchType, searchKey } = args;
        return await gitCommitLogSearchFunction(repoId, searchType, searchKey)
          .then((res) => {
            return res;
          })
          .catch((err) => {
            console.log("ERROR: Commit log search error", err);
          });
      },
    },
  })
);

module.exports = app;
