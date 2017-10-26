Meteor.onSubmit = function(event) {
    var delayInMs = getTimeInMilliseconds();
    var uploadedImages = getUploadedImages();

    generateGIF(uploadedImages, delayInMs);
}

function getTimeInMilliseconds() {
    var delayInMs = document.querySelector('input[type=number]').value;
    
    // Include a default of 500 ms in case user does not provide delay time
    return ( delayInMs ) ? ( delayInMs / 1000 ) : .7500;
}

function getUploadedImages() {
    const uploadedImages = [];

    Images.find().forEach( function(file) {
        uploadedImages.push(file.url());
    })

    return uploadedImages;
}

function generateGIF(uploadedImages, delayInMs) {
    var params = {
        images: uploadedImages,
        interval: delayInMs
    };

    gifshot.createGIF(params, handleGifCreation);
}

function handleGifCreation(gifObj) {
    var onError = gifObj.error;
    if(onError) {
        console.error('There was an error trying to generate the Gif');
    } else {
        displayDownloadableGIF(gifObj);
    }
}

function displayDownloadableGIF(gifObj) {
    var gifUrl = gifObj.image;
    var imageElement = makeImageElementOfGif(gifUrl);
    
    var linkElement = makeImageElementDownloadable(imageElement, gifUrl);
    appendGifToDisplayContainer(linkElement);
    // debugger;
}

function makeImageElementOfGif(imageUrl) {
    var animatedImage = document.createElement('img');
    animatedImage.src = imageUrl;
    return animatedImage;
}

function makeImageElementDownloadable(imageElement, imageUrl) {
    var linkElement = document.createElement('a');
    linkElement.href = imageUrl;
    linkElement.download = true;

    linkElement.append(imageElement);
    return linkElement;
}

function appendGifToDisplayContainer(image) {
    var displayContainer = document.getElementById('gif-display-container');
    displayContainer.innerHTML = '';
    displayContainer.className = 'no-border';
    displayContainer.append(image);
}