// veleta-to-postman/index.js
// $ node index.js

// ライブラリの読み込み
var fs = require('fs'),
	Converter = require('openapi-to-postmanv2'),
	Collection = require('postman-collection').Collection;

/** input は、OpenAPI 仕様書 */
const input = '../../demo/15/openapi.json';
/** output は、Postman Collection */
const output = '../../demo/15/collection.json';

/** convertString は、<string> を置換する。key は、項目名 */
const convertString = (key) => {
	switch (key) {
	// 独自の変換は、ここに書く
	// case 'YourKey':
	// 	return 'YourValue';
	default:
		return key + "1";
	}
}

/** convertNumber は、<number> を置換する。key は、項目名 */
const convertNumber = (key) => {
	switch(key) {
	// 独自の変換は、ここに書く
	// case 'YourKey':
	// 	return Math.floor(Math.random() * 10);
	default:
		return 10;
	}
}


/** openapiData は、OpenAPI 仕様書の文字列表現 */
const openapiData = fs.readFileSync(input).toString();

/** メインの変換処理 */
Converter.convert({ type: 'string', data: openapiData },
	{ folderStrategy: 'Tags', includeAuthInfoInExample: false },
	(_, conversionResult) => {
		if (!conversionResult.result) {
			console.log('Could not convert', conversionResult.reason);
			return;
		}
		// この段階では、openapi-to-postmanv2 の生の出力
		// fs.writeFileSync(output, JSON.stringify(conversionResult.output[0].data, null, 4));

		const collection = new Collection(conversionResult.output[0].data);
		collection.forEachItem((item) => {
			item.request = ((req) => {
				req.url.variables.each((item) => {
					switch (item.value) {
						case '<string>':
							item.value = convertString(item.name);
							break;
						case '<number>':
						case '<integer>':
							item.value = convertNumber(item.name);
							break;
					}
				});
				req.url.query.each((item) => {
					switch (item.value) {
						case '<string>':
							item.value = convertString(item.key);
							break;
						case '<number>':
						case '<integer>':
							item.value = convertNumber(item.key);
							break;
					}
				});
				if (req.body && req.body.raw) {
					obj = JSON.parse(req.body.raw);
					for (const [key, value] of Object.entries(obj)) {
						switch (value) {
							case '<string>':
								obj[key] = convertString(key)
								break;
							case '<number>':
							case '<integer>':
								obj[key] = convertNumber(key);
								break;
						}
					}
					req.body.raw = JSON.stringify(obj, null, 1);
				}
                return req;
			})(item.request);
		});
		fs.writeFileSync(output, JSON.stringify(collection, null, 4));
	}
);
