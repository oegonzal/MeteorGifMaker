Package.describe({
	name: 'meteor-gifmaker',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'Meteor app that generates a gif with uploaded images',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/oegonzal/MeteorGifMaker',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('1.1');
	
	api.use('cfs:standard-packages@0.5.9');
	api.use('cfs:gridfs@0.0.33'); 
	api.use('dbarrett:dropzonejs@3.10.3');

	api.addFiles('api/images.js');
	api.addFiles('libs/gifshot/gifshot.js', 'client');
	api.addFiles('client/dropzone.js', 'client');
	api.addFiles('client/on-submit.js', 'client');
	api.addFiles('client/on-reset.js', 'client');
	api.addFiles('client/image-helper.js', 'client');
	
});


