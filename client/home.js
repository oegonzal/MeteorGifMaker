/* ----- Render ------ */
Template.imageUpload.rendered = Meteor.initalizeDropzone;


/* ----- Events ------ */
Template.gifmaker.events({
    'change input': Meteor.saveFile
});

Template.submit.events({
    'click': Meteor.onSubmit
});

Template.reset.events({
    'click': Meteor.onReset
});


/* ----- Helpers ------ */
Template.submit.helpers({
    'disabled': function() {
        return (Meteor.getUploadedImagesCount() < 1);
    }
});

Template.reset.helpers({
    'disabled': function() {
        return (Meteor.getUploadedImagesCount() < 1);
    }
});

Template.totalImages.helpers({
    'total': Meteor.getUploadedImagesCount()
});