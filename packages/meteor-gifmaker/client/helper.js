Meteor.getUploadedImagesCount = function() {
    return Images.find().count();
}

Meteor.initalizeDropzone = function () {
    var dropzone = new Dropzone("form#dropzone", {
        maxFiles: 5,
        accept: onDrop
    });
    // dropzone.disable();
};

Meteor.saveImage = function(imageFile) {
    Images.insert(imageFile, function (error, fileObj) {
        if (error) {
            console.error(error);
        } else {
            console.log('Picture has been added successfully');
        }
    });
};

function onDrop(imageFile) {
    Meteor.saveImage(imageFile);
}

