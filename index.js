var _ = require('lodash');
var fs = require('fs');
var Promise = require('bluebird');
var assert = require('assert');
var request = require('request');
var SERVICE_URL = 'http://api.screenshotlayer.com/api/capture';

module.exports = function buildClient (accessKey) {
	assert(accessKey, 'Access key is required');

	return function capture (url, dest, qs) {
		assert(url && typeof url === 'string', 'Url is required');
		assert(dest && typeof dest === 'string', 'Dest path is required');
		assert(!qs || _.isObject(qs), 'Options must be an object');

		qs = _.extend({ viewport: '1440x900', width: 250 }, qs);
		qs.access_key = accessKey;
		qs.url = url;

		return new Promise(function captureAndDownload (resolve, reject) {
			request({
				url: SERVICE_URL,
				qs: qs
			})
			.pipe(fs.createWriteStream(dest))
			.on('close', resolve)
			.on('error', reject);
		});
	}

};
