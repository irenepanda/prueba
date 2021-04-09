tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
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
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
