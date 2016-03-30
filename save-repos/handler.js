var RepoSaver = require('lambda-fn-save-repos').default;
var AWS = require('aws-sdk');
var config = require('./config');
var repoSaver = new RepoSaver(config.get('es'), AWS);

module.exports.handler = function (event, context, other) {
	return repoSaver.run(event.body)
		.bind(context)
		.then(function (res) {
			return context.succeed(res);
		})
		.catch(function (err) {
			return context.fail(err);
		});
};
