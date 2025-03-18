//Config-----------------------------------------------------------------------------

var canvas = document.getElementById('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d")

c.globalCompositeOperation = 'source-over' // Ensures new drawings appear over the background

//----------------------------------------------------------------------------------------
//Mouse stuff------------------------------------------------------------------------------

mouseProps = {
    x: null,
    y: null
}

addEventListener('mousemove', (e) => {
    mouseProps.x = e.clientX
    mouseProps.y = e.clientY
})

//----------------------------------------------------------------------------------------
//Square generation----------------------------------------------------------------------

const dotSize = {
    x: 5,
    y: 5
}
const dotSpeed = 10
var squares = []

function squareGen(amount)
{
    for(var i = 0; i < amount; i++)
    {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
        squares.push({
            x: x,
            y: y,
            originX: x,
            originY: y
        })
    }
}

function squareMover(targetX, targetY, shakeFactor, paraFactor)
{
    squares.forEach((s) => {

        let normalizedVector = {
            x: Math.abs(targetX - s.originX),
            y: Math.abs(targetY - s.originY)
        }

        s.x = s.originX + (Math.random() * shakeFactor) + (normalizedVector.x / (paraFactor * 10))
        s.y = s.originY + (Math.random() * shakeFactor) + (normalizedVector.y / (paraFactor * 10))
    })
}

function squareDraw()
{
    squares.forEach((s) => {
        c.fillStyle = 'white'
        c.fillRect(s.x,s.y,dotSize.x, dotSize.y)
        
        c.fillStyle = "rgb(151 158 225 / 30%)";
        c.fillRect(s.x + 4,s.y + 4,dotSize.x, dotSize.y)
    })
}

//----------------------------------------------------------------------------------------
//Main-------------------------------------------------------------------------------------

squareGen(60)

setInterval(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Fill the canvas with a black background
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width + 10, canvas.height + 10);

    squareDraw()
    squareMover(mouseProps.x, mouseProps.y, 0.5, 10) //paraFactor only really looks cool when > 2
}, 50)

//----------------------------------------------------------------------------------------
