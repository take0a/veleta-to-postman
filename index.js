const input = '../../demo/15/openapi.json';
const output = '../../demo/15/collection.json';

var fs = require('fs'), // needed to read JSON file from disk
	Converter = require('openapi-to-postmanv2'),
	Collection = require('postman-collection').Collection,
	myCollection;

const openapiData = fs.readFileSync(input).toString();

Converter.convert({ type: 'string', data: openapiData },
	{ folderStrategy: 'Tags', includeAuthInfoInExample: false },
	(err, conversionResult) => {
		if (!conversionResult.result) {
			console.log('Could not convert', conversionResult.reason);
			return;
		}
		// fs.writeFileSync(output, JSON.stringify(conversionResult.output[0].data, null, 4));

		var count = 0;
		myCollection = new Collection(conversionResult.output[0].data);
		myCollection.forEachItem((item) => {
			item.request = ((req) => {
				req.url.variables.each((item) => {
					switch (item.value) {
						case '<string>':
							item.value = item.name + count++
							break;
						case '<number>':
							item.value = count++;
							break;
					}
				});
				req.url.query.each((item) => {
					switch (item.value) {
						case '<string>':
							item.value = item.key + count++
							break;
						case '<number>':
							item.value = count++;
							break;
					}
				});
				if (req.body && req.body.raw) {
					obj = JSON.parse(req.body.raw);
					for (const [key, value] of Object.entries(obj)) {
						switch (value) {
							case '<string>':
								obj[key] = key + count++;
								break;
							case '<number>':
								obj[key] = count++;
								break;
						}
					}
					req.body.raw = JSON.stringify(obj);
				}
                return req;
			})(item.request);
		});
		fs.writeFileSync(output, JSON.stringify(myCollection, null, 4));
	}
);

