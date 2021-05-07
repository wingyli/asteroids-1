// game.js file

// game state
let ship = new Ship()

let keyPressed = {}
// check for user input
window.addEventListener('keydown', event => {
  keyPressed[event.code] = true
  console.log(keyPressed)
})

window.addEventListener('keyup', event => {
  keyPressed[event.code] = false
  console.log(keyPressed)
})

// game loop
function loop() {
  // todo check user input to change ship's angle and speed
  if (keyPressed['ArrowLeft'] === true) {
    ship.rotateLeft()
  }
  // challenge: check for right / up and call the appropriate ship method
  if (keyPressed['ArrowRight'] === true) {
    ship.rotateRight()
  }
  if (keyPressed['ArrowUp'] === true) {
    ship.thrust()
  }

  // change game state
  ship.step()

  // draw all
  erase()
  ship.draw()

  // trigger loop
  setTimeout(() => loop(), 1000 / 60)
}

// wait for images to load
async function loadGame() {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  await shipSprite.loaded
  await rockSprite.loaded
  loop()
}
loadGame()
