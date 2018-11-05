# Fundbox UI


## Development

### Scaffolding
In order to improve productivity you can generate new elements' structure with CLI commands. We use [hygen](http://www.hygen.io/) for this porpouse. There are couple of ways to use `hygen`:
1. `npm i -g hygen` - which installs `hygen` globally
2. `npx hygen ...` - which runs hygen remotly

Available scaffolding types:
- **Components** - will generate component structure and register it to stories. Also, prefixes the given name with `Fbx`
  >Usage: `npx hygen component new --name ComponentName`

- **Directives** - will generate directive structure and register it to stories. Also, prefixes the given name with `Fbx`
  >Usage: `npx hygen directive new --name DirectiveName`
