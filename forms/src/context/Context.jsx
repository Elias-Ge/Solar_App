import React, { createContext, useState } from 'react'
export const SiteContext = createContext();
export const SiteProvider = (props) => {
    const [siteData, setSiteData] = useState({
        // lat: null,
        // log: null,
        psh: null,

    });
    return (
        <SiteContext.Provider value={[siteData,setSiteData]}>
            {props.children}
        </SiteContext.Provider>
    )
}