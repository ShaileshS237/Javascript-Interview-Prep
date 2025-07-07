

addTodo = () => {
    let msg = document.getElementById("todo").value;
    if (!msg) return;
    const list = document.getElementById("list");
    const li = document.createElement('li');
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${msg}</span>
        <button class="delete" onclick="deleteTodo(this)">✕</button>
      `;

    list.appendChild(li);
    document.getElementById("todo").value = "";

}


deleteTodo = (button) => {
    const li = button.parentElement;
    li.remove();
}

function toggleComplete(span) {
    span.classList.toggle("completed");
}