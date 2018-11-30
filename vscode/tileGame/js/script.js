change.count=0;
var first;
var fisrtId;
var matchedpairs=0;
var timerflag=0;
var start;
var end;
function started(){
start=new Date();
}
function ended(){
  end=new Date();
}

function millisecondsToTime(milli)
{
      var milliseconds = milli % 1000;
      var seconds = Math.floor((milli / 1000) % 60);
      var minutes = Math.floor((milli / (60 * 1000)) % 60);

      return minutes + ":" + seconds + "." + milliseconds;
}
function timeTaken(){
alert(start-end);
}
async function change(id,id1){
  if(timerflag==0){
    started();
    timerflag=1;
  }
 if(change.count<1 && document.getElementById(id).style.backgroundColor!='purple'){
  document.getElementById(id).style.backgroundColor='red';
  change.count++;
  document.getElementById(id1).style.display="block";
  change.first=document.getElementById(id1).innerText;
  change.firstId1=id1;
  change.firstId=id;
  }
    else{

     if(id!=change.firstId  && document.getElementById(id).style.backgroundColor!='purple' &&change.first*1==document.getElementById(id1).innerText*1){
        matchedpairs++;
        document.getElementById(change.firstId).style.backgroundColor='purple';
        document.getElementById(id).style.backgroundColor='purple';
        document.getElementById(id1).style.display='block';
        change.count=0;
        change.firstId=0;

        if(matchedpairs*1==4*1){
          ended();
          alert(".....GaMe ComPleted.....\n \nTime Taken:"+millisecondsToTime(end-start)); 
        }
        await sleep(600);
        
      }else{
        if(document.getElementById(id).style.backgroundColor!='purple'){
        document.getElementById(id).style.backgroundColor='red';
        document.getElementById(id1).style.display='block';
        await sleep(600);
        id.onmouseleave=restoreColor(id,id1);
     
        } 
      }

    }
  }

  function sleep(ms){
return new Promise(resolve  => setTimeout(resolve,ms));
  }

function restoreColor(id,id1){
  document.getElementById(change.firstId).style.backgroundColor='blue';
  document.getElementById(change.firstId1).style.display="none";
  document.getElementById(id).style.backgroundColor='blue';
  document.getElementById(id1).style.display="none";
  change.count=0;
  change.firstId=0;
}



function reset(){
  matchedpairs=0;
assignNumbers();
}

function assignNumbers(){
var val=[1,1,2,2,3,3,4,4,5];
var x = document.getElementsByClassName('myTable');
val.sort(() => Math.random() - 0.5);
var r=Math.floor(Math.random()*9);

  for (var c = 0; c <9; c++) {
  document.getElementById("p"+(c+1)).innerHTML=val[c];
  document.getElementById("a"+(c+1)).attr("backgroundColor",'blue');
  document.getElementById("p" +(c+1)).hide();      
  }
 }
