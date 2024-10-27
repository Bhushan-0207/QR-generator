const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadbtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');
let size = sizes.value;

generateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change', (e)=>{
    size = e.target.value;
    isEmptyInput();
});

downloadbtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');
    if(img !== null){
        let imgArr = img.getAttribute('src');
        downloadbtn.setAttribute("href",imgArr);
    }
    else{
        downloadbtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput(){
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }
    // else{
    //     alert("Enter the text or Url to generate your QR code");
    // }

    qrText.value.length > 0 ? generateQRCode() :  alert("Enter the text or Url to generate your QR code");
}
function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:'#fff',
        colorDark:'#000'
    });
}