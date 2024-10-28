// scripts/payment.js

// Formatear número de tarjeta
const cardNumber = document.getElementById('cardNumber');
if (cardNumber) {
  cardNumber.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
    let newValue = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        newValue += ' ';
      }
      newValue += value[i];
    }
    e.target.value = newValue;
  });
}

// Formatear fecha de vencimiento
const expDate = document.getElementById('expDate');
if (expDate) {
  expDate.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0,2) + '/' + value.slice(2,4);
    }
    e.target.value = value;
  });
}


// Manejar botones del recibo
const downloadPdfButton = document.querySelector('.button.is-link.is-light');
if (downloadPdfButton) {
  downloadPdfButton.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar contenido al PDF
    doc.setFontSize(16);
    doc.text('Transacción Exitosa', 20, 20);
    doc.setFontSize(12);
    doc.text('Estado de transacción: 29 de Octubre', 20, 30);
    doc.text('Nombre del comercio: Chapacos Proactivos', 20, 40);
    doc.text('Fecha de pago: 29 de Octubre', 20, 50);
    doc.text('Hora de pago: 9:42', 20, 60);
    doc.text('ID de la transacción: #12345678910', 20, 70);
    doc.text('CUS: 123456789', 20, 80);
    doc.text('Concepto:', 20, 90);
    doc.text('Donativo', 20, 100);
    doc.text('Método de pago: Tarjeta de Credito', 20, 130);
    doc.text('Costo subtotal: $1000', 20, 140);
    doc.setFontSize(14);
    doc.text('Total: $1000', 20, 150);

    // Descargar el PDF
    doc.save('recibo_transaccion.pdf');
  });
}


const finalizeButton = document.querySelector('.button.is-primary');
if (finalizeButton) {
  finalizeButton.addEventListener('click', () => {
    window.location.href = '/';  // Redirigir a la página principal
  });
}