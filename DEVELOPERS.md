# Introduction

## Scaffolding
In order to improve productivity you can generate new elements' structure with CLI commands. We use [hygen](http://www.hygen.io/) for this purpose. We added a CLI tool to make our lives easier. Just run a simple command and follow the instructions:
  - `npm run create`

![kapture 2018-11-07 at 16 56 14](https://user-images.githubusercontent.com/1431699/48138987-189e1400-e2ae-11e8-8b13-7db5288c5941.gif)


Available scaffolding types:
- **Components** - will generate component structure and register it to stories. Also, prefixes the given name with `Fbx`

- **Directives** - will generate directive structure and register it to stories. Also, prefixes the given name with `Fbx`


## CI/CD

CI/CD process of UI library uses TeamCity and has two main flows:

1. On each PR that is created/updated we run linter and unit tests. If one of them fails, it blocks the PR from being merged into `master` branch.
2. On each merge into `master` branch we:
   1. Build the library and the `storybook`
   2. Publish `storybook`'s output to Github pages
   3. Bump a version of the library
   4. Publish a new release to `npm`

In order to automate last two steps, we use [semantic-release](https://semantic-release.gitbook.io/semantic-release/)

### Semantic Release Highlights

- Fully automated release
- Enforce [Semantic Versioning](https://semver.org) specification
- New features and fixes are immediately available to users
- Notify maintainers and users of new releases
- Use formalized commit message convention to document changes in the codebase
- Integrate with your [continuous integration workflow](docs/recipes/README.md#ci-configurations)


### How does it work?

#### Commit message format

**semantic-release** uses the commit messages to determine the type of changes in the codebase. Following formalized conventions for commit messages, **semantic-release** automatically determines the next [semantic version](https://semver.org) number, generates a changelog and publishes the release.

We use [Google Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). Here is an example of the release type that will be done based on a commit messages:

| Commit message                                                                                                                                                                                   | Release type               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release              |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release |

**Read more about `semantic-release` [here](https://semantic-release.gitbook.io/semantic-release/)**

### IDE plugins

To make commit formating easier, there are plugins for different IDEs:

**VS Code** - [Visual Studio Code Commitizen Support](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen)

**PyCharm** - [Git Commit Template](https://plugins.jetbrains.com/plugin/9861-git-commit-template)

