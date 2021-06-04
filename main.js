rightEyeX=0;
rightEyeY=0;
function preload(){
clown_nose=loadImage("https://i.postimg.cc/FHVWGYbm/mask-removebg-preview.png")
}
function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

} 
function modelLoaded(){
console.log('poseNet is initialized');

}
function draw(){
image(video,0,0,400,400);
image(clown_nose,rightEyeX-50,rightEyeY-40,120,80);
}
function take_snapshot(){
save('myImage.png');

}
function gotPoses(results){
if(results.length>0){
console.log(results);
console.log("nose x= "+results[0].pose.rightEye.x);
console.log("nose y= "+results[0].pose.rightEye.y);
rightEyeX=results[0].pose.rightEye.x;
rightEyeY=results[0].pose.rightEye.y;

}
}