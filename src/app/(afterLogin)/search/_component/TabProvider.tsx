"use client"

import {createContext, ReactNode, useState} from "react";

export const TabContext = createContext({
    tab: "hot",
    setTab: (value: 'hot' | 'new') => {

    }
})
type Props = { children : ReactNode}
export default function TabProvider({children}: Props) {
    const [tab, setTab] = useState<"hot" | "new">("hot");
    return (
        <TabContext.Provider value={{tab, setTab}}>
            {children}
        </TabContext.Provider>
    );
}