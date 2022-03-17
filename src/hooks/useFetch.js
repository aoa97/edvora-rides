import { useReducer, useEffect } from "react";

const reducer = (state = { rides: [] }, action) => {
  switch (action.type) {
    case "RIDES_REQUEST":
      return { loading: true, ...state };
    case "RIDES_RESPONSE":
      return { loading: false, rides: action.payload };
    case "RIDES_FAIL":
      return { loading: false, error: action.payload };
  }
};

const useFetch = () => {
  const [state, dispatch] = useReducer(reducer, { rides: [] });

  const getRides = async () => {
    try {
      dispatch({ type: "RIDES_REQUEST" });

      // Fetching
      const rides = await (
        await fetch("https://assessment.api.vweb.app/rides")
      ).json();

      dispatch({ type: "RIDES_RESPONSE", payload: rides });
    } catch (e) {
      dispatch({ type: "RIDES_FAIL", payload: "Oops, there's an error :(" });
    }
  };

  useEffect(() => {
    getRides();
  }, []);

  return state;
};

export default useFetch;
