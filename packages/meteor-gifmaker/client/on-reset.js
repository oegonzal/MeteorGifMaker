Meteor.onReset = function (event) {
    Meteor.resetApp();
}

Meteor.resetApp = function() {
    Meteor.removeImagesFromDb();
    Meteor.resetDropzone();
    removeImagesFromDocument();
}

function removeImagesFromDocument() {
    var displayContainerEl = document.getElementById('gif-display-container');
    displayContainerEl.innerHTML = '';

    // After removing Gif we add a reminder that there is no GIF to display
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
