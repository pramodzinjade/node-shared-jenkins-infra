function likePost(button) {

    button.classList.toggle("liked");

    if (button.classList.contains("liked")) {
        button.innerHTML = "♥";
    } else {
        button.innerHTML = "♡";
    }
}