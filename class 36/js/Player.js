class Player {
  constructor() {}

  getCount() {
    const dataRef = database.ref('playerCount');
    // console.log(dataRef);
    dataRef.on('value', function (data) {
      gameState = data.val();
    });
  }

  update(name) {
    const player = `player${playerCount}`;
    const dataRef = database.ref(player);
    // console.log(dataRef);
    dataRef.set({ name: name });
  }

  updateCount(count) {
    const dataRef = database.ref('/');
    // console.log(dataRef);
    dataRef.update({ playerCount: count });
  }
}
