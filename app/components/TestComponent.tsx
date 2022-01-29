import { useEffect } from "react";
import { useFetcher } from "remix";

export const TestComponent = () => {
  const { load, data } = useFetcher();

  useEffect(() => {
    load("/api/test");
  }, [load]);

  return data?.value ? <p>data?.value</p> : <p>nothing yet</p>;
};
