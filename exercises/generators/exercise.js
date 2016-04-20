/**
 * Exercise 1
 *
 * Export a function called 'objectEntries' that iterates over the keys and values of an object
 *
 * It'll be used as follows:
 *
 *    const object = { a: 1, b: 2, c: 3};
 *
 *    for(const [k,v] of exports.objectEntries(object)) {
 *      console.log(k, v);
 *    }
 *
 * TODO make sure your design isn't affected by keys being added
 *      during iteration
 * TODO yield up key value pairs as arrays
 */

export function *objectEntries(object) {
  const keys = Object.keys(object);

  for (const key of keys) {
    yield [key, object[key]];
  }
}


/**
 * Exercise 2
 *
 * Create a helper that *accepts* generator functions to
 * make sequencing events much easier:
 *
 * It'll be used as follows:
 *
 *       const moveDistance = exported.events(someElement, function*() {
 *         const over = yield "mousedown";
 *         const out = yield "mouseup";

 *         return {
 *           dx: out.clientX - over.clientX,
 *           dy: out.clientY - over.clientY,
 *         };
 *       });
 *
 *       moveDistance.then(function({dx,dy}) {
 *         // should have values
 *       });
 *
 * You need to implement the `events` function to be used in this way. The
 * generator function you'll be passed will `yield` event strings as above.
 *
 *
 */
export function events(emitter, makeGen) {

  return new Promise(function (resolve, reject) {

    //  TODO create the generator (remember generator function vs generator distinction)
    //  TODO get an initial event string
    //  TODO listen, and resume once the event fires
    //  TODO repeat the listen/resume process until the generator is done
    //  TODO when the generator is done, return the final value

  });

}


/**
 * Exercise 3
 *
 * Write a function that takes a variable
 * number of promises and is resolved
 * with an array containing their values or
 * the errors they were rejected with.
 *
 * It'll be used as follows:
 *
 *
 *     exported.settleAll(promise1, promise2)
 *     .then(function([valueOrError1, valueOrError2]) {
 *
 *     });
 *
 *
 */

// import 'co' module
import co from 'co';

// Read up the documentation on `co.wrap()`.
// export your helper method, accepting a variable number of promise arguments
export const settleAll = co.wrap(function *cat(...promises) {
  const settledValues = [];

  // rensure you wait for result of each promise
  for (const promise of promises) {
    let value;
    try {
      value = yield promise;
    } catch (ex) {
      // handle any rejected promises
      value = ex;
    }

    settledValues.push(value);
  }

  // return list of - rejection reasons or resolution values
  return settledValues;

});




/**
 * Exercise 4
 *
 * Enable this Stack class below to be used as
 * an iterator.
 *
 * Like a physical stack of books, the easiest way to
 * get items out is from the top - this is called last-in, first-out
 * order (LIFO). We want to enable the stack to be iterated
 * in LIFO order, removing each item we iterate over
 *
 *
 */

export class Stack {
  constructor() {
    this._values = [];
  }

  get size() {
    return this._values.length;
  }

  pop() {
    return this._values.pop();
  }

  push(v) {
    return this._values.push(v);
  }

  // find out how to tell the interpreter this
  //      object can be iterated (it's defining a method with a special name)
  *[Symbol.iterator]() {
    // consider how the interation needs to occur
    while (this._values.length > 0) {
      yield this.pop();
    }
  }

}

