$(function(){
    $("button").on("click",function(){
        
        let getno = $(".no").val();
        console.log(getno);

        let pokeurl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + getno + ".png";
        $(".op_pokefront").attr("src",pokeurl);
        
        let pokeurl_back = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + getno + ".png"; 
        $(".op_pokeback").attr("src",pokeurl_back);
    });

});

