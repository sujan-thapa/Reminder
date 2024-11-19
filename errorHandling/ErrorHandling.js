
function addTask() {
    try {
        const title = document.getElementById("task-input").value.trim()
        const description = document.getElementById("description-input").value.trim()
        const level = document.getElementById("tag-input").value.trim()
        const user = document.getElementById("user-input").value.trim()

        if (!title || !description || !level || !user) {
            throw new Error("One of the input field is missing");

            return;

        }
        const newDiv = document.createElement("div");
        // and give it some content
        const taskTitle = document.createElement("h1");
        taskTitle.textContent = title;

        const taskdDescription = document.createElement("p");
        taskdDescription.textContent = description;

        const difficultyLevel = document.createElement("p");
        difficultyLevel.textContent = difficultyLevel;
        
        const userName = document.createElement("p");
        userName.textContent = userName;

        // add the text node to the newly created div
        newDiv.appendChild(taskTitle);
        newDiv.appendChild(taskdDescription);
        newDiv.appendChild(difficultyLevel);
        newDiv.appendChild(userName);

        

        document.getElementById("task-list").appendChild(newDiv);


    } catch (error) {
        console.log("Error:", error);

    }










}


function clearTasks() {

}

document.addEventListener('DOMContentLoaded', function (e) {

    try {
        const addButton = document.getElementById("add-task");
        const clearTasks = document.getElementById("clear-tasks")
        e.preventDefault() // This prevents the window from reloading


        addButton.addEventListener('click', addTask);
        // addButton.addEventListener('click',clearTasks());


    } catch (error) {
        console.log(error);
    }
})