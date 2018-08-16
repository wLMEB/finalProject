//var list=["shirts","shorts","pants","skirts","shoes","dresses"];
var list=["79.png","78.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","90.jpg","91.jpg","14.jpg","18.jpg","19.jpg"]
var columnCount=0;

for (i=0; i<list.length; i++){
  document.getElementById("container");
  if(columnCount==0){

    var previous = document.getElementById("column1").innerHTML;
    previous += "<div><img onclick='display(this.src)'src='"+list[i]+"'</div>";
    document.getElementById("column1").innerHTML = previous;
    columnCount=columnCount+1;

  }
  else if (columnCount==1) {
    var previous = document.getElementById("column2").innerHTML;
    previous += "<div><img onclick='display(this.src)'src='"+list[i]+"'</div>";
    document.getElementById("column2").innerHTML = previous;
    columnCount=columnCount+1;

  }
  else{
    var previous = document.getElementById("column3").innerHTML;
    previous += "<div><img onclick='display(this.src)'src='"+list[i]+"'</div>";
    document.getElementById("column3").innerHTML = previous;
    columnCount=0;
  }
}

function display(src) {
  console.log("hi");
  document.getElementById("display").innerHTML="<img id='large' src="+src+">";
}
