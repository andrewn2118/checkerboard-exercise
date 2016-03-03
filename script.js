// Your JS goes here
for(var i=0; i < 10; i++){
  addElement("body", "div");
}

var tiles = querySelectorAll("div");
tiles.forEach(function(div, idx){
  div.style.display = "float-left";
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  if(idx % 2 === 0) {
    div.style.backgroundColor = "red";
  } else {
    div.style.backgroundColor = "black";
  }
});

function addElement(location, element){
  document[location].appendChild(element);
}