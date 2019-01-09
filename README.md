# Project Name

## Screenshot
![screenshot](/screenShots/updates.png)

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage
### Start Development
1. Navigate to the FEC directory just above the repo.
2. Open the directory in vsCode.
3. Navigate into the `updates-service` repo.
   1. Open three terminal windows
      1. One for git
      2. One for webpack build
      3. One for docker-compose
```
// webpack terminal
   npm run build:dev
// docker terminal
   docker-compose up
```
### Stop Development
1. <kbd>cmd</kbd> + <kbd>C</kbd> to stop the docker container
2. Remove containers
```
docker-compose down
```
3. No need to remove the images at this time (it will just mean you need to rebuild them)
## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

