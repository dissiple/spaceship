var c, ctx;
var now, then;

var spaceship;
var bullets;

var pressed;

var i;

$(document).ready( function ()
{
    c = document.getElementById("canvas1");
    ctx = c.getContext("2d");
    
    pressed = new Array(0, 0, 0);
    
    //.onclick = play;
    play();
    c.onkeydown = attPos;
    c.onkeyup = attPos2;
    c.focus();
});

function attPos (e)
{
//    alert(e.keyCode);
    if (e.which == 32)
    {
        pressed[0] = 1;
        e.preventDefault();
    }
    
    if (e.keycode < 37 || e.keycode > 40)
        return true;
    
    e.preventDefault();

    if (e.keyCode == 38) // up
        pressed[1] = 1;
    else if (e.keyCode == 39) // right
        pressed[2] = 1;
    else if (e.keyCode == 37) // left
        pressed[2] = -1;

}

function attPos2 (e)
{
//    alert(e.keyCode);
    if (e.which == 32)
    {
        pressed[0] = 0;
        e.preventDefault();
    }
    
    if (e.keycode < 37 || e.keycode > 40)
        return true;
    
    e.preventDefault();

    if (e.keyCode == 38) // up
        pressed[1] = 0;
    else if (e.keyCode == 39) // right
        pressed[2] = 0;
    else if (e.keyCode == 37) // left
        pressed[2] = 0;

}

function play ()
{
    spaceship = new Spaceship ();
    bullets = new Array;
//    b1 = new Bullet();
//    b1.set({x:0, y:0}, 0);
//    bullets.push(b1);
    then = Date.now();

    setInterval(run, 10);
}

function run ()
{
    now = Date.now();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,1366,728);
    
    spaceship.act(pressed[1], pressed[2], pressed[0], (now-then)/1000);
    spaceship.print(ctx, pressed[1], 1366, 728);

    for (i=0; i < bullets.length; i++)
    {
        bullets[i].move((now-then)/1000);
        bullets[i].print(ctx, 1366, 728);
    }
    
    then = now;
}
