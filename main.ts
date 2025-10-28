let mySprite2: Sprite = null
game.splash("")
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . d d d . . . 
    . . . . . . . . . d d d d d . . 
    . . . . . . . . . d 3 3 3 d . . 
    . . . . . . . . . . f 3 f . . . 
    . . . . . . . . . . 3 3 3 . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . . . . 3 . 3 3 3 3 . . . . . 
    . . . . 3 . . 3 . . 3 . . . . . 
    . . . . . . . f . . f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 . . . . . . . . . . 
        . . . . 7 7 7 . . . . . . . . . 
        . . . . . 7 7 . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . 2 7 7 7 2 . . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
})
