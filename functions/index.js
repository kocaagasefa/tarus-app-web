const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.database();

const mediaLinkToDownloadableUrl = (object) => {
    let firstPartUrl = object.mediaLink.split("?")[0] // 'https://www.googleapis.com/download/storage/v1/b/abcbucket.appspot.com/o/songs%2Fsong1.mp3.mp3'
    let secondPartUrl = object.mediaLink.split("?")[1] // 'generation=123445678912345&alt=media'

    firstPartUrl = firstPartUrl.replace("https://www.googleapis.com/download/storage", "https://firebasestorage.googleapis.com")
    firstPartUrl = firstPartUrl.replace("v1", "v0")

    firstPartUrl += "?" + secondPartUrl.split("&")[1]; // 'alt=media'
    firstPartUrl += "&token=" + object.metadata.firebaseStorageDownloadTokens

    return firstPartUrl
}

exports.addHouseLinksToDatabase = functions.storage.object().onFinalize((object) => {
    console.log(object);
    if (object.name.startsWith("houses")) {
        const [, house_id, fileName] = object.name.split('/');

        return db.ref('/houses/' + house_id + '/photos/' + fileName.split('.')[0])
            .set(mediaLinkToDownloadableUrl(object)).then(_ => true)
    }
    return Promise.resolve(true);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });