export const findNodeByAttr = (wrapper, attr) =>{
  return wrapper.find(`[data-test="${attr}"]`);
}