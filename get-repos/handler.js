var RepoFetcher = require('lambda-fn-get-repos').default;
var AWS = require('aws-sdk');
var config = require('./config');
var repoFetcher = new RepoFetcher(config.get('es'), AWS);

module.exports.handler = function (event, context, other) {
	return repoFetcher.run(event.query)
		.bind(context)
		.then(function (res) {
			return context.succeed(res);
		})
		.catch(function (err) {
			return context.fail(err);
		});
};
