difference = 0
leftWristX = 0
rigthWristX = 0

function setup(){
    video=createCapture(500, 500);
    video.size(500, 500);

    canvas=createCanvas(500, 500);
    canvas.position(600, 90);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#d49292')
}

function modelLoaded(){
    console.log("model loaded letss gooooo!!!");
}


function gotPoses(results)
{
  if(results.length > 0) {
      console.log(results)
  
  leftWristX = results[0].pose.leftWrist.x;
  rightWristX = results[0].pose.rightWrist.x;
  difference = floor(leftWristX - rightWristX);

  console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

function draw() {
    background('#969A97');
    document.getElementById("font_size").innerHTML = "The Font size will be = " + difference +"px";
    text('Text Manipulator', 50, 400);
    textSize(difference);
    fill('#800080')  
    }