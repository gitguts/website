# Git Guts website

Source repository for Git Guts initiative [website](https://www.gitguts.io).

## Requirements

This project requires:
* [Node.js](https://nodejs.org/en/) in 8.3.0 version (or higher)
* [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/) globally installed

## Installation

```bash
npm install
```

## Running in development mode

Before running project in development code you need to copy [dev-example.env](config/dev-example.env) file in [config](config) directory with name **dev.env** and adjust the configuration in it. After that simply run command:

```bash
gatsby develop
```

## Coding style

This project is using [Prettier](https://prettier.io) for code formatting. You can manually format the code in whole project with following command:

```bash
npm run format
```

But it's more convenient to have an IDE plugin that will format edited file on each save. Instructions how to setup Prettier in particular IDEs:
* WebStorm - built in support ([setup instructions](https://prettier.io/docs/en/webstorm.html))
* Visual Studio Code - via [prettier-vscode](https://github.com/prettier/prettier-vscode) plugin

## License

This project is licensed using MIT license. For more details see [License](LICENSE) file.
