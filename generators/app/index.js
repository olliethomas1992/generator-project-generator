"use strict";
const path = require("path");
const Generator = require("yeoman-generator");
const _ = require("lodash");

function makeGeneratorName(name) {
  name = _.kebabCase(name);
  name = name.indexOf("generator-") === 0 ? name : "generator-" + name;
  return name;
}

module.exports = class extends Generator {
  initializing() {
    this.props = {};
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your generator name",
        default: makeGeneratorName(path.basename(process.cwd())),
        filter: makeGeneratorName,
        validate: str => {
          return str.length > "generator-".length;
        }
      },
      {
        type: "input",
        name: "authorName",
        message: "Your name",
        default: "Ollie Thomas"
      },
      {
        type: "input",
        name: "authorEmail",
        message: "Your email",
        default: "ollie.thomas1992@gmail.com"
      },
      {
        type: "input",
        name: "authorUrl",
        message: "Your Url",
        default: "https://github.com/olliethomas1992"
      }
    ]);
  }

  writing() {
    this._formatName();
    this._copyFiles();
    this._changePackageJson();
  }

  _copyFiles() {
    this.fs.copy(
      this.templatePath("**/*"),
      this.destinationRoot(`${this.answers.name}`),
      {
        globOptions: { dot: true, ignore: ["**/.DS_Store", "**/.git/*"] }
      }
    );

    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath(`README.md`),
      {
        name: this.answers.name,
        capsName: this.props.name,
        yoName: this.props.yoName
      }
    );
    this.fs.copyTpl(
      this.templatePath("LICENSE"),
      this.destinationPath(`LICENSE`),
      {
        authorEmail: this.answers.authorEmail,
        authorUrl: this.answers.authorUrl
      }
    );
  }

  _changePackageJson() {
    const pkgJson = {
      name: this.answers.name,
      description: this.answers.description,
      author: {
        name: this.answers.authorName,
        email: this.answers.authorEmail,
        url: this.answers.authorUrl
      }
    };
    this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);
  }

  _formatName() {
    const words = this.answers.name.split("-");
    words.shift();
    this.props.name = _.startCase(words.join(" "));
    this.props.yoName = words.join("-");
  }

  install() {
    this.npmInstall();
  }

  end() {
    this.fs.delete("generators/app/templates/delete.txt");
  }
};
