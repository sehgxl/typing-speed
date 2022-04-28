const main = document.querySelector('.main');
const typearea = document.querySelector('.typer');
const btn= document.querySelector('.btn');
const wording = ["Hello World is a ritual","Mr Bean is og"];
const game ={
  start:0,
  end:0,
  user:"",
  arrtext:''
};
typearea.disabled= true;
btn.addEventListener('click',(e)=>{
  if(btn.textContent==='Start'){
    typearea.value='';
    typearea.disabled= false;
    playgame();
  }else if(btn.textContent==='Done'){
    typearea.disabled= true;
    main.style.borderColor='white';
    endgame();
  }
})

function playgame(){
  let rantext=wording[Math.floor(Math.random()*wording.length)]
  main.textContent=rantext;
  game.arrtext=rantext;
  main.style.borderColor='red';
  btn.textContent='Done';
  const date=new Date();
  game.start=date.getTime();
}

function endgame(){
  const date = new Date();
  game.end = date.getTime();
  const totaltime = (game.end-game.start)/1000;
  game.user=typearea.value;
  const correct = checkresult();
  main.innerHTML=`Elapsed Time: ${totaltime}Sec Score ${correct.score} out of ${correct.total} `;
  btn.textContent='Start';
}
function checkresult(){
  let chlng=game.arrtext.split(' ');
  let ans = game.user.split(' ');
  let score = 0;
  chlng.forEach((word,index)=>{
    if(word==ans[index]){
      score++;
    }
  })
  return {score:score,total:chlng.length};
}