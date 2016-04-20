
// TODO implement the 'dig' function, that looks up
// deeply nested properties. it should be 'safe' - if
// we hit undefined/null we should stop
//
//
//    dig({ a: { b: "hi } }, "a", "b") // 'hi'
//    dig({ a: { b: "hi } }, "a") // { b: "hi" }
//    dig({ a: { b: "hi } }, "z", "z") // undefined
//
// Try first with for of, then with a reduce
//
// @type dig = (object: Object, ...properties: Array<string>) => any
//
/* eslint no-unused-vars:0 */

export { digReduce as dig };

function dig(input, ...target) {
  let currentNode = input;
  for (const key of target) {
    if (currentNode[key]) {
      currentNode = currentNode[key];
    } else {
      return;
    }
  };
  return currentNode;
}

function digReduce(object, ...properties) {
  return properties.reduce((obj, prop) => obj ? obj[prop] : undefined, object);
}
