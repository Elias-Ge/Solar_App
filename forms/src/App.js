import React, { useContext } from 'react'


import { SiteLocation, LoadCompilation } from './component';
import { SiteContext } from './context/Context';

const App = () => {
  const [siteData, setSiteData] = useContext(SiteContext);
  console.log(siteData)
  return (
    <div>
      {!siteData.psh ? <SiteLocation  /> : <LoadCompilation />}
    </div>
  )
}

export default App