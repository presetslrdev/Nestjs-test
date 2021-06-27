// ограничение области значений переменной

enum Direction {
    Up = 'UP',Down='DOWN',Left='LEFT',Right='RIGHT'
}

enum Decision { // Геторогенные enum
    Yes=1,
    No='No'
}

// Значение удавшей монеты

enum Dice {
    One=1,
    Two,
    Three
}

function ruDice (dice: Dice){
    switch (dice) {
        case Dice.One: return 'один'
        case Dice.Two: return 'два'
        //default: const a: never = dice

    }
}
