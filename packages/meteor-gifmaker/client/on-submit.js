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

    debugger;
    gifshot.createGIF(params, handleGifCreation);
}

function handleGifCreation(gifObj) {
    var onError = gifObj.error;
    if(onError) {
        console.error('There was an error trying to generate the Gif');
    } else {
        displayGIF(gifObj);
    }
}

function displayGIF(gifObj) {
    var image = gifObj.image, 
        animatedImage = document.createElement('img');
    animatedImage.src = image;
    
    appendImageToDisplayContainer(animatedImage);
}

function appendImageToDisplayContainer(image) {
    var displayContainer = document.getElementById('gif-display-container');
    displayContainer.append(image);
}