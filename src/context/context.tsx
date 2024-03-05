import { createContext } from "react";
import { data } from "./initaistate";

type ContextProvidersProps = {
    children: React.ReactNode
}

export const TheContextValue = createContext(data);

export const TheContextProvider = ({ children }: ContextProvidersProps) => {
    return (
        <TheContextValue.Provider value={data}>
            {children}
        </TheContextValue.Provider>
    )
} 