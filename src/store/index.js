let userInitialState = {name: "Ilyas",location: "PK"}
let userReducer = function (state = userInitialState,action = {type: "", payload: ""}) {
  // Run action
  const {type, payload} = action;
  if (type) {
    if (type == "UPDATE_NAME") {
      state.name = payload;
    }else if (type == "UPDATE_LOCATION") {
      state.location = payload;
    }
  }
  return state;
}


export default {
  reducers: {
    user: userReducer
  }
}