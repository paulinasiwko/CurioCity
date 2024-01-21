const imagesApiKey = `1f4988b7218778a8ade4218c335534cd`;

// $("#searchButton").on("click", function(e) {
//     e.preventDefault();

//     const tag = $("#cityInput").val().trim() + " city";

//     getImage(tag);
// })

function getImage(tagName) {
    const queryURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${imagesApiKey}&tags=${tagName}&format=json&nojsoncallback=1`;

    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const imageServer = data.photos.photo[0].server;
            const imageId = data.photos.photo[0].id;
            const imageSecret = data.photos.photo[0].secret;

            const imageURL = `https://live.staticflickr.com/${imageServer}/${imageId}_${imageSecret}_w.jpg`
            
            const displayImage = $("<img>").attr("src", imageURL)
            $("#imageHere").append(displayImage);

        })
}

