

import { createContext, useContext } from "react";
import eventStore from "./store/EventStore";

const store = {
  eventStore: eventStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
