function generateQRCode() {
    const name = document.getElementById('name').value;
    const biodata = document.getElementById('biodata').value;
    
    if (!name || !biodata) {
        alert('Please enter both name and biodata');
        return;
    }

    // Data to encode in QR code
    const data = {
        name: name,
        biodata: biodata
    };

    // Convert data object to JSON string
    const jsonData = JSON.stringify(data);

    // Clear previous QR code
    document.getElementById('qrcode').innerHTML = "";

    // Generate QR code using QRCode.js library
    new QRCode(document.getElementById('qrcode'), {
        text: jsonData,
        width: 300,
        height: 300
    });
}
