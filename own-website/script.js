
let width= true;

function likebutton(){
  const thanks = document.getElementById("thanks")
  const button = document.getElementById("like");
  if (width==true){
    width=false;
  button.style.backgroundColor="#ead1ab";
  thanks.style.display="inline";
  }
  else{
    width=true;
    button.style.backgroundColor="#272727";
    thanks.style.display="none";
 
  }

}

