Meteor.onReset = function (event) {
    Meteor.resetApp();
}

Meteor.resetApp = function() {
    Meteor.removeImagesFromDb();
    removeImagesFromDocument();
    resetInputFields();
}

function removeImagesFromDocument() {
    var displayContainerEl = document.getElementById('gif-display-container');
    displayContainerEl.innerHTML = '';
}

function resetInputFields() {
    document.querySelectorAll('input[type=file]').forEach(function(input) {
        input.value = '';
    });
}