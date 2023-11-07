document.getElementById("payButton").onclick = function () {
  var options = {
    key: "rzp_test_6suB3ZZiD60l9g", // Replace with your Razorpay Key
    amount: 100000, // The amount in paise (e.g., 10000 paise = 100 INR)
    name: "Hamid ki Dukaan",
    description: "Payment for your product or service",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/5/311924711/FA/JZ/CU/141123255/bbt-jpg-500x500.jpg", // URL of your company logo
    handler: function (response) {
      // This function is called when the payment is successful
      alert("Payment successful. Payment ID: " + response.razorpay_payment_ids);
    },
    prefill: {
      name: "Customer Name", 
      email: "customer@email.com",
      contact: "customer_phone_number",
    },
  };

  var rzp = new Razorpay(options);
  rzp.open();
};
