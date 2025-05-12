HTMLBodyElement.prototype.appendChild = a =>
  a.tagName != "SCRIPT" &&
  document.body.insertBefore(a, null);