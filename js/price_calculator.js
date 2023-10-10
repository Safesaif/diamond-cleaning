

/* 

@Author : Saif-Dine Sahbani
Website : https://sahbani.com/
LinkedIn : https://www.linkedin.com/in/saif-dine/

*/



function calculateTotal() {
  // Get values from input fields
  var quantity = parseFloat(document.getElementById('quantity').value);
  var price = parseFloat(document.getElementById('price').value);

  // Calculate total price
  var total = quantity * price;

  // Display the total
  document.getElementById('total').value = total.toFixed(2);
}