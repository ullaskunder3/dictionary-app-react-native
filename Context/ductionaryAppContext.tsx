import React, { useState, createContext } from "react";

const DictionaryContext = createContext<any|null>(null);

const DictionaryContextProvider = ({children}:any)=>{
    const [dictionaryData, setDictionaryData] = useState([])
    return(
        <DictionaryContext.Provider value={{dictionaryData, setDictionaryData}}>
            {children}
        </DictionaryContext.Provider>
    )
};

export {DictionaryContext, DictionaryContextProvider}