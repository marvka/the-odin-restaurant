function createElement(name, elementContent, ...attributePairs) {
  // Creates an HTML element with elementContent and x attributes
  // Takes in additional attributes as [name,value] pairs
  const element = document.createElement(name);
  if (elementContent) element.textContent = elementContent;
  for (let attribute of attributePairs) {
    console.log(attribute);
    if (Array.isArray(attribute)) {
      const attributeName = attribute[0];
      const attributeValue = attribute[1];
      element.setAttribute(attributeName, attributeValue);
    }
  }
  return element;
}

export default createElement;
