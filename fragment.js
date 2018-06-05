window.onload = function() {
  if (parent) {
    var oHead = document.getElementsByTagName("head")[0];
    var arrStyleSheets = parent.document.getElementsByTagName("style");
    for (var i = 0; i < arrStyleSheets.length; i++) {
      oHead.appendChild(arrStyleSheets[i].cloneNode(true));
    }
    var arrLinks = parent.document.getElementsByTagName("link");
    for (var i = 0; i < arrLinks.length; i++) {
      oHead.appendChild(arrLinks[i].cloneNode(true));
    }
  }
};
