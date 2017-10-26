// Image collection that filters files to make sure they are images
Images = new FS.Collection("images", {
    stores: [new FS.Store.GridFS("images")],
    filter: {
        allow: {
            contentTypes: ['image/*']
        },
        onInvalid: function (errorMsg) {
            console.error(errorMsg)
        }
    }
});

// Allowed actions for collection
Images.allow({
    'insert': function () {
        return true;
    }
});

Meteor.removeImagesFromDb = function() {
    var storedImages = Images.find();
    
    storedImages.forEach(function (file) {
        file.remove();
    });
}


// Server side function: make sure Db is clean upon app startup
Meteor.startup(function() {
    Meteor.removeImagesFromDb();
})