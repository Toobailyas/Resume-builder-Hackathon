// Getting references
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// shareable link & pdf download

const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handling the form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const fname = (document.getElementById('fname') as HTMLInputElement).value;
    const lname = (document.getElementById('lname') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const awards = (document.getElementById('awards') as HTMLTextAreaElement).value;
    const additional = (document.getElementById('additional') as HTMLTextAreaElement).value;

    //save the data in loca storage for the username as the key
    const resumeData ={
        fname,
        lname,
        email,
        phone,
        github,
        address,
        objective,
        education,
        experience,
        skills,
        awards,
        additional
    };

    //saving the data locally
    localStorage.setItem(username,JSON.stringify(resumeData));


    // Generating resume dynamically
    const resumeHTML = `
        <div>
            <h2><b>Editable Resume</b></h2>
            <h3>Personal Information</h3>
 
            <h2><span contenteditable = "true" > ${fname} ${lname}</span></h2>
            <p><strong><span contenteditable = "true" >Email:</strong> ${email}</span></p>
            <p><strong><span contenteditable = "true" >GitHub:</strong> <a href="https://github.com/${github}">${github}</span></a></p>
            <p><strong><span contenteditable = "true" >Phone:</strong> ${phone}</span></p>
            <p><strong><span contenteditable = "true" >Address:</strong> ${address}</span></p>
        </div>
        <hr>
        <h3>Education</h3>
        <p contenteditable = "true">${education}</p>
        <hr>
        <h3>Work Experience</h3>
        <p contenteditable = "true">${experience}</p>
        <hr>
        <h3>Skills</h3>
        <p contenteditable = "true"> ${skills}</p>
        <hr>
        <h3>Awards</h3>
        <p contenteditable = "true">${awards}</p>
        <hr>
        <h3>Additional Information</h3>
        <p contenteditable = "true">${additional}</p>
        <hr>
        
    `;

    // Display generated resume
    resumeDisplayElement.innerHTML = resumeHTML;

    //Generate a shareable URL with the username only
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    // Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to save as PDF

});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {
    // Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value =
username;
(document.getElementById('fname') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('lname') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('github') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('address') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('objective') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('education') as HTMLTextAreaElement).value =
resumeData.education;
(document.getElementById('experience') as HTMLTextAreaElement).value
= resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value =
resumeData.skills;
(document.getElementById('awards') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('additional') as HTMLInputElement).value =
resumeData.name;
}
}

});

const form = document.getElementById('resume-form') as HTMLFormElement;
console.log("Form element:", form); // Check if form is found

const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
console.log("Resume Display element:", resumeDisplayElement);

const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handling the form submission
form.addEventListener('submit', (event: Event) => {
    console.log("Submit event triggered"); // Check if submit is triggered
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    console.log("Username:", username); // Log the username input value

    const fname = (document.getElementById('fname') as HTMLInputElement).value;
    const lname = (document.getElementById('lname') as HTMLInputElement).value;
    const github = (document.getElementById('git-hub') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const awards = (document.getElementById('awards') as HTMLTextAreaElement).value;
    const additional = (document.getElementById('additional') as HTMLTextAreaElement).value;

    console.log("Form data collected:", {
        fname,
        lname,
        email,
        phone,
        github,
        address,
        objective,
        education,
        experience,
        skills,
        awards,
        additional
    });

    // Save the data locally
    const resumeData = {
        fname,
        lname,
        email,
        phone,
        github,
        address,
        objective,
        education,
        experience,
        skills,
        awards,
        additional
    };

    localStorage.setItem(username, JSON.stringify(resumeData));
    console.log("Data saved to localStorage");

    // Generating resume dynamically
    const resumeHTML = `
        <div>
            <h2><b>Editable Resume</b></h2>
            <h3>Personal Information</h3>
            <h2><span contenteditable="true">${fname} ${lname}</span></h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>GitHub:</strong> <a href="https://github.com/${github}">${github}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
        </div>
        <hr>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <hr>
        <h3>Work Experience</h3>
        <p contenteditable="true">${experience}</p>
        <hr>
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
        <hr>
        <h3>Awards</h3>
        <p contenteditable="true">${awards}</p>
        <hr>
        <h3>Additional Information</h3>
        <p contenteditable="true">${additional}</p>
        <hr>
    `;

    // Display generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    console.log("Resume displayed");

    // Generate a shareable URL with the username only
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
    console.log("Shareable URL generated:", shareableURL);
});





