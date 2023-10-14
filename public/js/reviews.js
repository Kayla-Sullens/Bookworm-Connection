// File for POSTING, DELETING and Editing if we get to it.
console.log("Reviews.jssafsdfasd");

const reviewsFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const title = document.querySelector("#review-title").value.trim(); // trims off white space from the begining and end
  const review = document.querySelector("#review-body").value.trim();
  const user_id= document.querySelector("#review-username").value.trim();
  // const user_id = 1;

  if (title && review && user_id) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({ title, review, user_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the reviews page
      document.location.replace("/myreviews");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#review-form")
  .addEventListener("submit", reviewsFormHandler);
