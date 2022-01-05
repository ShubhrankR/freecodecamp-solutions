/**
 * Complete a Promise with resolve and reject
 */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        // Change this line
        resolve("We got the data.");
    } else {
        // Change this line
        reject("Data not received");
    }
});

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then((result) => {
    console.log(result);
});
makeServerRequest.catch((error) => {
    console.log(error);
});
