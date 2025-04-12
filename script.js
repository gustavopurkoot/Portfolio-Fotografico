function filtrarGaleria(categoria) {
    const imagens = document.querySelectorAll('.galeria-grid img');
  
    imagens.forEach((img) => {
      const cat = img.getAttribute('data-categoria');
      
      if (categoria === 'todas' || cat === categoria) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  }
  