var RedesSociales = {
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb',
  wordpress: 'https://wordpress.com/create',
  linkedin: 'http://linkedin.com/create',
  google: 'http://https://www.google.com/'

};


function mostrarRedes( RedesSociales ){
  var nodoMostrarIconos = document.querySelectorAll('.socialmediaicons');
  nodoMostrarIconos.innerHTML = "";

  for (var i = 0; i < RedesSociales.length; i++) {
    contenidoAMostrar = contenidoAMostrar + '<nav class="socialmediaicons"></nav>';
    contenidoAMostrar += `<a href="' + RedesSociales[id] + '">' +
        '<img src="images/' + id + '.png" alt="icon for '+id+'">' +
        '</a>`;
    nodoMostrarIconos.innerHTML ="contenidoAMostrar";
  }
}


