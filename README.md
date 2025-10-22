# Documentation

Our documentation site is built using [Docusaurus 2](https://docusaurus.io/).

### Setup
```
npm install --global yarn
```

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```
### Adding new .md files for CJ

Make sure to update `sidebars.js` to include the new file in the left sidebar.

### Set docs.foreai.co as custom domain

**!!Important!!** If you don't [do this here](https://github.com/foreai-co/foreai-co.github.io/settings/pages) after deployment https://docs.foreai.co will die.

See [screenshot example here](change_dns_instruction.png).