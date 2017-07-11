console.log("js");

$(document).ready(onReady);

function onReady(){
  // initialize button click event listeners here
  console.log("jq sourced");
  $('#submitro').on('click', submitInfo);
}


function submitInfo(){
  console.log("in submit info!");
  $('#output').append("<div>" + $('#firstname').val() + "<div>");
  $('#output').append("<div>" + $('#lastname').val() + "<div>");
  $('#output').append("<div>" + $('#email').val() + "<div>");
  $('#output').append("<div>" + $('#company').val() + "<div>");
  $('#output').append("<div>" + $('#title').val() + "<div>");
  $('#output').append("<div>" + $('#selectState').val() + "<div>");
  $('#output').append("<div>" + $('#selectCountry').val() + "<div>");
  $('#output').append("<div>" + $('#comments').val() + "<div>");

}
