let button = document.querySelector(".Generate");
let input = document.querySelector("#text");


function QRGenerator() {
  if (input.value == "") {
    alert("Enter the Text First :");
    return;
  }
  if (document.querySelector(".QR")) {
    alert("QR exits , Page will get refreshed");
    location.reload();
    return;
  }
  let Image = document.createElement("img");
  Image.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
  let QR = document.createElement("div");
  QR.className = "QR";
  QR.appendChild(Image);
  document.body.appendChild(QR);
}

button.addEventListener("click", () => {
  QRGenerator();

});


