import React, {
  createContext,
  useState,
  useMemo,
  ReactElement,
} from 'react';

type Context = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

type ProviderProps = {
  children: ReactElement;
};

export const PreferenceContext = createContext({} as Context);

function PreferenceProvider({ children }: ProviderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const value = useMemo(
    () => ({
      darkMode,
      toggleDarkMode: () => setDarkMode(!darkMode),
    }),
    [darkMode],
  );

  return (
    <PreferenceContext.Provider value={value}>
      {children}
    </PreferenceContext.Provider>
  );
}

export default PreferenceProvider;
