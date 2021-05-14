canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
track_array = ["racetrack.jpg", "trak_1.jpg", "track2.jpg", "track-3.jpg"];
random_number_img = Math.floor(Math.random() * 4);
console.log(random_number_img);
car1_width = 100;
car1_height = 90;

car2_width = 100;
car2_height = 90;

background_image = track_array[random_number_img];
console.log("background_image= " + background_image);
car_image_1 = "car_1.png";
car_image_2 = "car_2.png";

car1_x = 10;
car1_y = 10;

car2_x = 10;
car2_y = 100;

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_image; // load image

    car1_imgTag = new Image(); //defining a variable with a new image
    car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable
    car1_imgTag.src = car_image_1; // load image

    car2_imgTag = new Image(); //defining a variable with a new image
    car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable
    car2_imgTag.src = car_image_2; // load image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up1();
        console.log("up1");
    }
    if (keyPressed == '40') {
        down1();
        console.log("down1");
    }
    if (keyPressed == '37') {
        left1();
        console.log("left1");
    }
    if (keyPressed == '39') {
        right1();
        console.log("right1");
    }



    if (keyPressed == '85') {
        up2();
        console.log("up2");
    }
    if (keyPressed == '68') {
        down2();
        console.log("down2");
    }
    if (keyPressed == '76') {
        left2();
        console.log("left2");
    }
    if (keyPressed == '82') {
        right2();
        console.log("right2");
    }


    if (car1_x > 700) {
        console.log("car1");
        document.getElementById('game_status').innerHTML = "Car 1 Won!!!";
    } else if (car2_x > 700) {
        console.log("car2");
        document.getElementById('game_status').innerHTML = "Car 2 Won!!!";
    }
}
//upload car1
function up1() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed,  x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2
    }
}

function down1() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed,  x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
}

function left1() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed,  x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
}

function right1() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed,  x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}




function up2() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When u is pressed,  x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function down2() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log("When d is pressed,  x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
}

function left2() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("When l is pressed,  x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
}

function right2() {
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        console.log("When r is pressed,  x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}