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
    // var $breed_select = $('select.breed_select');
    // $breed_select.change(function() {
    //     var id = $(this).children(":selected").attr("id");
    //     getCatByBreed(id)
    // });

    // function getBreeds() {
    //     ajax_get('https://api.thecatapi.com/v1/breeds', function(data) {
    //         populateBreedsSelect(data)
    //     });

    // }
    // function populateBreedsSelect(breeds) {
    //     $breed_select.empty().append(function() {
    //       var output = '';
    //       $.each(breeds, function(key, value) {
    //         output += '<option id="' + value.id + '">' + value.name + '</option>';
    //       });
    //       return output;
    //     });
    //   }
    //   // triggered when the breed select control changes
    //   function getCatByBreed(breed_id) {
    //     // search for images that contain the breed (breed_id=) and attach the breed object (include_breed=1)
    //     ajax_get('https://api.thecatapi.com/v1/images/search?has_breeds=1&breed_ids=' + breed_id, function(data) {
      
    //       if (data.length == 0) {
    //         // if there are no images returned
    //         clearBreed();
    //         $("#data_table").append("<tr><td>Sorry, no Image for that breed yet</td></tr>");
    //       } else {
    //         //else display the breed image and data
    //         displayBreed(data[0])
    //       }
    //     });
    //   }
    //   // clear the image and table
    //   function clearBreed() {
    //     $('#breed_img').attr('src', "");
    //     $("#data_table tr").remove();
    //   }
    //   // display the breed image and data
    //   function displayBreed(image) {
    //     $('#breed_image').attr('src', image.url);
    //     $("#data_table tr").remove();
      
    //     var breed_data = image.breeds[0]
    //     $.each(breed_data, function(key, value) {
    //       // as 'weight' and 'height' are objects that contain 'metric' and 'imperial' properties, just use the metric string
    //       if (key == 'weight' || key == 'height') value = value.metric
    //       // add a row to the table
    //       $("#data_table").append("<tr><td>" + key + "</td><td>" + value + "</td></tr>");
    //     });
    //   }
      
    //   // make an Ajax request
    //   function ajax_get(url, callback) {
    //     var xmlhttp = new XMLHttpRequest();
    //     xmlhttp.onreadystatechange = function() {
    //       if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //         console.log('responseText:' + xmlhttp.responseText);
    //         try {
    //           var data = JSON.parse(xmlhttp.responseText);
    //         } catch (err) {
    //           console.log(err.message + " in " + xmlhttp.responseText);
    //           return;
    //         }
    //         callback(data);
    //       }
    //     };
      
    //     xmlhttp.open("GET", url, true);
    //     xmlhttp.send();
    //   }
    //   // call the getBreeds function which will load all the Dog breeds into the select control
    //   getBreeds();

    function ajax_get(url, callback) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
              var data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
              console.log(err.message + " in " + xmlhttp.responseText);
              return;
            }
            callback(data);
          }
        };
      
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
      }
      
      ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
        document.getElementById("id").innerHTML = data[0]["id"];
        document.getElementById("url").innerHTML = data[0]["url"];
        // document.getElementById("Name").innerHTML = data[0]["name"];
      
        var html = '<img src="' + data[0]["url"] + '">';
        document.getElementById("image").innerHTML = html;
      });
      



// });
