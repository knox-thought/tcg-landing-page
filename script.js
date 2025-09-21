document.getElementById("orderBtn").addEventListener("click", function() {
    console.log("สั่งตรวจเลยถูกกด 🚀");
  
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "order_button_click",
      button_name: "สั่งตรวจเลย"
    });
  });
  