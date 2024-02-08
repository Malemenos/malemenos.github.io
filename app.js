const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
const column = [];
const edgeDistance = 100;

let blockSize = 64;


ctx.strokeStyle="#ffffff";
redraw();
//drawBlock(blockSize,blockSize,50,50);

addBlock(0,0,first,1,1,1,1);


function redraw(){
    let h = window.innerHeight - 30;
    let w = window.innerWidth - 30;
    c.height = h;
    c.width = w;
    ctx.drawCanvas();
    for(let i=0;i<column.length;i++){
        drawBlock(50,50,50,50);
        for(let j=0;j<column[i].length;j++){
            drawBlock(blockSize,blockSize,i*blockSize+edgeDistance,j*blockSize+edgeDistance);
        }
    }
}

function drawBlock(height,width,x,y){
    ctx.strokeRect(x,y,width,height);
}

function addBlock(columnIndex,rowIndex,name,top,right,bottom,left){
    let tmpColumn = columnIndex;
    let tmpRow = rowIndex;
    if(columnIndex<0){
        shiftRight();
        tmpColumn+=1;
    }else if(rowIndex<0){
        shiftDown();
        tmpRow+=1;
    }
    column[tmpColumn][tmpRow]=new Block(name,top,right,bottom,left);
    redraw();
}

class Block{
    constructor(name,top,right,bottom,left){
        this.name=name;
        this.top=top;
        this.right=right;
        this.bottom=bottom;
        this.left=left;
    }
}