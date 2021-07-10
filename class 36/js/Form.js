class Form {
  constructor() {}

  display() {
    const title = createElement('h2');
    title.html('Multtplayer Car Racing');
    title.position(130, 0);

    const button = createButton('Enter');
    button.position(250, 200);

    const input = createInput('Name');
    input.position(130, 160);

    button.mousePressed(function () {
      input.hide();
      button.hide();

      name = input.value();
      playerCount++;
      player.updateCount(playerCount);
      player.update(name);
      const greeting = createElement('h3');
      greeting.html(`Hello ${name}`);
      greeting.position(230, 100);
    });
  }
}
