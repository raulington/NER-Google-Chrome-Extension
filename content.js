console.log('extension go v9')


// chrome.runtime.onMessage.addListener(gotMessage);
// function gotMessage(message, sender, sendResponse) {
//   chrome.runtime.lastError ;
//    const req = new XMLHttpRequest();
//    const baseUrl = "http://localhost:8000/api/";
//    const urlParams = `msg=${document.body.innerText}`;

//    req.open("POST", baseUrl, true);
//    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//    req.send(urlParams);

//    req.onreadystatechange = function() { // Call a function when the state changes.
//        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//            this.responseText
//            console.log("Got updated response 200!"+this.responseText);
//        }
//    }
// }

// Code from https://stackoverflow.com/questions/66436649/how-can-i-highlight-multiple-occurrences-of-a-single-word-in-an-html-element
highlightResult = (searchText) => {
    // perform DOM operations to find the text and highlight it
    var individualWordsArray = document.body.innerText.match(/\b(\w|')+\b/gim); //regex to split the entire text into array of individual words

    document.body.innerHTML = document.body.innerHTML.replace(
    RegExp(searchText, "g"), // create a regexp from the searchText and add the "g" flag to make it global
    '<span class="highlight">' + searchText + '</span>'
    );

    individualWordsArray.map((word) => {
    if (word.includes(searchText)) {
        // my dummy logic t
        word = '<span class="highlight">' + word + '</span>'
    }
    });
    console.log("end");
}

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
    chrome.runtime.lastError ;
    console.log('NER Chrome extension got message v9')
    console.log(message)
    jsonRequestInputPayload = JSON.stringify({ "textPayload": document.body.innerText});
    fetch('http://localhost:8000/api/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: jsonRequestInputPayload
    })
    .then(highlight)
    .then(response => sendResponse({farewell: response}))
    .catch(error => console.log(error))
}

function highlight(response) {
    response.json().then(function(result) {
        result.forEach((entity) => {
            highlightResult(entity);
        });
    })
}
