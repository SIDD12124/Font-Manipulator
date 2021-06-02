function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(100, 150)

    canvas = createCanvas(550,550);
    canvas.position(900,150);
    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

function modeloaded(){
    console.log('PoseNet Model Is Initialized!')
}

function draw(){
    background('#301934');
}



