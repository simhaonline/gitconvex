
# Gitconvex

<p align="center">
    <img src="https://user-images.githubusercontent.com/47709856/87170859-8bfff080-c2ef-11ea-9140-b9e5db1c17d8.png" width="280">
    <p align="center">
        <a href="https://www.producthunt.com/posts/gitconvex-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gitconvex-2" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=241240&theme=dark" alt="gitconvex - A web based UI client for managing git repositories | Product Hunt Embed" style="width: 250px; height: 54px;" width="250px" height="54px" /></a>
    </p>
</p>

## Web application for managing your git repositories

![open issues](https://img.shields.io/github/issues/neel1996/gitconvex?color=orange&style=for-the-badge)
![Gitconvex UI pipeline](https://img.shields.io/github/workflow/status/neel1996/gitconvex-ui/Gitconvex%20UI%20pipeline/master?label=gitconvex%20ui%20build&logo=github&style=for-the-badge)
![Gitconvex Server pipeline](https://img.shields.io/github/workflow/status/neel1996/gitconvex-server/Gitconvex%20Server%20Pipeline/main?label=gitconvex%20server%20build&logo=github&style=for-the-badge)

# Download options

> Use any of the below options to get gitconvex for your system

[![gitconvex npm package](https://img.shields.io/static/v1?label=gitconvex&message=v1.1.6&color=red&style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@itassistors/gitconvex)
[![github release](https://img.shields.io/static/v1?label=gitconvex&message=v1.1.6&color=green&style=for-the-badge&logo=github)](https://github.com/neel1996/gitconvex-package/releases)
[![docker image](https://img.shields.io/static/v1?label=gitconvex&message=v1.1.6&color=blue&style=for-the-badge&logo=docker)](https://hub.docker.com/repository/docker/itassistors/gitconvex)
[![License](https://img.shields.io/static/v1?label=LICENSE&message=Apache-2.0&color=yellow&style=for-the-badge)](LICENSE)

- **Option - 1** Cloning repo from **github**

**To be Noted :** The `master` branch contains the latest stable build of the project. For a reliable experience, always clone the repo from the master branch.

```

$ git clone https://github.com/neel1996/gitconvex-package.git
$ cd gitconvex-package
$ npm start

```

- **Option - 2**  Downloading package from **npm**

`npm i -g @itassistors/gitconvex`

This will install **gitconvex** as a global module and it can be started straight away from the command line with `gitconvex` command

```
$ gitconvex

INFO: Checking for config file
INFO: Config file is present
INFO: Reading from config file /usr/lib/node_modules/@itassistors/gitconvex/env_config.json
GitConvex API connected!

Checking data file availability...
INFO: Data file /usr/lib/node_modules/@itassistors/gitconvex/database/repo-datastore.json is present and it will be used as the active data file!

You can change this under the settings menu

Gitconvex is running on port 9001

    Open http://localhost:9001/ to access gitconvex
```

- **Option - 3** If you are into **docker**, then there is also a docker image available for gitconvex 

`docker pull itassistors/gitconvex`

**Note:** Make sure you mount the host volume to the container to access the git repos from the host system. If you have git repos stored within your containers, then this is not required

- **Option - 4** Downloading the zip file from the tagged github [**release**](https://github.com/neel1996/gitconvex-package/releases)

```
## Extract the downloaded zip file and execute the commands

$ cd gitconvex-package
$ npm start
```


# Platforms

|supported platforms|
|--|
|Linux :penguin:  |
|Mac OS  :apple: |
|Windows :black_square_button: |

## Requirements

| <b>[Node js](https://nodejs.org/en/)</b> | <b>Tested on v12.0+ |
|--|--|
| <b>[Git](https://git-scm.com/)</b> | <b>Tested on v2.20+</b> |
    
> **Important note for windows users**

If you are a windows user, then make sure that `git` is accessible from the command line without using git bash.

- Open command prompt or powershell and enter `git --version` and press enter. If it displays the following output, then it is fine

```
C:\> git --version

git version 2.28.0.windows.1
```

If this output is not displayed and if the command throws the following error, then it shows that `git` is not added to the 'path' environment variable and it will not be accessible directly from the command line,

```
C:\> git --version

'git' is not recognized as an internal or external command,
operable program or batch file.
```

This can be fixed by adding `git` to the PATH environment variable in windows. The process of setting this up is available [here](https://stackoverflow.com/questions/26620312/git-installing-git-in-path-with-github-client-for-windows#answer-53706956:~:text=comment-,27,Here%20is%20the%20magic)


# Detailed documentation

Refer the detailed [Documentation](DOCUMENTATION.md) for how to setup and use the platform


# Contributions 

This is the final production build for **gitconvex** and direct contributions will not be accepted to this repo. If you wish to contribute to this project, then it has to be made to the following repos which are dedicated to the frontend (React) and backend (Node JS) for the platform 

- **Frontend repo - Build with React JS**

[![gitconvex-ui](https://github-readme-stats-git-master.neel1996.vercel.app/api/pin/?username=neel1996&repo=gitconvex-ui)](https://github.com/neel1996/gitconvex-ui)

- **Backend repo - Build with Node JS**

[![gitconvex-server](https://github-readme-stats-git-master.neel1996.vercel.app/api/pin/?username=neel1996&repo=gitconvex-server)](https://github.com/neel1996/gitconvex-server)


> Please make sure that you are following the contribution guidelines for the respective repos. 

# Help and Feedback

For reporting issues or for requesting any feature use the following medium,

[**Discord Channel** ](https://discord.gg/PSd2Cq9)

[**Github Issue Reporting**](https://github.com/neel1996/gitconvex-package/issues)

# License

See [LICENSE ](LICENSE) info for more
