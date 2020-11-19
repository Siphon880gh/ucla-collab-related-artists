async function secondAPI(context) {
    var { searchTerm } = context;

    async function getAccessToken() {
        // var myHeaders = new Headers();
        // myHeaders.append("Authorization", "Basic NDg3MmM3MDU1NzVhNDU5M2EyMjRkZjhlY2RlOGNmZjY6MzM1MjA1ZmJkNzU0NDlmMTg1MTQxZGI4NDU2OGM4MGQ=");
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        // myHeaders.append("Cookie", "__Host-device_id=AQCRGraHLh7exU3bLCTNZeXoxf5C5tdKL4vFbN4MYhpGZTwnMUisw35CBX0b6zvzrNzPHdFA25GqXO3NdX12SFcuCocGxmtGPA0");

        // var urlencoded = new URLSearchParams();
        // urlencoded.append("grant_type", "client_credentials");

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: urlencoded,
        //     redirect: 'follow'
        // };

        // return fetch("https://accounts.spotify.com/api/token", requestOptions)
        //     .then(response => response.json())
        //     .then(result => result)
        //     .catch(error => console.log('error', error));
    }; // getAccessToken

    async function fetchWithoutAccessToken(searchTerm) {
        var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='" + searchTerm + "'";


        return fetch(url, {})
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    }

    var wikiResponse = await fetchWithoutAccessToken(searchTerm);

    console.log(wikiResponse);
    var pages = wikiResponse.query.pages;
    var titles = [];
    for (const page in pages) {
        for (const pageId in pages) {
            //  console.log(pages[pageId]);
            var title = pages[pageId].title;
            titles.push(title);
        }
    }

    // Debugging
    console.group("Related Wikipedia titles to " + searchTerm);
    console.dir(titles);
    // await getAccessToken
    // await getSomeResponse
    // Convert to object
    console.groupEnd();

    // Then return object
    return { titles };
}

// Stephanie's code
// Parameters for client side MediaWiki. Wikipedia does not have an official API s
// lgname
// User name.

// lgpassword
// Password.

// lgdomain
// Domain (optional).

// lgtoken
// A "login" token retrieved from action=query&meta=tokens

// Example:
// Log in.
// api.php?action=login&lgname=user&lgpassword=password&lgtoken=123ABC [open in sandbox]
//This is the wiki way to do parameter search with out API key 
//Create a new object to interact with the server


// var xhr = new XMLHttpRequest();

// var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots'";

// // Provide 3 arguments (GET/POST, The URL, Async True/False)
// xhr.open('GET', url, true);

// // Once request has loaded...
// xhr.onload = function() {
//         // Parse the request into JSON
//         var data = JSON.parse(this.response);

//         // Log the data object
//         console.log(data);

//         // Log the page objects
//         console.log(data.query.pages)

//         // Loop through the data object
//         // Pulling out the titles of each page
//         for (var i in data.query.pages) {
//             console.log(data.query.pages[i].title);
//         }
//     }
//     // Send request to the server asynchronously
// xhr.send();