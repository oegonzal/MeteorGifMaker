Meteor.saveFile = function (event) {
    const files = event.target.files;
    for (let i = 0, ln = files.length; i < ln; i++) {
        const imageFile = new FS.File(files[i]);
        Meteor.saveImage(imageFile);
    }
}
