scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite.say(":(", 1000)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false)
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f e e f f f . . . . 
    . . . f f f e e e e f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e b b b b b b e e f . . 
    . . f e b e e e e e e b e f . . 
    . . f e e e 4 4 4 4 e e e f . . 
    . f f e 4 1 f 4 4 1 f 4 e f f . 
    . f e e 4 b f 4 4 b f 4 e e f . 
    . . f e e 4 4 4 4 4 4 e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . a a f c c c c c c f a a . . 
    . . a a f c c c c c c f a a . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.startEffect(effects.bubbles)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.setLife(3)
music.playMelody("C A F B F D C5 A ", 40)
