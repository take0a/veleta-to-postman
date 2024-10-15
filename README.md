# Getting Started
```
C:\Your\Path> git clone https://github.com/take0a/veleta-to-postman.git

C:\Your\Path\veleta-to-postman> npm ci 

``` 

# Run
```
C:\Your\Path\veleta-to-postman>node index.js

```

# Initial Setup
```
C:\Your\Path\veleta-to-postman>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (veleta-to-postman)
version: (1.0.0)
description: convert a veleta openapi specification to a postman collection
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\Your\Path\veleta-to-postman\package.json:

{
  "name": "veleta-to-postman",
  "version": "1.0.0",
  "description": "convert a veleta openapi specification to a postman collection",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) y

npm notice
npm notice New minor version of npm available! 10.8.2 -> 10.9.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.9.0
npm notice To update run: npm install -g npm@10.9.0
npm notice

C:\Your\Path\veleta-to-postman>npm install openapi-to-postmanv2 --save
Debugger attached.

added 69 packages, and audited 86 packages in 13s

10 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Waiting for the debugger to disconnect...

C:\Your\Path\veleta-to-postman>npm install postman-collection --save
npm warn deprecated @faker-js/faker@5.5.3: Please update to a newer version.

added 16 packages, and audited 17 packages in 8s

found 0 vulnerabilities

C:\Your\Path\veleta-to-postman>git init 
Initialized empty Git repository in C:/JDW24A/tools/veleta-to-postman/.git/

```