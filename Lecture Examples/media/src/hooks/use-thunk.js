import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      // dispatch returns a promise that ALWAYS RESOLVES whether the promise is fulfilled or rejected so need to unwrap() into a new promise
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
}

export { useThunk };
