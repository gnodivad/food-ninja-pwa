db.enablePersistence()
    .catch(err => {
        if (err.code == 'failed-precondition') {
            console.log("Persistence failed");
        } else if (err.code == 'unimplemented') {
            console.log("Persistence is not available");
        }
    });

// real-time listener
db.collection('recipes').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            renderRecipe(change.doc.data(), change.doc.id);
        }

        if (change.type === 'removed') {

        }
    })
})
