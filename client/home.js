
/* ----- Events ------ */
Template.body.events({

});

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
