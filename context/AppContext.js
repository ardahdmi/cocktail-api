import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'FORM_SUBMIT':
      console.log('oldu mu');
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};

const initialState = {
  formData: 'bunbu',
};

export const StateContext = createContext();
export const DispatchContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {props.children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};
