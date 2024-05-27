AFRAME.registerComponent("gameplay",{
    schema:{
        elementId:{type:"string",default:"#coin"}

    },
    
    update:function(){
        this.isCollided(this.data.elementId)
    },

    isCollided:function(elementId){
        const element=document.querySelector(elementId)
        element.addEventListener("collied",(e)=>{
             if (elementId.includes("#coin")) {
                console.log(elementId + " collision");
              } else if (elementId.includes("#hurdle")) {
                console.log("coin collision");
              }
            })
        },
        updatecoin: function () {
          var element = document.querySelector("#coins");
          var count = element.getAttribute("text").value;
          var currentCoins = parseInt(count);
          currentTargets -= 1;
          element.setAttribute("text", {
            value: currentCoin,
          });
        },
        updateScore: function () {
          var element = document.querySelector("#score");
          var count = element.getAttribute("text").value;
          var currentScore = parseInt(count);
          currentScore += 50;
          element.setAttribute("text", {
            value: currentScore,
          });
        },
        gameOver: function () {
          var planeEl = document.querySelector("#diver_model");
          var element = document.querySelector("#game_over_text");
          element.setAttribute("visible", true);
          planeEl.setAttribute("dynamic-body", {
            mass: 1
          });
        },
  
    })

