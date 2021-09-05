function start() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/tf8QrudgV/model.json",modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error,results) {
if(error){
    console.error(error);

}else{
    console.log(results);
    r=Math.floor (Math.random()*255)+1;
    g=Math.floor (Math.random()*255)+1;
    b=Math.floor (Math.random()*255)+1;
    document.getElementById("result_label").innerHTML='I CAN HEAR - '+results[0].label;
     
    document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
     
     img1=document.getElementById("img-1");
     if(results[0].label=="Dog"){
         img1.src="doggy.png";
        

     }else 
     if(results[0].label=="Duck"){
        img1.src="duck.jpg";
        

    }else 
    if(results[0].label=="Crickets"){
        img1.src="cricket.jpg";
       

    }else 
  {
        img1.src="ufo.jpg";
        

    }
}
}
