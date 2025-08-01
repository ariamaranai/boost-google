Object.defineProperties(navigator, {
  sendBeacon: { value: () => 0 },
  userAgent: { value: "" }
});
Object.defineProperty(Image.prototype, "src", {
  set (a) {
    (a[0] == "d" || a[1] == "/" || a.slice(11, 19) != ".google.") &&
    this.setAttribute("src", a);
  }
});
{
  let is = a => {
    switch (a) {
      case "animationcancel":
      case "animationend":
      case "auxclick":
      case "blur":
      case "contextmenu":
      case "copy":
      case "dblclick":
      case "error":
      case "drag":
      case "dragend":
      case "dragenter":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "drop":
      // case "focus": calendar
      case "focusin":
      case "focusout":
      case "keypress":
      case "mousedown":
      case "mouseenter":
      case "mouseleave":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "mouseup":
      case "mousewheel":
      case "orientationchange":
      case "scroll":
      case "selectionchange":
      case "paste":
      case "pointerdown":
      case "pointerenter":
      case "pointerleave":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerup":
      case "speech":
      case "test":
      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
      case "transitioncancel":
      case "transitionend":
      case "transitionrun":
      case "transitionstart":
      case "visibilitychange":
        return 0;
      default:
        return 1;
    }
  }
  let p = EventTarget.prototype;
  let ael = p.addEventListener;
  let rel = p.removeEventListener;
  p.addEventListener = function (a, b, c) {
    is(a) && ael.call(this, a, b ,c);
  }
  EventTarget.prototype.removeEventListener = function (a, b, c) {
    is(a) && rel.call(this, a, b ,c);
  }
}
HTMLHeadElement.prototype.appendChild = a =>
  a?.src != "https://www.youtube.com/iframe_api?version=3" &&
  document.head.insertBefore(a, null);