//resume//
function showPopup() {
    var confirmResume = confirm("Do you want to see the resume?");
    if (confirmResume) {
        window.location.href = "Georgekutty K John resume.pdf";
    } else {
        
    }
}



// contact form//
function validateForm() {
 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;


    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    if (name == "" || email == "" || message =="") {
        return false;
    }
        return true;
}