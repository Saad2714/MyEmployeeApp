import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { createStore } from "redux"
import { Provider} from "react-redux"
import MyEmployee from "./src/MyEmployee.js"


const initialState = {
  1: {
    empid:1,
    empName:"Patel",
    empSalary: 10000 

  }, 
  2: {
    empid:2,
    empName:"Patel2",
    empSalary: 20000 
    
  },
  3: {
    empid:3,
    empName:"Patel3",
    empSalary: 30000 
    
  },
  4: {
    empid:4,
    empName:"Patel4",
    empSalary: 40000 
    
  },
  5: {
    empid:5,
    empName:"Patel5",
    empSalary: 50000 
    
  },

}


// No need to use redux.createStore as we already imported

const reducer = (state = initialState, action) => {
  let initialSalary;
  let increment;
  let newSalary;
  let employeeObject;

  if (action.id) {
    initialSalary = state[action.id].empSalary;
    increment = (initialSalary / 100) * 5;
  }

  switch (action.type) {
    case "GOOD_PERFORMANCE":
      newSalary = initialSalary + increment;
      employeeObject = state[action.id];
      employeeObject.empSalary = newSalary;
      //return new state
      return Object.assign({}, state);

    case "BAD_PERFORMANCE":
      newSalary = initialSalary - increment;
      employeeObject = state[action.id];
      employeeObject.empSalary = newSalary;
      //return new state
      return Object.assign({}, state);
  }
  return state;
};

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyEmployee />
      </Provider>
    );
  }
}

