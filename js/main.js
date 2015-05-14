var TheGame = TheGame || {};

//TheGame.game = new Phaser.Game(160, 160, Phaser.AUTO, '');
TheGame.game = new Phaser.Game(
  window.innerWidth,
  window.innerHeight,
  Phaser.AUTO,
  '');

TheGame.game.state.add('Boot', TheGame.Boot);
TheGame.game.state.add('Preload', TheGame.Preload);
TheGame.game.state.add('Menu', TheGame.Menu);
TheGame.game.state.add('Game', TheGame.Game);

TheGame.game.state.start('Boot');
