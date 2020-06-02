function criarMenu(){  
  
  let x = document.getElementById("menuResponsivo");

  if(!(x.style.display === 'block')){
    x.style.display = 'block';
  }
  else{
    x.style.display = 'none';
  }
}

