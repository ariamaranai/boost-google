Object.defineProperties(navigator, {
  sendBeacon: {
    value: () => 0
  },
  userAgent: {
    value: ""
  }
});
Object.defineProperty(Image.prototype, "src", {
  set (a) {
    a[0] != "/" &&
    a.slice(10, 18) != "w.google" &&
    this.setAttribute("src", a);
  }
});