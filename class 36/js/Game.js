class Game {
  constructor() {}

  getState() {
    const dataRef = database.ref('gameState');
    // console.log(dataRef);
    dataRef.on('value', function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    const dataRef = database.ref('/');
    // console.log(dataRef);
    dataRef.update({ gameState: state });
  }

  start() {
    if (gameState === 0) {
      player = new Player();
      player.getCount();
      form = new Form();
      form.display();
    }
  }
}
