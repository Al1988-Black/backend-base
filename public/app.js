document.addEventListener("click", (event) => {
    if (event.target.dataset.type === "remove") {
        const id = event.target.dataset.id;
        remove(id).then(() => {
            event.target.closest("li").remove(); // ближайщий к кнопке li  удалить
        });
    }
});

document.addEventListener("click", (event) => {
    if (event.target.dataset.type === "update") {
        const newTitle = prompt(
            "Введите новое значение",
            event.target.dataset.title
        );
        console.log(newTitle);
        if (newTitle && newTitle !== event.target.dataset.id) {
            update({ title: newTitle, id: event.target.dataset.id }).then(
                () => {
                    const parent = event.target.closest("li");
                    parent.innerHTML = parent.innerHTML.replace(
                        event.target.dataset.title,
                        newTitle
                    );
                    event.target.dataset.title = newTitle;
                }
            );
        }
    }
});

async function remove(id) {
    await fetch(`/${id}`, {
        method: "DELETE",
    });
}

async function update(newData) {
    await fetch(`/${JSON.stringify(newData)}`, {
        method: "PUT",
    });
}

// async function update(newData) {
//     await fetch(`/`, {
//         method: "PUT",
//         body: JSON.stringify(newData)
//     });
// } // почемуто так не смог запусить, body приходит пустым((((
