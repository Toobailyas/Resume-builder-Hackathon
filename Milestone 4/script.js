// Getting references
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handling the form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var github = document.getElementById('git-hub').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var awards = document.getElementById('awards').value;
    var additional = document.getElementById('additional').value;
    // Generating resume dynamically
    var resumeHTML = "\n        <div>\n            <h2><b>Editable Resume</b></h2>\n            <h3>Personal Information</h3>\n \n            <h2><span contenteditable = \"true\" > ".concat(fname, " ").concat(lname, "</span></h2>\n            <p><strong><span contenteditable = \"true\" >Email:</strong> ").concat(email, "</span></p>\n            <p><strong><span contenteditable = \"true\" >GitHub:</strong> <a href=\"https://github.com/").concat(github, "\">").concat(github, "</span></a></p>\n            <p><strong><span contenteditable = \"true\" >Phone:</strong> ").concat(phone, "</span></p>\n            <p><strong><span contenteditable = \"true\" >Address:</strong> ").concat(address, "</span></p>\n        </div>\n        <hr>\n        <h3>Education</h3>\n        <p contenteditable = \"true\">").concat(education, "</p>\n        <hr>\n        <h3>Work Experience</h3>\n        <p contenteditable = \"true\">").concat(experience, "</p>\n        <hr>\n        <h3>Skills</h3>\n        <p contenteditable = \"true\"> ").concat(skills, "</p>\n        <hr>\n        <h3>Awards</h3>\n        <p contenteditable = \"true\">").concat(awards, "</p>\n        <hr>\n        <h3>Additional Information</h3>\n        <p contenteditable = \"true\">").concat(additional, "</p>\n        <hr>\n    ");
    // Display generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
});
