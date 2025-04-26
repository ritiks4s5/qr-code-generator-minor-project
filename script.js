const btn = document.getElementById('generate');
const input = document.getElementById('text');
const qrContainer = document.getElementById('qrcode');

btn.addEventListener('click', () => {
  const text = input.value;
  qrContainer.innerHTML = ""; // clear previous QR code

  if (!text) {
    alert("Please enter some text");
    return;
  }

  QRCode.toCanvas(document.createElement('canvas'), text, { width: 200 }, (err, canvas) => {
    if (err) {
      console.error(err);
      alert("Failed to generate QR Code");
      return;
    }
    qrContainer.appendChild(canvas);
  });
});
