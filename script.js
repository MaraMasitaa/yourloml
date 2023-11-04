window.onload = function() {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
      displayThankYou();
    }, 1000);
  };
  
 