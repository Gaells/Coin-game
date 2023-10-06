window.onload = function() {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 250;
    var y = 150;
    var coinx = Math.random() * (600-50);
    var coiny = Math.random() * (400-50);
    
    var t = Date.now();
    let speed = 300;
    let dir = 0;
    let score = 0;

    function updateDirection(event) {
        if (event.key === "ArrowUp") { 
            dir = 4;
        } else if (event.key === "ArrowDown") {
            dir = 3;
        } else if (event.key === "ArrowLeft") {
            dir = 2;
        } else if (event.key === "ArrowRight") {
            dir = 1;
        }
    }

    function clearDirection(event) {
        if (
            event.key === "ArrowUp" ||
            event.key === "ArrowDown" ||
            event.key === "ArrowLeft" ||
            event.key === "ArrowRight"
        ) {
            dir = 0;
        }
    }

    window.addEventListener("keydown", updateDirection);
    window.addEventListener("keyup", clearDirection);

    function draw() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        var fps = Math.round(1 / timePassed);

        context.clearRect(0, 0, 600, 400);
        
        context.font = '25px Arial';
        context.fillStyle = 'black';
        context.fillText("Score: " + score, 20, 30);

        // Primeiro retângulo
        context.beginPath();
        context.arc(x + 50, y + 50, 50, 0, 2 * Math.PI); // x, y, raio, ângulo inicial, ângulo final (um círculo completo)
        context.fillStyle = "blue";
        context.fill();

// Segundo retângulo transformado em um círculo
        context.beginPath();
        context.arc(coinx + 25, coiny + 25, 25, 0, 2 * Math.PI); // x, y, raio, ângulo inicial, ângulo final (um círculo completo)
        context.fillStyle = "#e3c228";
        context.fill();


        if(dir == 1) { 
            if(x+100 < 600) {
                x += (speed * timePassed);
            }
        }
        else if(dir == 2) { 
            if(x > 0) {
                x -= (speed * timePassed);
            }
        }
        else if(dir == 3) { 
            if(y+100 < 400) {
                y += (speed * timePassed);
            }
        }
        else if(dir == 4) { 
            if(y > 0) {
                y -= (speed * timePassed);
            }
       }  
       if (coinx <= x+100 && x <= coinx+50 && coiny <= y+100 && y <= coiny+50) {
        score++;
        coinx = Math.random() * (600-50);
        coiny = Math.random() * (400-50);
    }

        window.requestAnimationFrame(draw);
    }
    draw();
}
