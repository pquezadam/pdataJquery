
document.addEventListener('turbolinks:before-cache', function(){
    $('#myTable').DataTable().destroy();
})

document.addEventListener('turbolinks:load', function(){
    $('#myTable').DataTable();
})

var i = 0;
document.addEventListener("turbolinks:load", function(){
    console.log(i);
    i = i + 1;
  })