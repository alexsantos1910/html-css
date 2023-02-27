const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const imagem = document.getElementById("imagem");
btn1.addEventListener("click", function() {
	imagem.src = "amazonas.jpg";
});

btn2.addEventListener("click", function() {
	imagem.src = "atlantica.jpg";
});

btn3.addEventListener("click", function() {
	imagem.src = "cerrado.jpg";
});
