import React, { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
    const [data, setData] = useState();

    return (
        <GlobalContext.Provider value={{ data, setData }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext);
