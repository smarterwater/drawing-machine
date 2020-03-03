// Bumjargal Boldbaatar
// Reference(s) used: 
// https://p5js.org/examples/motion-bounce.html
// https://editor.p5js.org/codingtrain/sketches/9DnjxCNB-

let xpos, ypos
let xpos2, ypos2
let xpos3, ypos3

let c = 0
let z = 0

let xspeed = 2
let yspeed = 4
let xspeed2 = 4
let yspeed2 = 2
let xspeed3 = 3
let yspeed3 = 3

let xdirection = 1
let ydirection = 1
let xdirection2 = -1
let ydirection2 = -1 
let xdirection3 = -1
let ydirection3 = -1 

let history = []
let history2 = []
let history3 = []

let colors = []
let colors2 = []
let colors3 = []

let randspot
let randspot2
let randspot3

function mouseClicked() {
    c += 1
    if (c > 3)
        c = 0

    // history.splice(0, history.length)
    // history2.splice(0, history2.length)
    randspot = round(random(0, 800))
    randspot2 = round(random(0, 800))
    randspot3 = round(random(0, 800))

}

function setup() {
    colors.push(color("#C1DEE7"))
    colors.push(color("#C7D5DF"))
    colors.push(color("#CDCDD7"))
    colors.push(color("#D3C4CF"))
    colors.push(color("#D9BCC7"))
    colors.push(color("#E0B3C0"))
    colors.push(color("#E6ABB8"))
    colors.push(color("#ECA2B0"))
    colors.push(color("#F29AA8"))
    colors.push(color("#F891A0"))

    colors2.push(color("#C1DEE7"))
    colors2.push(color("#C7E1E9"))
    colors2.push(color("#CDE4EA"))
    colors2.push(color("#D3E7EC"))
    colors2.push(color("#D9EAED"))
    colors2.push(color("#E0ECEF"))
    colors2.push(color("#E6EFF0"))
    colors2.push(color("#ECF2F2"))
    colors2.push(color("#F2F5F3"))
    colors2.push(color("#F8F8F5"))

    colors3.push(color("#C1DEE7"))
    colors3.push(color("#AFD3DD"))
    colors3.push(color("#9EC8D4"))
    colors3.push(color("#8CBDCA"))
    colors3.push(color("#7BB2C0"))
    colors3.push(color("#69A7B7"))
    colors3.push(color("#589CAD"))
    colors3.push(color("#4691A3"))
    colors3.push(color("#35869A"))
    colors3.push(color("#237B90"))

    if (windowWidth > 800)
        createCanvas(800, 800)
    else
        createCanvas(windowWidth, windowHeight)
    frameRate(60);

    randspot = round(random(0, 800))
    randspot2 = round(random(0, 800))
    randspot3 = round(random(0, 800))

    xpos = randspot
    ypos = randspot
    xpos2 = randspot2
    ypos2 = randspot2
    xpos3 = randspot3
    ypos3 = randspot3
}

function draw() {
    background("#c1dee7")

    let xwidth = map(mouseX, 0, 800, 0, 1.75)
    let yspd = map(mouseY, 0, 800, 0, 5)

    xpos = xpos + xspeed * xdirection;
    ypos = ypos - yspd * ydirection;

    xpos2 = xpos2 + xspeed2 * xdirection2;
    ypos2 = ypos2 + yspd * ydirection2;

    xpos3 = xpos3 + xspeed3 * xdirection3;
    ypos3 = ypos3 + yspd * ydirection3;


    if (xpos > width || xpos < 0) 
        xdirection *= -1
    if (ypos > height|| ypos < 0) 
        ydirection *= -1
    
    if (xpos2 > width || xpos2 < 0) 
        xdirection2 *= -1
    if (ypos2 > height || ypos2 < 0) 
        ydirection2 *= -1

            
    if (xpos3 > width || xpos3 < 0) 
    xdirection3 *= -1
    if (ypos3 > height || ypos3 < 0) 
    ydirection3 *= -1

    let v = createVector(xpos, ypos)
    history.push(v)

    let v2 = createVector(xpos2, ypos2)
    history2.push(v2)

    let v3 = createVector(xpos3, ypos3)
    history3.push(v3)

    if (history.length > 2000)
        history.splice(0, history.length)

    if (history2.length > 2000)
        history2.splice(0, history2.length)

    if (history2.length > 2000)
        history2.splice(0, history3.length)

    for (let i = 0; i < history.length; i++) {
            let z = i
            z = map(z, 0, history.length, 0, 9)
            strokeWeight(xwidth)

            if (c == 0) {
                stroke(colors[round(z)])
                line(history[i].x, history[i].y, history2[i].x, history2[i].y)
                line(history2[i].x, history2[i].y, history3[i].x, history3[i].y)
                line(history3[i].x, history3[i].y, history[i].x, history[i].y)

            }
            else if (c == 1) {
                stroke(colors2[round(z)])
                line(history[i].x, history[i].y, history2[i].x, history2[i].y)
                line(history2[i].x, history2[i].y, history3[i].x, history3[i].y)
                line(history3[i].x, history3[i].y, history[i].x, history[i].y)
            }            
            else if (c == 2) {
                stroke(colors3[round(z)])
                line(history[i].x, history[i].y, history2[i].x, history2[i].y)
                line(history2[i].x, history2[i].y, history3[i].x, history3[i].y)
                line(history3[i].x, history3[i].y, history[i].x, history[i].y)
            }   
            else if (c == 3) {               
                stroke(colors[round(z)])
                line(history[i].x, history[i].y, history2[i].x, history2[i].y)
                stroke(colors2[round(z)])
                line(history2[i].x, history2[i].y, history3[i].x, history3[i].y)
                stroke(colors3[round(z)])
                line(history3[i].x, history3[i].y, history[i].x, history[i].y)
            }   
    }
}