var entrar=true;
var jugar=false;
while(entrar==true){
    
    while(jugar==true){
            
        function numeroRandom(min,max){
            return Math.floor(Math.random()* (max-min+1))+min;
        }
        var na= numeroRandom(1,4);
        console.log(na);
    }
    

    
}