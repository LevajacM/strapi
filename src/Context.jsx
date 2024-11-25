import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const changeIndex = (e) => {
    setIsHover(true);
    let text = e.target.textContent;
    if (text === 'product') {
      setIndex(0);
    }
    if (text === 'solutions') {
      setIndex(1);
    }
    if (text === 'resources') {
      setIndex(2);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        index,
        isHover,
        setIsHover,
        changeIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
