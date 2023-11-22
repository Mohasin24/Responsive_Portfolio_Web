// General Section
function underDev(){

    alert("This functionality is under development! Will be available soon.");
}

// Download CV Section

let downloadURL = "https://drive.google.com/file/d/1XxYy_gzF3VtmqDkR6dHqSIshK68OHEjY/view?usp=drive_link"

function downloadCV(){
    
    let anchor = document.createElement('a');

    anchor.href = downloadURL;
    anchor.target = "_blank";

    anchor.click();
}
// End Download CV Section


// Updating the date on footer

const date = document.getElementById("date");
const currDate = new Date();
date.textContent= currDate.getFullYear()
// End
