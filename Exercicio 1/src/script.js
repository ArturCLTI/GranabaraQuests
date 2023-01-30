function carregar(){
  const data = new Date();

  const msg = document.getElementById("msg");

  const img = document.getElementById("imagem");

  // const hora = data.getHours();
  let hora = 24;

  msg.innerHTML = `Agora são ${hora} horas.`;
  console.log(msg);
  if (hora >= 0 && hora < 12) {
    //BOM dia!
    img.src = "/Exercicio 1/assets/img/manha.jpg";
    document.body.style.background = "#E3E0CE";
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = "/Exercicio 1/assets/img/tarde.jpg";
    document.body.style.background = "#B67749";
  } else {
    //boa noite
    img.src = "/Exercicio 1/assets/img/noite.jpg";
    document.body.style.background = "#1A1F1B";
  }
}