// Getting references
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handling the form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const fname = (document.getElementById('fname') as HTMLInputElement).value;
    const lname = (document.getElementById('lname') as HTMLInputElement).value;
    const github = (document.getElementById('git-hub') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const awards = (document.getElementById('awards') as HTMLTextAreaElement).value;
    const additional = (document.getElementById('additional') as HTMLTextAreaElement).value;

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
});
