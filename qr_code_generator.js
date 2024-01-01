function generate_qr_code () {
    // Get the input from user
    var user_input = document.getElementById('user_input').value;

    // Clear the existing qr code inside the qr code container
    document.getElementById('qr_code').innerHTML = '';

    // Create a new qr code instance and generate the qr code
    var qr_code = new QRCode(document.getElementById('qr_code'), {
        text: user_input, // Set the text for the qr code
        width: 130,       // Set the width of the qr code
        height: 130       // Set the height of the qr code
    });
}

function download_qr_code () {
    // Get the qr code image
    var qr_code_img = document.getElementById('qr_code').querySelector('img').src;

    // Create a temporary anchor element
    var link = document.createElement('a');

    // Set the download attribute and create a filename
    link.download = 'qrcode.png';

    // Set the href attribute with the data URL of the qr code image
    link.href = qr_code_img;

    // Trigger a click event on the anchor element to initiate the download
    link.click();
}
