// Tangkap form dan pesan
const orderForm = document.getElementById('orderForm');
const responseMsg = document.getElementById('responseMsg');

orderForm.addEventListener('submit', function(e){
  e.preventDefault();

  const name = orderForm[0].value;
  const email = orderForm[1].value;
  const quantity = orderForm[2].value;

  // Simple validasi
  if(name && email && quantity > 0){
    responseMsg.textContent = `Terima kasih ${name}, pesanan ${quantity} Puma Speed berhasil dikirim!`;
    orderForm.reset();
  } else {
    responseMsg.textContent = `Mohon isi semua data dengan benar.`;
    responseMsg.style.color = 'red';
  }
});
