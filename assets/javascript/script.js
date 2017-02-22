$(document).ready(function(){
   
    //Variables
    var randomNumberId = "#randomNumber";
    var winsId = "#wins";
    var lossesId = "#losses";
    var totalScoreId = "#totalScore";
    var resultMsgId = "#resultMsg";
    var imagesClass = ".img_anchor";
    
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min) + min);
    }
    
    function reset() {
        $(randomNumberId).text(rand(19, 120));
        $(totalScoreId).text(0);
        $(imagesClass).attr("value", 0);   
    }
    
    $(imagesClass).on("click", function() {
        var randNum = this.getAttribute("value");
        console.log(randNum); 
        
        if(parseInt(randNum) === 0) {
            $(resultMsgId).text("");
            randNum = rand(1, 12);
            console.log(randNum);
            $(this).attr("value", randNum);
        }
        console.log(this.id + " = " + this.getAttribute("value"));
        $(totalScoreId).text( parseInt($(totalScoreId).text()) + parseInt(randNum));
    
        if(parseInt($(totalScoreId).text()) > parseInt($(randomNumberId).text())) {
            console.log(parseInt($(totalScoreId).text()));
            console.log(parseInt($(randomNumberId).text()));   
            console.log("lost");
            $(lossesId).text(parseInt($(lossesId).text())+1);
            $(resultMsgId).text("You lose!!! :(");
            reset();
        } else if(parseInt($(totalScoreId).text()) === parseInt($(randomNumberId).text())){
            $(winsId).text(parseInt($(winsId).text())+1);
            console.log("won");
            $(resultMsgId).text("Congrats... You won!!!");
            reset();
        }
    });
    reset();
});