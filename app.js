var playerturn,Roundscore,Totalscore,gameplaying;
gameplaying=true;
playerturn=0;
Totalscore=[0,0];
Roundscore=0;
var winning=0;
document.querySelector("#score-0").textContent=0;
document.querySelector("#score-1").textContent=0;
document.querySelector("#current-0").textContent=0;
document.querySelector("#current-1").textContent=0;
document.querySelector(".dice").style.display="none";
document.querySelector(".dice2").style.display="none";

document.querySelector(".btn-roll").addEventListener("click",function () {
    if(gameplaying) {
        var dice = Math.floor(Math.random() * 6 + 1);
        var dice2 = Math.floor(Math.random() * 6 + 1);
        document.querySelector(".dice").src = "dice-" + dice + ".png";
        document.querySelector(".dice2").src = "dice-" + dice2 + ".png";
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice2").style.display = "block";
        Roundscore += dice + dice2;
        if (dice !==1 && dice2!==1) {
            //add score to roundscore
            document.querySelector("#current-" + playerturn).textContent = Roundscore;

        } else {
            //change player
            //set total score to zero
            Totalscore[playerturn] = 0;
            Roundscore = 0;
            document.querySelector("#current-" + playerturn).textContent = Roundscore;
            document.querySelector("#score-" + playerturn).innerHTML = Totalscore[playerturn];
            Switch();
        }

    }
});

document.querySelector(".btn-hold").addEventListener("click",function () {
    if(gameplaying) {
        winning=document.querySelector("#winning").value;
        winning=parseInt(winning);
        Totalscore[playerturn] += Roundscore;
        document.querySelector("#score-" + playerturn).innerHTML = Totalscore[playerturn];
        if (Totalscore[playerturn] >= winning) {
            document.querySelector("#name-" + playerturn).textContent = "Winner!";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".dice2").style.display = "none";
            document.querySelector(".player-" + playerturn + "-panel").classList.remove("active");
            document.querySelector(".player-" + playerturn + "-panel").classList.add("winner");
            gameplaying = false;
        } else {
            Switch();
        }
    }
});

document.querySelector(".btn-new").addEventListener("click",function () {
   location.reload();
});

//Changes player Tab
function Switch() {
    if(playerturn===1)
    {
        previous=0;
        document.querySelector(".player-0-panel").classList.add("active"); //Toggles class on and off
        document.querySelector(".player-1-panel").classList.remove("active");
        playerturn=0;
    }
    else
    {
        previous=0;
        playerturn=1;
        document.querySelector(".player-1-panel").classList.add("active");
        document.querySelector(".player-0-panel").classList.remove("active");
    }
}