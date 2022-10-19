import React from 'react';
import './App.css';
// import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
// // import Counter3 from './components/Counter3';
// import ComponentC from './components/ComponentC';
// import ParentComponent from './components/ParentComponent';
// import Counter1 from './components/Counter1';
// import Counter2 from './components/Counter2';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import MouseContainer from './components/MouseContainer';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterTwo from './components/HookCounterTwo';
// import Counter from './components/Counter';
// import HookCounter from './components/HookCounter';
// import HookMouse from './components/HookMouse';

// export const CountContext = React.createContext()
// export const ChannelContext = React.createContext()
// const initialState = 0
// const reducer =(state,action)=>{
//  switch(action){
//     case 'increment':
//         return state + 1
//     case 'decrement' :
//         return state -1
//         case 'reset':
//             return initialState
//             default : 
//             return state
//  }
// }

function App() {
  // const[count,dispatch]=useReducer(reducer,initialState)

  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {/* <UserContext.Provider value={'Divyang'}>
        <ChannelContext.Provider value={'Tecmantras'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <Counter1/> */}
      {/* <Counter2/> */}
      {/* <Counter3/> */}
      {/* <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
     Count- {count}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
      </CountContext.Provider> */}
      {/* <ParentComponent/> */}
      {/* <FocusInput/> */}
      <HookTimer/>
    </div>
  );
}

export default App;
