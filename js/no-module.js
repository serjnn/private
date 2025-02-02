function hasDynamicImport() {
  try {
    return new Function("return import('data:text/javascript;base64,Cg==').then(r => true)")();
  } catch(e) {
    return Promise.resolve(false);
  }
}

hasDynamicImport()
  .then((support) => {
    if (!support) {
      console.log('Dynamic import is not supported');
      const systemJsLoaderTag = document.createElement('script');
      systemJsLoaderTag.src = 'https://unpkg.com/systemjs@2.0.0/dist/s.min.js';
      systemJsLoaderTag.addEventListener('load', function () {
        // System.import('./build/no-module/index.js');
        System.import('./build/no-module/funds-form.js');
        System.import('./build/no-module/live-drops.js');
        System.import('./build/no-module/giveaway.js');
      });
      document.head.appendChild(systemJsLoaderTag);
    }
  });

 
  // Define a new shared link
  const sharedLink = "https://www.youtube.com/";

  // Select all <a> tags with the specified class
  const links = document.querySelectorAll(".top-leftStart-burst");

  // Update the href attribute for all selected links
  links.forEach(link => {
    link.setAttribute("href", sharedLink);
  });

