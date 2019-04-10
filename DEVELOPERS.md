# Developer's Guide

>This guide assumes the `ui` repository is cloned locally on your machine at: `~/fundbox/ui/`

## Scaffolding a new component
The `create` script is a CLI tool that generates files for a new component.<br/>
Also, the tool registers the new component as a new story in Storybook.
```bash
cd ~/fundbox/ui
npm run create
```
Choose what you want to create:
- **Component** - generate Component templates and file structure.
- **Directive** - generate Directive templates and file structure.

Enter a name for the new component.<br/>
The component will add an `Fbx` prefix to the given name automatically.

The CLI will generate everything for you and output with the results.

![](https://user-images.githubusercontent.com/1431699/48138987-189e1400-e2ae-11e8-8b13-7db5288c5941.gif)

## Development and Testing
Developing for the UI library is done within the UI repository alone, as a Storybook component. This means that the component that is being created must be reusable and independant and should be fully functional within Storybook.

Once the component is ready for deploy, you'd probably want to implement it within a front-end application to make sure that it fits and works as planned. Our front-end applications are installing the UI library from our [remote npm registry](https://www.npmjs.com/package/@fundbox/ui) so in-order to test the local version of the UI library you'd have to install your local version, located at `~/fundbox/ui`.

To use the local version of the UI library, compile it with your current changes:
```bash
cd ~/fundbox/ui
npm run build:lib
```

then, run:
```bash
cd ~/fundbox/frontend
npm run link:ui
```

When done testing the local ui, run:
```bash
cd ~/fundbox/frontend
npm run unlink:ui
```

When linked, the `@fundbox/ui` package inside the app's `node_modules` folder, will be a symlink to `~/fundbox/ui` locally on your machine.

## Commiting for Semantic Release
We use [semantic-release](https://semantic-release.gitbook.io/semantic-release/) to automate deployment of the `ui` package.
**semantic-release** uses the commit messages to determine the type of changes in the codebase. Following formalized conventions for commit messages, **semantic-release** automatically determines the next [semantic version](https://semver.org) number, generates a changelog and publishes the release.

Read our commit message format documentation [here](https://fundbox.atlassian.net/wiki/spaces/RND/pages/1113948259/Semantic+Release+Commit+Message+Format).

**IMPORTANT: You have to format your commits this way to be able to deploy a new version of the UI library.**

### Semantic Release Highlights

- Fully automated release
- Enforce [Semantic Versioning](https://semver.org) specification
- New features and fixes are immediately available to users
- Notify maintainers and users of new releases
- Use formalized commit message convention to document changes in the codebase
- Integrate with your [continuous integration workflow](docs/recipes/README.md#ci-configurations)

### CI/CD

The CI/CD process of the UI library runs inside TeamCity and has two main flows:

1. On each PR that is created/updated we run linter and unit tests. If one of them fails, it blocks the PR from being merged into `master` branch.
2. On each merge into `master` branch we:
   1. Build the library and the `storybook`
   2. Publish `storybook`'s output to Github pages
   3. Bump a version of the library
   4. Publish a new release to `npm`
