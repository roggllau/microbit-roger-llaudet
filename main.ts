let number = 2
function interact(interval: number) {
    
    basic.clearScreen()
    i = 1
    while (i < interval + 1) {
        basic.showString("" + ("" + manel(i)))
        basic.pause(100)
        basic.clearScreen()
        i += 1
    }
}

function manel(n: number) {
    Math.pow(number, 2)
}

// def fibo(n: number):
//     if n == 1:
//         return 1
//     elif n == 2:
//         return 1
//     else:
//         return fibo(n - 1) + fibo(n - 2)
function numElements() {
    
    while (bclicked < 1) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("A")
            basic.clearScreen()
            atimes += 1
            basic.showString("" + ("" + atimes))
        } else if (input.buttonIsPressed(Button.B)) {
            basic.showString("B")
            bclicked += 1
        }
        
        basic.pause(50)
    }
    basic.clearScreen()
    basic.showString("Power of")
    interact(atimes)
}

function showIcon() {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
    }
    basic.clearScreen()
    basic.showString("Manel")
    basic.clearScreen()
}

let atimes = 0
let bclicked = 0
let i = 0
music.playTone(277, music.beat(BeatFraction.Whole))
basic.forever(function on_forever() {
    
    music.setBuiltInSpeakerEnabled(true)
    atimes = 0
    bclicked = 0
    showIcon()
    basic.showString("A to input B to Manel")
    numElements()
    basic.pause(500)
})
