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

// add new recipe
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const recipe = {
        title: form.title.value,
        ingredients: form.ingredients.value
    };

    db.collection('recipes').add(recipe)
        .catch(err => console.log(err));

    form.title.value = '';
    form.title.ingredients = '';
})
