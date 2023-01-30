 function verificar(){
  const data = new Date()
  const ano = data.getFullYear()
  const fano = document.getElementById('texto-ano')
  const res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente.')
  } else {
    const fsex = document.getElementsByName('radsex')
    const idade = ano - Number(fano.value)
    let  gênero = '' 
    let  img = document.createElement('img')
    img.setAttribute('id', 'foto')  
    img.style.width = "250px";
    img.style.height = "250px"; 
    img.style.borderRadius = "50%" ; 
    if (fsex[0]. checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', '/Exercicio 2/assets/img/menino-novo.png')
      } else if (idade <21) {
        //jovem
        img.setAttribute('src', '/Exercicio 2/assets/img/jovem-menino.jpg')
      } else if (idade <50) {
        //adulto
        img.setAttribute('src', '/Exercicio 2/assets/img/menino-adulto.jpg')
      } else {
        //idoso
        img.setAttribute('src', '/Exercicio 2/assets/img/idoso.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', '/Exercicio 2/assets/img/menina-nova.jpg')
      }else if (idade <21) {
        //jovem
        img.setAttribute('src', '/Exercicio 2/assets/img/menina-jovem.jpg')
      } else if (idade <50) {
        //adulto
        img.setAttribute('src', '/Exercicio 2/assets/img/menina-adulta.png')
      } else {
        //idoso
        img.setAttribute('src', '/Exercicio 2/assets/img/idosa.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `<p>Detectamos: ${gênero} de ${idade} anos.</p>`
    res.appendChild(img)



  }

}  






















/* function verificar(){
  const data = new Date()
  const ano = data.getFullYear()
  const fano = document.getElementById('texto-ano')
  const res = document.querySelector('div#res')


  if(fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert('[Erro] Verifique os dados e tente novamente')
  } else {
      const fsex = document.getElementsByName('radsex')
      const idade = ano - Number(fano.value)
      let genero = ''
      let img = document.createElement('img')
      let fase_da_vida = ' '
      img.setAttribute('id', 'foto')



      if(fsex[0].checked){
          genero = 'Homem'
      } else if (fsex[1].checked){
          genero = 'Mulher'
      }



      if(idade >= 0 && idade < 10){
          fase_da_vida = 'crianca'
      } else if (idade >= 10 && idade < 21){
          fasevida  = 'jovem'
      } else if (idade >= 21 && idade < 50){
         fase_da_vida = 'adulto'
      } else {
          fase_da_vida  = 'idoso'
      }
      
      var foto_res = `foto_${fase_da_vida}_${genero.toLowerCase()}.png`
      img.setAttribute('src', foto_res)
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)

  }
}  */