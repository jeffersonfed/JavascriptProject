// const { type } = require("express/lib/response");

// $(document).ready(function(){



    // let catAPI = $.ajax({
    //     url: "https://api.thecatapi.com/v1/images/" + ID + ".png",
    //     type: "GET",
    //     dataType: "json"
    // });
    // console.log(catAPI)

    // let callback = (data) =>{
    //     $(".image").html(catAPI.responseJSON)
    // };
    
    // const image = document.getElementById("img");
    // const catAPI ="https://api.thecatapi.com/v1/images/"

    // function generatePhoto(){
    //     fetch(catAPI,{headers: {
    //         'x-api-key': API_KEY
    //       }})
    //     .then(data =>{
    //           return data.json();
    //       })
    //       .then(data => {
    //           console.log(data.url);
    //          image.src = data.url;
              
    //       })
    //   }
      
    //   generatePhoto();

// });
// $(function(){
//   $("button").on("click",function(){

//      let getno = $(".no").val();
//         console.log(getno);

//         let caturl = "https://cdn2.thecatapi.com/images/" + getno + ".png";
//         $(".catimg").attr("src",caturl);
        
        
//   });
// })
// $(document).ready(function(){
//     const api_url ="https://zenquotes.io/api/quotes/";
    
//     async function getapi(url)
//     {
//       const response = await fetch(url);
//       var data = await response.json();
//       console.log(data);
//     }
    
//     getapi(api_url);

    

// });
const catImage = document.getElementById("catImage");
const newCatButton = document.getElementById("newCatButton");

newCatButton.addEventListener("click", fetchRandomCat);

async function fetchRandomCat() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    const imageUrl = data[0].url;
    catImage.src = imageUrl;
  } catch (error) {
    console.error("Error fetching cat image:", error);
  }
}

fetchRandomCat();
