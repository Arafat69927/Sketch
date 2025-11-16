


let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
//  context.fillRect(100, 100, 400, 400);
context.fillStyle = 'blue';

context.lineWidth = 4;
context.beginPath();
context.rect(100,100,400,400);
// context.stroke();


context.beginPath();
context.arc(300,300,100,0,Math.PI*2);
// context.stroke();
    const width = 60;
    const height = 60;
    const gap = 20;
    let x,y;
for(let i = 0; i < 5; i++){
for(let j = 0; j < 5; j++){
  
     x = 100 + (width + gap) * i;
     y =  100 + (height + gap) * j;
    context.beginPath();
    context.rect(x,y, width,height);
    context.stroke();

    if(Math.random()> 0.5){
    context.beginPath();
    context.rect(x+8, y+8, width -15 ,height - 16);
    context.stroke();
    }
    
}
}







const canvasSketch = require('canvas-sketch');

const settings = {
    dimensions: [ 1080,1080],
   
};

const sketch = ()=>{
    return({context,width,height}) =>{
        context.fillStyle ='white';
        context.fillRect(0,0,width,height);
        

    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const off = width * 0.02;
    let x,y;
for(let i = 0; i < 5; i++){
for(let j = 0; j < 5; j++){
  
     x = ix + (w + gap) * i;
     y =  iy + (h + gap) * j;

    context.beginPath();
    context.rect(x,y, w,h);
    context.stroke();

    if(Math.random()> 0.5){
    context.beginPath();
    context.rect(x + off / 2, y + off / 2, w - off, h - off);
    context.stroke();
    }
    
}
}    
};
};

canvasSketch(sketch,settings);