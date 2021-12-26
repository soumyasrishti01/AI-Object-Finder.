status = "";
objectDetector = "";

function setup(){
    canvas = createCanvas(400, 300);
    canvas.position(440, 250);

    video = createCapture(400, 400);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
    
    document.getElementById("object_name").value;
}

function modelLoaded(){
    console.log("model Loaded!");
    status = true;
}

function draw(){
    image(video, 0, 0, 400, 300);
}