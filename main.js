noseX = 0;
noseY = 0;
difference = 0;
lWX = 0;
rWX = 0;

font = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(100, 220)

    canvas = createCanvas(550,550);
    canvas.position(900,220);
    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on('pose', gotPoses);
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nosex = " + noseX + "noseY" + noseY);

        lWX = results[0].pose.leftWrist.x;
        rWX = results[0].pose.rightWrist.x;
        difference = floor( lWX - rWX);
        console.log("leftWristX = " + lWX + "rightWristX = " + rWX + "difference = " + difference);
    }
}

function modeloaded(){
    console.log('PoseNet Model Is Initialized!')
}

function draw(){
    background('#301934');

    document.getElementById("font_size").innerHTML ="Width And Height of a Font Will Be = " + difference + "px";

    fill("pink");
    stroke("pink");
    text("Siddharth", noseX, noseY);
    textSize(difference);
}



