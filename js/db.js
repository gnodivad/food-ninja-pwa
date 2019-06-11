// real-time listener
db.collection('recipes').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {

        }

        if (change.type === 'removed') {

        }
    })
})
