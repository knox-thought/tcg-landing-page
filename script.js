// Main Order Button
document.getElementById("orderBtn").addEventListener("click", function() {
  console.log("สั่งตรวจเลยถูกกด 🚀");

  // ส่ง event เข้า GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "order_button_click",
    button_name: "สั่งตรวจเลย",
    location: "header"
  });

  // UX Feedback
  alert("ขอบคุณครับ! ทีมงานจะติดต่อกลับภายใน 24 ชม.");
});

// Article Order Button
document.getElementById("articleOrderBtn").addEventListener("click", function() {
  console.log("สั่งตรวจการ์ดเลยถูกกด 🚀");

  // ส่ง event เข้า GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "order_button_click",
    button_name: "สั่งตรวจการ์ดเลย",
    location: "article"
  });

  // UX Feedback
  alert("ขอบคุณครับ! ทีมงานจะติดต่อกลับภายใน 24 ชม.");
});
