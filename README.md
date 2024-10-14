# Setup
```
C:\JDW24A\tools\edit-postman>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (edit-postman)
version: (1.0.0)
description: edit postman collection parameters
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\JDW24A\tools\edit-postman\package.json:

{
  "name": "edit-postman",
  "version": "1.0.0",
  "description": "edit postman collection parameters",
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

C:\JDW24A\tools\edit-postman>npm install postman-collection --save
npm warn deprecated @faker-js/faker@5.5.3: Please update to a newer version.

added 16 packages, and audited 17 packages in 8s

found 0 vulnerabilities

C:\JDW24A\tools\edit-postman>git init 
Initialized empty Git repository in C:/JDW24A/tools/edit-postman/.git/

```

# Run
```
C:\JDW24A\tools\edit-postman>node index.js
Debugger attached.
{
  _: { postman_id: 'bff0ab4c-baec-4c41-9abf-83e88527713c' },
  item: [
    {
      id: '971d11ea-376c-4508-900f-43f629241512',
      name: 'customer(顧客マスタ)の登録',
      request: [Object],
      response: [Array],
      event: [],
      protocolProfileBehavior: [Object]
    },
    {
      id: '0bc57569-d85c-412a-8347-e86e70bfafac',
      name: 'customer(顧客マスタ)の抽出',
      request: [Object],
      response: [Array],
      event: [],
      protocolProfileBehavior: [Object]
    },
    {
      id: 'eb711e79-e1a4-4094-be5e-931ee8c360a0',
      name: 'customer(顧客マスタ)の取得',
      request: [Object],
      response: [Array],
      event: [],
      protocolProfileBehavior: [Object]
    },
    {
      id: 'ef4f9f6d-3578-4623-8eca-991cec3a2fc2',
      name: 'customer(顧客マスタ)の更新',
      request: [Object],
      response: [Array],
      event: [],
      protocolProfileBehavior: [Object]
    },
    {
      id: '420f03f9-83b3-4a35-9f3a-92a696c7f08b',
      name: 'customer(顧客マスタ)の削除',
      request: [Object],
      response: [Array],
      event: [],
      protocolProfileBehavior: [Object]
    }
  ],
  event: [],
  variable: [ { type: 'any', value: 'http://localhost:3000', key: 'baseUrl' } ],
  info: {
    _postman_id: 'bff0ab4c-baec-4c41-9abf-83e88527713c',
    name: 'SampleAPI',
    version: undefined,
    schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
    description: PostmanPropertyDescription {
      content: 'Sample API',
      type: 'text/plain'
    }
  }
}
Waiting for the debugger to disconnect...

```