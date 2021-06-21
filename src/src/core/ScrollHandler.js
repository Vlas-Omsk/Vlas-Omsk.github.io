let isListening = false,
  elements = [];
const defaultScrPercent = 40,
  defaultScrPx = 0;

function AddElement(
  name,
  el,
  scrPercent = defaultScrPercent,
  scrPx = defaultScrPx
) {
  for (let value of elements)
    if (value.name == name) {
      value.element = el;
      value.scrPercent = scrPercent;
      value.scrPx = scrPx;
      return value;
    }
  return elements[
    elements.push({
      element: el,
      name,
      callbacks: [],
      scrPercent,
      scrPx,
    }) - 1
  ];
}

function AddCallback(name, callback) {
  for (let value of elements)
    if (value.name == name) {
      value.callbacks.push(callback);
      return value;
    }
  return elements[
    elements.push({
      name,
      callbacks: [callback],
      scrPercent: defaultScrPercent,
      scrPx: defaultScrPx,
    }) - 1
  ];
}

function RemoveElement(name) {
  elements = elements.filter((value) => value.name != name);
}

function StartListen() {
  if (!isListening) {
    isListening = true;
    window.addEventListener("scroll", UpdateElements);
    UpdateElements();
  }
}

function StopListen() {
  if (isListening) {
    isListening = false;
    window.removeEventListener("scroll", UpdateElements);
  }
}

// function isOnVisibleSpace(el) {
//   const rect = el.getBoundingClientRect()
//   return rect.y > -window.innerHeight * 0.3 && rect.y < window.innerHeight * 0.3
// }

function isOnVisibleSpace(element, scrPercent, scrPx) {
  var bodyHeight = window.innerHeight;
  var elemRect = element.getBoundingClientRect();
  var offset = elemRect.top; // - bodyRect.top;
  //if (offset < 0) return false;
  if (offset + scrPx > bodyHeight * (scrPercent / 100)) return false;
  return true;
}

function UpdateElements() {
  elements.forEach((value) => {
    if (
      value.element &&
      value.callbacks &&
      isOnVisibleSpace(value.element, value.scrPercent, value.scrPx, value)
    )
      value.callbacks.forEach((callback) => {
        callback();
      });
  });
}

export default {
  AddElement,
  AddCallback,
  RemoveElement,
  StartListen,
  StopListen,
  UpdateElements,
};
