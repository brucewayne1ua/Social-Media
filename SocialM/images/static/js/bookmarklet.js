function bookmarkletLaunch() {
  var bookmarklet = document.getElementById('bookmarklet');
  var imagesFound = bookmarklet.querySelector('.images');
  
  // очистить найденные изображения
  imagesFound.innerHTML = '';
  
  // показать букмарклет
  bookmarklet.style.display = 'block';
  
  // событие закрытия
  bookmarklet.querySelector('#close').addEventListener('click', function() {
    bookmarklet.style.display = 'none';
  });
  
  // найти изображения в DOM с минимальными размерами
  var images = document.querySelectorAll('img[src$=".jpg"], img[src$=".jpeg"], img[src$=".png"]');
  images.forEach(image => {
    if (image.naturalWidth >= minWidth && image.naturalHeight >= minHeight) {
      var imageFound = document.createElement('img');
      imageFound.src = image.src;
      imagesFound.append(imageFound);
    }
  });

  // событие выбора изображения
  imagesFound.querySelectorAll('img').forEach(image => {
    image.addEventListener('click', function(event) {
      var imageSelected = event.target;
      bookmarklet.style.display = 'none';
      window.open(siteUrl + 'images/create/?url='
                  + encodeURIComponent(imageSelected.src)
                  + '&title='
                  + encodeURIComponent(document.title),
                  '_blank');
    });
  });
}

// запустить букмарклет
bookmarkletLaunch();
