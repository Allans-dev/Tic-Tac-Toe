var char
var oppChar

function animateDisplay () {
  document.querySelector('.chooseText').style.display = 'none'
  $('.display').css({'background-color': 'white', 'opacity': '0.3', 'padding-top': '0px'})
  $('.display').animate({'width': '450px', 'height': '450px', 'margin': '140px auto 0px -225px'}, 400)
  setTimeout(function () {
    $('#gameBoard').css('display', 'block')
    document.querySelector('button').style.display = 'block'
  }, 400)
}

function displayX () {
  // display
  document.body.style.backgroundColor = '#930000'
  document.querySelector('button').style.backgroundColor = '#e40000'
  document.querySelector('button').style.borderColor = '#e40000'
  animateDisplay()
  char = 'X'
  oppChar = 'O'
}

function displayO () {
    // display
  document.body.style.backgroundColor = '#040083'
  document.querySelector('button').style.backgroundColor = '#0400fd'
  document.querySelector('button').style.borderColor = '#0400fd'
  animateDisplay()
  char = 'O'
  oppChar = 'X'
}

function reset () {
  $('#gameBoard').css({'display': 'none'})
  document.querySelector('#postGame').style.display = 'none'
  document.querySelector('button').style.display = 'none'
  document.body.style.backgroundColor = '#017F01'
  document.querySelector('.chooseText').style.display = 'block'
  $('.display').css({'background-color': '#00a31d', 'opacity': '1', 'padding-top': '25px'})
  $('.display').animate({'width': '400px', 'height': '100px', 'margin': '270px auto 0px auto'}, 400)
  document.querySelector('#topLeft').innerHTML = ''
  document.querySelector('#topMid').innerHTML = ''
  document.querySelector('#topRight').innerHTML = ''
  document.querySelector('#midLeft').innerHTML = ''
  document.querySelector('#midMid').innerHTML = ''
  document.querySelector('#midRight').innerHTML = ''
  document.querySelector('#botLeft').innerHTML = ''
  document.querySelector('#botMid').innerHTML = ''
  document.querySelector('#botRight').innerHTML = ''
}

function XorO (id) {
  if (document.getElementById(id).innerHTML !== char && document.getElementById(id).innerHTML !== oppChar) {
    document.getElementById(id).innerHTML = char
    tie()
    AI(id)
  }
}

function AI (position) {
  // to win
  if (((document.querySelector('#topMid').innerHTML === oppChar && document.querySelector('#topRight').innerHTML === oppChar) ||
  (document.querySelector('#midLeft').innerHTML === oppChar && document.querySelector('#botLeft').innerHTML === oppChar) ||
  (document.querySelector('#midMid').innerHTML === oppChar && document.querySelector('#botRight').innerHTML === oppChar)) &&
  (document.querySelector('#topLeft').innerHTML !== char && document.querySelector('#topLeft').innerHTML !== oppChar)) {
    document.querySelector('#topLeft').innerHTML = oppChar
    lose()
  } else if (((document.querySelector('#topLeft').innerHTML === oppChar && document.querySelector('#topRight').innerHTML === oppChar) ||
(document.querySelector('#midMid').innerHTML === oppChar && document.querySelector('#botMid').innerHTML === oppChar)) &&
(document.querySelector('#topMid').innerHTML !== char && document.querySelector('#topMid').innerHTML !== oppChar)) {
    document.querySelector('#topMid').innerHTML = oppChar
    lose()
  } else if (((document.querySelector('#topLeft').innerHTML === oppChar && document.querySelector('#topMid').innerHTML === oppChar) ||
(document.querySelector('#botLeft').innerHTML === oppChar && document.querySelector('#midMid').innerHTML === oppChar) ||
(document.querySelector('#midRight').innerHTML === oppChar && document.querySelector('#botRight').innerHTML === oppChar)) &&
(document.querySelector('#topRight').innerHTML !== char && document.querySelector('#topRight').innerHTML !== oppChar)) {
    document.querySelector('#topRight').innerHTML = oppChar
    lose()
  } else if (((document.querySelector('#topRight').innerHTML === oppChar && document.querySelector('#botRight').innerHTML === oppChar) ||
(document.querySelector('#midLeft').innerHTML === oppChar && document.querySelector('#midMid').innerHTML === oppChar)) &&
    (document.querySelector('#midRight').innerHTML !== char && document.querySelector('#midRight').innerHTML !== oppChar)) {
    document.querySelector('#midRight').innerHTML = oppChar
    lose()
  } else if (((document.querySelector('#topRight').innerHTML === oppChar && document.querySelector('#midRight').innerHTML === oppChar) ||
(document.querySelector('#topLeft').innerHTML === oppChar && document.querySelector('#midMid').innerHTML === oppChar) ||
(document.querySelector('#botLeft').innerHTML === oppChar && document.querySelector('#botMid').innerHTML === oppChar)) &&
 (document.querySelector('#botRight').innerHTML !== char && document.querySelector('#botRight').innerHTML !== oppChar)) {
    document.querySelector('#botRight').innerHTML = oppChar
    lose()
  } else if ((document.querySelector('#botRight').innerHTML === oppChar && document.querySelector('#botLeft').innerHTML === oppChar) &&
(document.querySelector('#botMid').innerHTML !== char && document.querySelector('#botMid').innerHTML !== oppChar)) {
    document.querySelector('#botMid').innerHTML = oppChar
    lose()
  } else if (((document.querySelector('#botRight').innerHTML === oppChar && document.querySelector('#botMid').innerHTML === oppChar) ||
 (document.querySelector('#topRight').innerHTML === oppChar && document.querySelector('#midMid').innerHTML === oppChar) ||
(document.querySelector('#topLeft').innerHTML === oppChar && document.querySelector('#midLeft').innerHTML === oppChar)) &&
(document.querySelector('#botLeft').innerHTML !== char && document.querySelector('#botLeft').innerHTML !== oppChar)) {
    document.querySelector('#botLeft').innerHTML = oppChar
    lose()
  } else if (((document.querySelector('#topLeft').innerHTML === oppChar && document.querySelector('#botLeft').innerHTML === oppChar) ||
(document.querySelector('#midMid').innerHTML === oppChar && document.querySelector('#midRight').innerHTML === oppChar)) &&
(document.querySelector('#midLeft').innerHTML !== char && document.querySelector('#midLeft').innerHTML !== oppChar)) {
    document.querySelector('#midLeft').innerHTML = oppChar
    lose()
    // blocking sides
  } else if (((document.querySelector('#topMid').innerHTML === char && document.querySelector('#topRight').innerHTML === char) ||
    (document.querySelector('#midLeft').innerHTML === char && document.querySelector('#botLeft').innerHTML === char)) &&
    (document.querySelector('#topLeft').innerHTML !== char && (document.querySelector('#topLeft').innerHTML !== oppChar))) {
    document.querySelector('#topLeft').innerHTML = oppChar
  } else if (((document.querySelector('#topLeft').innerHTML === char && document.querySelector('#topRight').innerHTML === char)) &&
  (document.querySelector('#topMid').innerHTML !== char && document.querySelector('#topMid').innerHTML !== oppChar)) {
    document.querySelector('#topMid').innerHTML = oppChar
  } else if (((document.querySelector('#topLeft').innerHTML === char && document.querySelector('#topMid').innerHTML === char) ||
  (document.querySelector('#midRight').innerHTML === char && document.querySelector('#botRight').innerHTML === char)) &&
  (document.querySelector('#topRight').innerHTML !== char && document.querySelector('#topRight').innerHTML !== oppChar)) {
    document.querySelector('#topRight').innerHTML = oppChar
  } else if (((document.querySelector('#topRight').innerHTML === char && document.querySelector('#botRight').innerHTML === char)) &&
      (document.querySelector('#midRight').innerHTML !== char && document.querySelector('#midRight').innerHTML !== oppChar)) {
    document.querySelector('#midRight').innerHTML = oppChar
  } else if (((document.querySelector('#topRight').innerHTML === char && document.querySelector('#midRight').innerHTML === char) ||
  (document.querySelector('#botLeft').innerHTML === char && document.querySelector('#botMid').innerHTML === char)) &&
   (document.querySelector('#botRight').innerHTML !== char && document.querySelector('#botRight').innerHTML !== oppChar)) {
    document.querySelector('#botRight').innerHTML = oppChar
  } else if (((document.querySelector('#botRight').innerHTML === char && document.querySelector('#botLeft').innerHTML === char)) &&
  (document.querySelector('#botMid').innerHTML !== char && document.querySelector('#botMid').innerHTML !== oppChar)) {
    document.querySelector('#botMid').innerHTML = oppChar
  } else if (((document.querySelector('#botRight').innerHTML === char && document.querySelector('#botMid').innerHTML === char) ||
  (document.querySelector('#topLeft').innerHTML === char && document.querySelector('#midLeft').innerHTML === char)) &&
  (document.querySelector('#botLeft').innerHTML !== char && document.querySelector('#botLeft').innerHTML !== oppChar)) {
    document.querySelector('#botLeft').innerHTML = oppChar
  } else if (((document.querySelector('#topLeft').innerHTML === char && document.querySelector('#botLeft').innerHTML === char)) &&
  (document.querySelector('#midLeft').innerHTML !== char && document.querySelector('#midLeft').innerHTML !== oppChar)) {
    document.querySelector('#midLeft').innerHTML = oppChar
  } else {
    switch (position) {
      case 'topLeft':
        if (document.querySelector('#midMid').innerHTML === char) {
          document.querySelector('#botRight').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML !== char && document.querySelector('#midMid').innerHTML !== oppChar) {
          document.getElementById('midMid').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar) {
          document.querySelector('#topMid').innerHTML = oppChar
        }
        break
      case 'topMid':
        if (document.querySelector('#midMid').innerHTML === char) {
          document.querySelector('#botMid').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#topLeft').innerHTML !== oppChar && document.querySelector('#topLeft').innerHTML !== char)) {
          document.querySelector('#topLeft').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#topRight').innerHTML !== oppChar && document.querySelector('#topRight').innerHTML !== char)) {
          document.querySelector('#topRight').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#botRight').innerHTML !== oppChar && document.querySelector('#botRight').innerHTML !== char)) {
          document.querySelector('#botRight').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#botLeft').innerHTML !== oppChar && document.querySelector('#botLeft').innerHTML !== char)) {
          document.querySelector('#botLeft').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML !== char && document.querySelector('#midMid').innerHTML !== oppChar) {
          document.getElementById('midMid').innerHTML = oppChar
        }
        break
      case 'topRight':
        if (document.querySelector('#midMid').innerHTML === char) {
          document.querySelector('#botLeft').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML !== char && document.querySelector('#midMid').innerHTML !== oppChar) {
          document.getElementById('midMid').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar) {
          document.querySelector('#midRight').innerHTML = oppChar
        }
        break
      case 'midLeft':
        if (document.querySelector('#midMid').innerHTML === char) {
          document.querySelector('#midRight').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#topLeft').innerHTML !== oppChar && document.querySelector('#topLeft').innerHTML !== char)) {
          document.querySelector('#topLeft').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#topRight').innerHTML !== oppChar && document.querySelector('#topRight').innerHTML !== char)) {
          document.querySelector('#topRight').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#botRight').innerHTML !== oppChar && document.querySelector('#botRight').innerHTML !== char)) {
          document.querySelector('#botRight').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#botLeft').innerHTML !== oppChar && document.querySelector('#botLeft').innerHTML !== char)) {
          document.querySelector('#botLeft').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML !== char && document.querySelector('#midMid').innerHTML !== oppChar) {
          document.getElementById('midMid').innerHTML = oppChar
        }
        break
      case 'midMid':
        document.getElementById('topRight').innerHTML = oppChar
        break
      case 'midRight':
        if (document.querySelector('#midMid').innerHTML === char) {
          document.querySelector('#midLeft').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#topLeft').innerHTML !== oppChar && document.querySelector('#topLeft').innerHTML !== char)) {
          document.querySelector('#topLeft').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#topRight').innerHTML !== oppChar && document.querySelector('#topRight').innerHTML !== char)) {
          document.querySelector('#topRight').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#botRight').innerHTML !== oppChar && document.querySelector('#botRight').innerHTML !== char)) {
          document.querySelector('#botRight').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#botLeft').innerHTML !== oppChar && document.querySelector('#botLeft').innerHTML !== char)) {
          document.querySelector('#botLeft').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML !== char && document.querySelector('#midMid').innerHTML !== oppChar) {
          document.getElementById('midMid').innerHTML = oppChar
        }
        break
      case 'botLeft':
        if (document.querySelector('#midMid').innerHTML === char && document.querySelector('#topLeft').innerHTML !== char &&
       document.querySelector('#topLeft').innerHTML !== oppChar) {
          document.querySelector('#topLeft').innerHTML = oppChar
        } else if ((document.querySelector('#topLeft').innerHTML === oppChar || document.querySelector('#topLeft').innerHTML === char) &&
        document.querySelector('#topMid').innerHTML !== char) {
          document.querySelector('#topMid').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML !== char && document.querySelector('#midMid').innerHTML !== oppChar) {
          document.getElementById('midMid').innerHTML = oppChar
        } else if (document.querySelector('#midLeft').innerHTML !== char && document.querySelector('#midLeft').innerHTML !== oppChar) {
          document.getElementById('midLeft').innerHTML = oppChar
        } else if (document.querySelector('#midRight').innerHTML !== char && document.querySelector('#midRight').innerHTML !== oppChar) {
          document.getElementById('midRight').innerHTML = oppChar
        }
        break
      case 'botMid':
        if (document.querySelector('#midMid').innerHTML === char) {
          document.querySelector('#topMid').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#topLeft').innerHTML !== oppChar && document.querySelector('#topLeft').innerHTML !== char)) {
          document.querySelector('#topLeft').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#topRight').innerHTML !== oppChar && document.querySelector('#topRight').innerHTML !== char)) {
          document.querySelector('#topRight').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#botRight').innerHTML !== oppChar && document.querySelector('#botRight').innerHTML !== char)) {
          document.querySelector('#botRight').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar &&
           (document.querySelector('#botLeft').innerHTML !== oppChar && document.querySelector('#botLeft').innerHTML !== char)) {
          document.querySelector('#botLeft').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML !== char && document.querySelector('#midMid').innerHTML !== oppChar) {
          document.getElementById('midMid').innerHTML = oppChar
        }
        break
      case 'botRight':
        if (document.querySelector('#midMid').innerHTML === char && document.querySelector('#topLeft').innerHTML !== oppChar) {
          document.querySelector('#topLeft').innerHTML = oppChar
        } else if (document.querySelector('#topLeft').innerHTML === oppChar && document.querySelector('#topMid').innerHTML !== char) {
          document.getElementById('topMid').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML === oppChar) {
          document.querySelector('#botMid').innerHTML = oppChar
        } else if (document.querySelector('#midMid').innerHTML !== char && document.querySelector('#midMid').innerHTML !== oppChar) {
          document.getElementById('midMid').innerHTML = oppChar
        }
        break
      default:

    } // switch
  } // else
} // AI

function tie () {
  if ((document.querySelector('#topLeft').innerHTML === char || document.querySelector('#topLeft').innerHTML === oppChar) &&
  (document.querySelector('#topMid').innerHTML === char || document.querySelector('#topMid').innerHTML === oppChar) &&
  (document.querySelector('#topRight').innerHTML === char || document.querySelector('#topRight').innerHTML === oppChar) &&
  (document.querySelector('#midLeft').innerHTML === char || document.querySelector('#midLeft').innerHTML === oppChar) &&
  (document.querySelector('#midMid').innerHTML === char || document.querySelector('#midMid').innerHTML === oppChar) &&
  (document.querySelector('#midRight').innerHTML === char || document.querySelector('#midRight').innerHTML === oppChar) &&
  (document.querySelector('#botLeft').innerHTML === char || document.querySelector('#botLeft').innerHTML === oppChar) &&
  (document.querySelector('#botMid').innerHTML === char || document.querySelector('#botMid').innerHTML === oppChar) &&
  (document.querySelector('#botRight').innerHTML === char || document.querySelector('#botRight').innerHTML === oppChar)) {
    document.querySelector('#postGame').innerHTML = 'Tie!'
    document.querySelector('#postGame').style.display = 'block'
    setTimeout(function () {
      reset()
    }, 1500)
  }
}

function lose () {
  document.querySelector('#postGame').innerHTML = 'you lose!'
  document.querySelector('#postGame').style.display = 'block'
  setTimeout(function () {
    reset()
  }, 1500)
}
