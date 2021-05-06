scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (Level == 3) {
        info.stopCountdown()
        music.baDing.play()
        Level += 1
        game.showLongText("Yay!", DialogLayout.Bottom)
        game.showLongText("You beat the game!", DialogLayout.Center)
        info.startCountdown(10)
        game.over(true, effects.confetti)
    }
})
info.onCountdownEnd(function () {
    game.showLongText("Oh no! You ran out of time!", DialogLayout.Bottom)
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (Level == 1) {
        info.stopCountdown()
        music.jumpUp.play()
        Level += 1
        game.showLongText("Yay! I'm home!", DialogLayout.Bottom)
        game.showLongText("I need to check out a tan book from the library.", DialogLayout.Full)
        info.startCountdown(60)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (Level == 2) {
        info.stopCountdown()
        music.magicWand.play()
        Level += 1
        game.showLongText("Yes! Here it is!", DialogLayout.Bottom)
        game.showLongText("I need to sit down and read this book.", DialogLayout.Top)
        info.startCountdown(10)
    }
})
let Level = 0
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
game.showLongText("I'm lost! I need to find my way out of this forest and into my home.", DialogLayout.Bottom)
Level = 1
info.startCountdown(30)
