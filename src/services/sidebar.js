import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => {
  return useContext(SidebarContext);
};

export const SidebarProvider = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [iconsOnly, setIconsOnly] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(sidebarExpanded);
    //setIconsOnly(!iconsOnly);
  };

  return (
    <SidebarContext.Provider value={{ sidebarExpanded, iconsOnly, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};


