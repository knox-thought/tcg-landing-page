document.getElementById("orderBtn").addEventListener("click", function() {
  console.log("สั่งตรวจเลยถูกกด 🚀");

  // ส่ง event เข้า GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "order_button_click",
    button_name: "สั่งตรวจเลย"
  });

  // UX Feedback
  alert("ขอบคุณครับ! ทีมงานจะติดต่อกลับภายใน 24 ชม.");
  // หรือจะ redirect ไปหน้า form ก็ได้
  // window.location.href = "/order-form.html";
});
