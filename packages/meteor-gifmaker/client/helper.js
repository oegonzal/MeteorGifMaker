Meteor.getUploadedImagesCount = function() {
    return Images.find().count();
}

Meteor.initalizeDropzone = function () {
    Dropzone.autoDiscover = false;
    Dropzone.options.myDropzone = new Dropzone("form#dropzone", {
        maxFiles: 5,
        accept: onDrop
    });

    Dropzone.options.myDropzone.on("addedfile", function() {
        console.log('File added into dropzone');
    });
};

Meteor.saveImage = function(imageFile) {
    // debugger;
    Images.insert(imageFile, function (error, fileObj) {
        if (error) {
            console.error(error);
        } else {
            if(Meteor.getUploadedImagesCount() >= 5) {
                Dropzone.options.myDropzone.disable();
            } else {
                Dropzone.options.myDropzone.enable();
            }
        }
    });
};

function onDrop(imageFile) {
    Meteor.saveImage(imageFile);
}
