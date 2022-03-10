import { createContext, useReducer, useContext } from "react";

const AppContext = createContext();
AppContext.displayName = "AppContext";

// Constants
const RIDES_REQUEST = "RIDES_REQUEST";
const RIDES_RESPONSE = "RIDES_RESPONSE";
const RIDES_FAIL = "RIDES_FAIL";

const reducer = (state = { rides: [] }, action) => {
  switch (action.type) {
    case RIDES_REQUEST:
      return { loading: true, ...state };
    case "RIDES_RESPONSE":
      return { loading: false, rides: action.payload };
    case RIDES_FAIL:
      return { loading: false, error: action.payload };
  }
};

const getRides = async () => {
  try {
    // return { type: RIDES_REQUEST };
    
    // return { type: RIDES_RESPONSE, payload:  rides};
  } catch (error) {
    return { type: RIDES_FAIL, payload: { payload: "error" } };
  }
};

const initalState = {};
export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initalState);

  return (
    <AppContext.Provider value={initalState}>{children}</AppContext.Provider>
  );
};

export function useStore() {
  return useContext(AppContext);
}
