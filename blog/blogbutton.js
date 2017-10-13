function readBlog(entry) {
    var x = document.getElementById(entry);
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}