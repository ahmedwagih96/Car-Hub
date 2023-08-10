"use client";

import { store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: JSX.Element[] }) {
  return <Provider store={store}>{children}</Provider>;
}
