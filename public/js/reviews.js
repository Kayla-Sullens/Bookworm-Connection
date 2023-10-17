// File for POSTING, DELETING and Editing if we get to it.
const reviewsFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const title = document.querySelector("#title").value.trim(); // trims off white space from the begining and end
    const reviewBody = document.querySelector("#reviewBody").value.trim();
    const userName = document.querySelector("#userName").value.trim();
    if (title && reviewBody && userName) {
        // Send a POST request to the API endpoint
        const response = await fetch("/api/myreviews", {
            method: "POST",
            body: JSON.stringify({ title, reviewBody, userName }),
            headers: { "Content-Type": "application/json" },
        });
        console.log(response.ok);
        if (response.ok) {
            // If successful, redirect the browser to the reviews page
            document.location.replace("/myreviews");
            console.log("Correct")
        } else {
            alert(response.statusText);
        }
    }
};
document
    .querySelector("#postReview")
    .addEventListener("click", reviewsFormHandler);