
$("#random").click(function(){
  window.open("https://en.wikipedia.org/wiki/Special:Random");
})
var wiki;
$("button").click(function(){
  $("#result").html("");
  var search = $("input").val();
  console.log(search);  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search="+search+"&limit=10&namespace=0&format=json",function(data){

      console.log(data);
      $.each(data[1],function(i,val){

        $("#result").append("<div class='search'><h3 id='sname' title="+data[3][i]+">"+val+"</h3><h4>"+data[2][i]+"</h4></div>");
      })
  })
})

$("#result").on("click","h3",function(){
   window.open($(this).attr('title'));

   $(this).animate("clicked");
})

// $("#Result").on("cli","h3",function(){
//   $(this).animate({
//     color:rgb(0, 85, 255)
//   })
// })
