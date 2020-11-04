# ldpt
Learning Disability Programming Tool

## What technologies are used?
* [Google Blockly](https://developers.google.com/blockly) - Scratch-like coding environment
* [Microsoft Monaco Editor](https://microsoft.github.io/monaco-editor/index.html) - The editor behind Visual Studio Code
* [Artyom.js](https://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/index.html) - Speech recognition and text-to-speech
* [Electron](https://www.electronjs.org/) - Build GUI apps with web technologies
* Python

## How does it work
A Python flask app runs the [transpyle](https://pypi.org/project/transpyle/) library that allows a user to transpile Python code to C++ code. The electron app runs the Micorsoft Manoco Editor, Blockly editor and the Artyom.js code.
The Blockly code is added as a submodule in the repository

### How can I get this to work?
You need to install the following npm packages:
* artyom.js
* jquery
* monaco-editor

You will also need to install the following python packages
* transpyle
* flask

### How do I run this?
* You need to start the Python flask server with `python -m flask run`.
* The run the app with `electron . `
