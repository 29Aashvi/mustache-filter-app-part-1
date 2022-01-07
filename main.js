function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
}

function draw(){
    
}

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

function modelLoaded(){
    console.log('PoseNet model loaded.');
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    console.log("noseX= "+ results[0].pose.nose.x);
    console.log("noseY"+ results[0].pose.nose.y);
}
}

function draw(){
image(video, 0,0,300,300);
}

function take_snapshot(){
    save('my_image.png');
}