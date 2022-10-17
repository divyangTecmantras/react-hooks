import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import Counter1 from './components/Counter1';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import MouseContainer from './components/MouseContainer';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterTwo from './components/HookCounterTwo';
// import Counter from './components/Counter';
// import HookCounter from './components/HookCounter';
// import HookMouse from './components/HookMouse';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {

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
      <Counter1/>
    </div>
  );
}

export default App;
