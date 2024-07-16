class MinesGame {
  private numbers: Set<number>;
  constructor() {
    this.numbers = new Set();
  }
  StartGame(count: number): void {
    if (count < 1 || count > 24) {
      console.error("Sorry server broke");
      return;
    }
   while(count!=0){
    let randomNumber: number = Math.floor(Math.random() * 25);
    if(!this.numbers.has(randomNumber)){
        this.numbers.add(randomNumber);
        count--;
    }
   }
  }
  checkNumber(num: number): boolean {
    if (this.numbers.has(num)) {
      return true;
    }
    return false;
  }
  getNumber():Set<number> {
    return this.numbers;
  }
}
class GameManger {
  private game: Map<String, MinesGame>;
  constructor() {
    this.game = new Map<String, MinesGame>();
  }
  CreateGame(playerId: string, count: number): MinesGame {
    const Game = new MinesGame();
    Game.StartGame(count);
    this.game.set(playerId, Game);
    return Game;
  }
  checkNumber(playerId: string, count: number): boolean {
    const game = this.game.get(playerId);
    if (!game) {
      throw new Error("Game not found for the player");
    }
    return game.checkNumber(count);
  }
  endGame(playerId: string): void {
    this.game.delete(playerId);
  }
  getGame(playerId: string): Set<number> | undefined {
    return this.game.get(playerId)?.getNumber();
  }
}
export {GameManger};
