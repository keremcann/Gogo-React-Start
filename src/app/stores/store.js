import { createContext, useContext } from "react";
import CatalogStore from "./catalogStore";

export const store = {
    catalogStore: new CatalogStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}