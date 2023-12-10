import { onBeforeUnmount, ref } from 'vue';
import { f7 } from './f7';
export var useStore = function useStore() {
  // (store, getter)
  var store = arguments.length <= 0 ? undefined : arguments[0];
  var getter = arguments.length <= 1 ? undefined : arguments[1];

  if (arguments.length === 1) {
    // (getter)
    store = f7.store;
    getter = arguments.length <= 0 ? undefined : arguments[0];
  } // eslint-disable-next-line


  var obj = store._gettersPlain[getter];
  var valueRef = ref(obj.value);

  var callback = function callback(v) {
    valueRef.value = v;
  };

  obj.onUpdated(callback);
  onBeforeUnmount(function () {
    // eslint-disable-next-line
    store.__removeCallback(callback);
  });
  return valueRef;
};