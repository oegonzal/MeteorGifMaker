Meteor.onReset = function (event) {
    Meteor.resetApp();
}

Meteor.resetApp = function() {
    Meteor.removeImagesFromDb();
    removeImagesFromDocument();
    resetDropzone();
}

function removeImagesFromDocument() {
    var displayContainerEl = document.getElementById('gif-display-container');
    displayContainerEl.innerHTML = '';

    var reminderElement = createReminderElement();
    displayContainerEl.className = 'dashed-border';
    displayContainerEl.appendChild(reminderElement);
}

function createReminderElement() {
    var div = document.createElement('div');
    div.className = 'note-text text-center';
    div.innerHTML = 'No GIF Generated to Display';
    return div;
}

// TODO: move to dropzone folder
function resetDropzone() {
    Dropzone.options.myDropzone.removeAllFiles();
}
