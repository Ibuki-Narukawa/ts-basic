type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Dan = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

// 駒の位置を表すクラス
class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  // パラメータに渡された位置と現在の位置を比較するメソッド
  distanceFrom(position: Position, player: Player) {
    if (player === "first") {
      return {
        suji: position.suji - this.suji,
        dan: Number(position.dan) - Number(this.dan),
      };
    } else {
      return {
        suji: position.suji - this.suji,
        dan: -(Number(position.dan) - Number(this.dan)), // 段(縦の位置)は政府反転
      };
    }
  }
}

// 駒を表すクラス
abstract class Piece {
  // Pieceクラスとサブクラスでアクセスできる
  protected positon: Position;

  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.positon = new Position(suji, dan);
  }

  // メソッドの定義
  // 駒の移動用のメソッド
  moveTo(positon: Position) {
    this.positon = positon;
  }

  // 移動できるかどうかを判定するメソッド
  abstract canMoveto(positon: Position, player: Player): boolean;
}

class Osho extends Piece {
  canMoveto(positon: Position, player: Player): boolean {
    const distance = this.positon.distanceFrom(positon, player);
    return Math.abs(distance.suji) < 2 && Math.abs(distance.dan) < 2;
  }
}

class Fu extends Piece {
  canMoveto(positon: Position, player: Player): boolean {
    const distance = this.positon.distanceFrom(positon, player);
    return distance.suji === 0 && distance.dan < 2;
  }
}

class NariKin extends Fu {
  canMoveto(positon: Position, player: Player): boolean {
    const distance = this.positon.distanceFrom(positon, player);
    return (
      Math.abs(distance.suji) < 2 &&
      Math.abs(distance.dan) < 2 &&
      !(Math.abs(distance.suji) === 1 && distance.dan === -1)
    );
  }
}

class Game {
  private pieces = Game.makePieces();
  private static makePieces() {
    return [
      new Osho("first", 5, "1"),
      new Osho("second", 5, "9"),

      // 先手の歩
      new Fu("first", 1, "3"),
      new Fu("first", 2, "3"),
      new Fu("first", 3, "3"),
      new Fu("first", 4, "3"),
      new Fu("first", 5, "3"),
      new Fu("first", 6, "3"),
      new Fu("first", 7, "3"),
      new Fu("first", 8, "3"),
      new Fu("first", 9, "3"),

      // 後手の歩
      new Fu("second", 1, "7"),
      new Fu("second", 2, "7"),
      new Fu("second", 3, "7"),
      new Fu("second", 4, "7"),
      new Fu("second", 5, "7"),
      new Fu("second", 6, "7"),
      new Fu("second", 7, "7"),
      new Fu("second", 8, "7"),
      new Fu("second", 9, "7"),
    ];
  }
}
