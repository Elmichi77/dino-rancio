input.onButtonPressed(Button.A, function () {
    Cabesaurio.change(LedSpriteProperty.Y, -1)
    Patasaurio.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    Cabesaurio.change(LedSpriteProperty.Y, 1)
    Patasaurio.change(LedSpriteProperty.Y, 1)
})
function Piedrita () {
    Piedra = game.createSprite(4, 4)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        Piedra.change(LedSpriteProperty.X, -1)
        if (Piedra.isTouching(Patasaurio)) {
            basic.showIcon(IconNames.Sad)
        }
    }
}
let Piedra: game.LedSprite = null
let Patasaurio: game.LedSprite = null
let Cabesaurio: game.LedSprite = null
Cabesaurio = game.createSprite(0, 3)
Patasaurio = game.createSprite(0, 4)
Piedrita()
basic.forever(function () {
    if (Piedra.isTouchingEdge()) {
        basic.pause(1000)
        Piedra.delete()
        Piedrita()
    }
})
