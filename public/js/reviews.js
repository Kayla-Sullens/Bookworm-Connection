console.log("Reviews.js 1");

const reviewsFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const title = document.querySelector("#review-title").value.trim(); // trims off white space from the begining and end
  const review = document.querySelector("#review-body").value.trim();
  const user_id = document.querySelector("#review-id").value.trim();
  const rating = document.querySelector("#rating").value.trim();
  // const user_id = 2;
  console.log(JSON.stringify({ title, review, user_id, rating }));
  if (title && review && user_id && rating) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({ title, review, user_id, rating }),
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
