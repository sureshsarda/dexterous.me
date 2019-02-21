const functions = require('firebase-functions');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.waitlist = functions.https.onRequest((request, response) => {
    // const original = request.query.text;
    const emailAddress = request.query.email
    const name = request.query.name

    if (emailAddress != null && name != null) {
        functions.database.collection('waitlist').doc(email).set({
            name: name
        })
    }


    response.send('Email: ' + emailAddress + ' Name: ' + name);
});
