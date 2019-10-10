"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        default: "ACME Project"
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
        default: `ACME Tech Test`
      }
    ]);
  }

  writing() {
    const directory = this.answers.title
      .split(" ")
      .map(word => word.toLowerCase())
      .join("-");

    this._copyFiles(directory);
    this._changePackageJson(directory);
    this.npmInstall();
  }

  _copyFiles(directory) {
    this.fs.copy(
      this.templatePath("**/*"),
      this.destinationRoot(`${directory}`),
      {
        globOptions: {
          dot: true,
          ignore: ["**/.DS_Store", "**/.git/**/*", "**/node_modules/**/*"]
        }
      }
    );
  }

  _changePackageJson(directory) {
    const pkgJson = {
      name: directory,
      description: this.answers.description
    };
    this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);
  }
};
