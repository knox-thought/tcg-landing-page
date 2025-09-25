// Contact Button Event Tracking
function trackContactClick(buttonType, location) {
  console.log(`${buttonType} button clicked 🚀`);

  // ส่ง event เข้า GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "contact_button_click",
    button_type: buttonType,
    location: location
  });
}

// Header Contact Buttons
document.getElementById("lineBtn").addEventListener("click", function() {
  trackContactClick("line", "header");
});

document.getElementById("messengerBtn").addEventListener("click", function() {
  trackContactClick("messenger", "header");
});

document.getElementById("phoneBtn").addEventListener("click", function() {
  trackContactClick("phone", "header");
});

// Article Contact Buttons
document.getElementById("articleLineBtn").addEventListener("click", function() {
  trackContactClick("line", "article");
});

document.getElementById("articleMessengerBtn").addEventListener("click", function() {
  trackContactClick("messenger", "article");
});

document.getElementById("articlePhoneBtn").addEventListener("click", function() {
  trackContactClick("phone", "article");
});
