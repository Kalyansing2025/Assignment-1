// var quill = new Quill('#editor-container', {
//     theme: 'snow',
//     placeholder: 'Write Here...',

// });

// function getEditorContent() {
//     var content = quill.root.innerHTML;
//     document.getElementById('editor-content').innerHTML = content;
// }

// Toggle Sidebar Function

// Toggle Sidebar Function
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");

    // Debugging: Check if class is being added
    console.log("Sidebar classes:", sidebar.classList);
}

// Toggle Submenu (Dropdown)
document.querySelectorAll(".toggle-submenu").forEach((menu) => {
    menu.addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("d-block"); // Show submenu
        this.querySelector("i.fa-chevron-down").classList.toggle("rotate"); // Rotate arrow
    });
});


