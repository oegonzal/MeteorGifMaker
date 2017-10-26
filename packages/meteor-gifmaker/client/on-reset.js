Meteor.onReset = function (event) {
    removeImagesFromDb();
    removeImagesFromDocument();
    resetInputFields();
}

function removeImagesFromDb() {
    Images.find().forEach(function (file) {
        file.remove();
    });
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