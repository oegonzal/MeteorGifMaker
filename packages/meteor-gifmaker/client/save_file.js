Meteor.saveFile = function (event) {
    const files = event.target.files;
    
    for (let i = 0, ln = files.length; i < ln; i++) {
        const currFile = new FS.File(files[i]);
        Images.insert(currFile, function (error, fileObj) {
            if (error) console.error(error);
        });
    }
}

Meteor.returnToInitialState = function (event) {
    Images.find().forEach(function (file) {
        file.remove();
    });
}