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

Meteor.resetDropzone = function() {
    Dropzone.options.myDropzone.removeAllFiles();
    Dropzone.options.myDropzone.enable();
}

function onDrop(imageFile) {
    Meteor.saveImage(imageFile);
}
