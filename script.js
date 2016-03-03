// Your JS goes here
for(var i=0; i < 54; i++){
  addElement("body", document.createElement("div"));
}

var tiles = document.querySelectorAll("div");
for(var i=0; i < tiles.length; i++){
  tiles[i].style.float = "left";
  tiles[i].style.width = "11.1%";
  tiles[i].style.paddingBottom = "11.1%";
  if(i % 2 === 0){
    tiles[i].style.backgroundColor = "blue";
  } else {
    tiles[i].style.backgroundColor = "purple";
  }
}

function addElement(location, element){
  document[location].appendChild(element);
}

function randomColor(max, min){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}