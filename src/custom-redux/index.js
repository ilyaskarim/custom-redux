import React from "react";
import App from "./../App.js";

let reduxComponent = (store) => {
  return function () {
    return <App {...store} />
  }
}

class CustomRedux {
  constructor(props) {
    this.store = {};
    this.reducers = props.reducers;
    this.buildStore();
  }
  buildStore() {
    let keys = Object.keys(this.reducers);
    keys.map((item) => {
      let reducer = this.reducers[item];
      let type = typeof reducer;
      if (type == "function") {
        let output = reducer.call();
        if (output) {
          this.store[item] = output;
        }else {
          throw `${item} reducer must return something`
        }
      }else {
        throw `${item} must be a function`
      }
    })
  }
  mapStateToProps(component) {
    return reduxComponent(this.store);
  }
}

export default CustomRedux;