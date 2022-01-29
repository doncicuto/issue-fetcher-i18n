import { json } from "remix";

export function loader() {
  return json({ value: "hello" }, 200);
}
