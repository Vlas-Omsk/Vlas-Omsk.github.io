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
      enterCallbacks: [],
      leaveCallbacks: [],
      isOnVisibleSpace: false,
      scrPercent,
      scrPx,
    }) - 1
  ];
}

function AddEnterCallback(name, callback) {
  for (let value of elements)
    if (value.name == name) {
      value.enterCallbacks.push(callback);
      return value;
    }
  return elements[
    elements.push({
      name,
      enterCallbacks: [callback],
      leaveCallbacks: [],
      isOnVisibleSpace: false,
      scrPercent: defaultScrPercent,
      scrPx: defaultScrPx,
    }) - 1
  ];
}

function AddLeaveCallback(name, callback) {
  for (let value of elements)
    if (value.name == name) {
      value.leaveCallbacks.push(callback);
      return value;
    }
  return elements[
    elements.push({
      name,
      enterCallbacks: [],
      leaveCallbacks: [callback],
      isOnVisibleSpace: false,
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
  if (elemRect.top + scrPx > bodyHeight * (scrPercent / 100) ||
    elemRect.top + elemRect.height + scrPx < bodyHeight * (scrPercent / 100)) return false;
  return true;
}

function UpdateElements() {
  elements.forEach((value) => {
    if (value.element)
    {
      const valueIsOnVisibleSpace = isOnVisibleSpace(value.element, value.scrPercent, value.scrPx);
      
      if (value.leaveCallbacks && value.isOnVisibleSpace && !valueIsOnVisibleSpace)
        value.leaveCallbacks.forEach((callback) => callback());
      if (value.enterCallbacks && !value.isOnVisibleSpace && valueIsOnVisibleSpace)
        value.enterCallbacks.forEach((callback) => callback());
      value.isOnVisibleSpace = valueIsOnVisibleSpace;
    }
  });
}

export default {
  AddElement,
  AddEnterCallback,
  AddLeaveCallback,
  RemoveElement,
  StartListen,
  StopListen,
  UpdateElements,
};
