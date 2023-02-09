const _pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

const pecas = document.querySelectorAll(".peca buttom")
const estatitica = document.querySelectorAll(".estatistica-numero")
// console.log(estatitica);

pecas.forEach(peca => {
  peca.addEventListener('click', e => {
    handleClick(e)
    updateStatistics(e)
  })
})

const handleClick = e => {
  const num = e.target.parentNode.querySelector(".controle-contador")
  if (e.target.innerText == '-') {
    num.value = +num.value - 1
  } else {
    num.value = +num.value + 1
  }
}

const updateStatistics = e => {
  estatitica.forEach(elemento => {
    console.log(_pecas[e.target.parentNode.parentNode.firstChild.nextSibling.innerText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")][elemento.parentNode.parentNode.firstChild.nextSibling.innerText.toLowerCase()]);
    elemento.textContent = +elemento.textContent + _pecas[e.target.parentNode.parentNode.firstChild.nextSibling.innerText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")][elemento.parentNode.parentNode.firstChild.nextSibling.innerText.toLowerCase()]
  })
}