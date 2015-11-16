/*
 * grunt-init-fcoo-leaflet
 * https://gruntjs.com/
 *
 */

'use strict';

// Basic template description.
exports.description = 'Create a FCOO repository with a leaflet plugin, including SCSS (and CSS).';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Please enter following information:';


// Template-specific notes to be displayed after question prompts.
exports.after = 
	'*******************************************\n' +
	'You should now run the following commands\n' +
	'>bower update\n' +
	'>npm install\n' +
	'>grunt dev\n' +
	'or >bower update & npm install & grunt dev (on Windows)\n' +
	'or >bower update ; npm install ; grunt dev (on Linux)\n' +
	'*******************************************\n' +
	'';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
  init.process({type: 'jquery'}, [
	
		init.prompt('name'),

		{
			name: 'class_name',
			message: 'Name of new class (CamelCase)',
			default: function(value, data, done) {
				var className = data.name;

				className = className.replace(/[\W_]+/g, ' ');
		    className = className.replace(/\w+/g, function(word) {
					return word[0].toUpperCase() + word.slice(1).toLowerCase();
		    });
				className = className.replace(/ /g, '');
				done(null, className);
			},
			validator: /([A-Z])\w+/, 
			warning: 'Only letters. Must start with a upper case letter ("MyClass" not "myClass")'
		},

		init.prompt('description (from README.md)'),
/*
		init.prompt('github_user'),
		init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
*/
    init.prompt('author_name'),

		init.prompt('author_email'),

  ], function(err, props) {


		//Add default values
		props.licenses = ['MIT'];
		props.year = (new Date()).getFullYear();

		props.jquery_class_name = props.class_name; 
		props.jquery_class_name = props.jquery_class_name.substring(0, 1).toLowerCase() + props.jquery_class_name.substring(1); //myClass => MyClass

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

		//Copy gruntfile.js and package.json from gruntfile/ to root
		var src_path = init.srcpath( '/../gruntfile/' );
		init.copyAndProcess({
		  "package.json": src_path + "package.json", 
		  "gruntfile.js": src_path + "gruntfile.js" 
		}, props );

    // All done!
    done();
	});

};
