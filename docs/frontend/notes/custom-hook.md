# 自定义 Hooks

## useAsync

```ts
import { useState } from "react";

interface State<T> {
  error: Error | null;
  data: T | null;
  stat: "idle" | "loading" | "error" | "success";
}

const defaultInitialState: State<null> = {
  error: null,
  data: null,
  stat: "idle",
};

const useAsync = <T>(initialState?: State<T>) => {
  const [state, setState] = useState<State<T>>({
    ...initialState,
    ...defaultInitialState,
  });

  const setData = (data: T) => {
    setState({
      data,
      error: null,
      stat: "success",
    });
  };

  const setError = (error: Error) => {
    setState({
      error,
      data: null,
      stat: "error",
    });
  };

  const run = async (promise: Promise<T>) => {
    if (!promise || !promise.then) {
      throw new Error("请传入 Promise 类型的数据");
    }
    setState({ ...state, stat: "loading" });

    return promise
      .then(data => {
        setData(data);
        return data;
      })
      .catch(error => {
        setError(error);
        return error;
      });
  };

  return {
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isError: state.stat === "error",
    isSuccess: state.stat === "success",
    run,
    setData,
    setError,
    ...state,
  };
};

export default useAsync;
```

## useUrlQueryParams

```ts
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useUrlQueryParams = <T extends string>(keys: T[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return keys.reduce((prev, key) => {
      return { ...prev, [key]: searchParams.get(key) || "" };
    }, {} as { [key in T]: string });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // const setParams = (params: Partial<{ [key in T]: string }>) => {
  //   setSearchParams(
  //     new URLSearchParams({ ...Object.fromEntries(searchParams), ...params })
  //   );
  // };

  return [params, setSearchParams] as const;
};

export default useUrlQueryParams;
```

## useTitle

```ts
import { useEffect, useRef } from "react";

const useTitle = (title: string, keepOnUnmount = false) => {
  const titleRef = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = titleRef.current;
      }
    };
  }, [keepOnUnmount]);
};

export default useTitle;
```
