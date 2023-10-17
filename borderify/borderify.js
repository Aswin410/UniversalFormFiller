// Select the <form> element (you can use a more specific selector if needed)
const form = document.querySelector('form');

// Check if the form element was found
if (form) {
  // Select all form elements within the form
  const formElements = form.querySelectorAll('input[type="text"], textarea,input[type="email"]');

  // Iterate through the form elements
  formElements.forEach(element => {
    // Check if the placeholder attribute contains the text "search" (case-insensitive)
    if (element.placeholder.toLowerCase().includes("search")) {
      // Exclude this element from the styling
      return;
    }

    // Apply the style to elements that don't have "search" in their placeholder
    element.style.border = "5px solid red";
  });
}

