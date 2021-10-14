noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){

    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,400);
    canvas.position(600,125);

    poseNet=ml5.poseNet(video,modelLoded);
  poseNet.on("pose",gotPoses);
}
function draw(){
    document.getElementById("square_sides").innerHTML="Width and height= "+difference+"px";
    background("#d6261a");
    fill("#07a82f");
    stroke("#07a82f");
    square(noseX,noseY,difference);
}

function modelLoded(){
    console.log("poseNet is intialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
