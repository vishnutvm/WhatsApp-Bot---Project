import qrcode from 'qrcode-terminal';

// Function to generate and display QR code
const generateQRCode = (qrData) => {
  qrcode.generate(qrData, { small: true });
  console.log('Scan the QR code above to log in.');
};

export { generateQRCode };
