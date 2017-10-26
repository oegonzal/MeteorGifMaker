Meteor.getUploadedImagesCount = function() {
    return Images.find().count();
}

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
