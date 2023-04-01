
let altura = 0
let largura = 0
let lifes = 1
let temp = 30

let createBolsonaroTemp = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
  createBolsonaroTemp = 1500
} else if(nivel === 'dificl') {
  createBolsonaroTemp = 1100
} else if (nivel === 'fuga') {
  createBolsonaroTemp = 900
}

function adjustestageSize(){
   altura = window.innerHeight
   largura = window.innerWidth
}

adjustestageSize()

let stopwatch = setInterval(function(){
  temp -=1
  if(temp < 0) {
    clearInterval(stopwatch)
    clearInterval(createBolsonaro)
    window.location.href = 'vitoria.html'
  }else{
    document.getElementById('stopwatch').innerHTML = temp
  }
},1000)

  function randomPosition() {
    if (document.getElementById('bolsonaro')) {
      document.getElementById('bolsonaro').remove()

      if(lifes > 3) {
        window.location.href = 'game-over.html'
      }else {
        document.getElementById('v' + lifes).src="/imagens/coracao_vazio.png"
      }

      lifes++
    }

      let positionX = Math.floor(Math.random() * largura) -90
      let positionY = Math.floor(Math.random() * altura) -90

      positionX = positionX < 0 ? 0 : positionX
      positionY = positionY < 0 ? 0 : positionY

      let bolsonaro = document.createElement('img')
      bolsonaro.src = '/imagens/bolsonaro.png'
      bolsonaro.className = randomSize() + ' ' + sideRandom()
      bolsonaro.style.left = positionX + 'px'
      bolsonaro.style.top = positionY + 'px'
      bolsonaro.style.position = 'absolute'
      bolsonaro.id = 'bolsonaro'
      bolsonaro.onclick = function() {
        this.remove()
      }

      document.body.appendChild(bolsonaro)

}

function randomSize() {
  let classe = Math.floor(Math.random() * 3)

  switch(classe) {
    case 0:
      return 'bolsonaro1'
    case 1:
      return 'bolsonaro2'
    case 2:
      return 'bolsonaro3'
  }
}

function sideRandom () {
  let classe = Math.floor(Math.random() * 2)

  switch(classe) {
    case 0:
      return 'sideA'
    case 1:
      return 'sideB'
  }
}