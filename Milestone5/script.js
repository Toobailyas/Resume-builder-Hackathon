// Getting references
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// shareable link & pdf download
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handling the form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var github = document.getElementById('github').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var awards = document.getElementById('awards').value;
    var additional = document.getElementById('additional').value;
    //save the data in loca storage for the username as the key
    var resumeData = {
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        github: github,
        address: address,
        objective: objective,
        education: education,
        experience: experience,
        skills: skills,
        awards: awards,
        additional: additional
    };
    //saving the data locally
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generating resume dynamically
    var resumeHTML = "\n        <div>\n            <h2><b>Editable Resume</b></h2>\n            <h3>Personal Information</h3>\n \n            <h2><span contenteditable = \"true\" > ".concat(fname, " ").concat(lname, "</span></h2>\n            <p><strong><span contenteditable = \"true\" >Email:</strong> ").concat(email, "</span></p>\n            <p><strong><span contenteditable = \"true\" >GitHub:</strong> <a href=\"https://github.com/").concat(github, "\">").concat(github, "</span></a></p>\n            <p><strong><span contenteditable = \"true\" >Phone:</strong> ").concat(phone, "</span></p>\n            <p><strong><span contenteditable = \"true\" >Address:</strong> ").concat(address, "</span></p>\n        </div>\n        <hr>\n        <h3>Education</h3>\n        <p contenteditable = \"true\">").concat(education, "</p>\n        <hr>\n        <h3>Work Experience</h3>\n        <p contenteditable = \"true\">").concat(experience, "</p>\n        <hr>\n        <h3>Skills</h3>\n        <p contenteditable = \"true\"> ").concat(skills, "</p>\n        <hr>\n        <h3>Awards</h3>\n        <p contenteditable = \"true\">").concat(awards, "</p>\n        <hr>\n        <h3>Additional Information</h3>\n        <p contenteditable = \"true\">").concat(additional, "</p>\n        <hr>\n        \n    ");
    // Display generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    //Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('fname').value =
                resumeData.name;
            document.getElementById('lname').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('github').value =
                resumeData.name;
            document.getElementById('address').value =
                resumeData.name;
            document.getElementById('objective').value =
                resumeData.name;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
            document.getElementById('awards').value =
                resumeData.name;
            document.getElementById('additional').value =
                resumeData.name;
        }
    }
});
var form = document.getElementById('resume-form');
console.log("Form element:", form); // Check if form is found
var resumeDisplayElement = document.getElementById('resume-display');
console.log("Resume Display element:", resumeDisplayElement);
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handling the form submission
form.addEventListener('submit', function (event) {
    console.log("Submit event triggered"); // Check if submit is triggered
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    console.log("Username:", username); // Log the username input value
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var github = document.getElementById('git-hub').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var awards = document.getElementById('awards').value;
    var additional = document.getElementById('additional').value;
    console.log("Form data collected:", {
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        github: github,
        address: address,
        objective: objective,
        education: education,
        experience: experience,
        skills: skills,
        awards: awards,
        additional: additional
    });
    // Save the data locally
    var resumeData = {
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        github: github,
        address: address,
        objective: objective,
        education: education,
        experience: experience,
        skills: skills,
        awards: awards,
        additional: additional
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    console.log("Data saved to localStorage");
    // Generating resume dynamically
    var resumeHTML = "\n        <div>\n            <h2><b>Editable Resume</b></h2>\n            <h3>Personal Information</h3>\n            <h2><span contenteditable=\"true\">".concat(fname, " ").concat(lname, "</span></h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>GitHub:</strong> <a href=\"https://github.com/").concat(github, "\">").concat(github, "</a></p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n        </div>\n        <hr>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <hr>\n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        <hr>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n        <hr>\n        <h3>Awards</h3>\n        <p contenteditable=\"true\">").concat(awards, "</p>\n        <hr>\n        <h3>Additional Information</h3>\n        <p contenteditable=\"true\">").concat(additional, "</p>\n        <hr>\n    ");
    // Display generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    console.log("Resume displayed");
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
    console.log("Shareable URL generated:", shareableURL);
});
