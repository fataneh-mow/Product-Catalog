import { createContext, useContext, useReducer, useEffect } from "react";
import { lightTheme, darkTheme } from "../theme/theme";

const ThemeContext = createContext();
  const savedMode = localStorage.getItem("theme");

const initialState = {
  mode: savedMode,
  theme: lightTheme,
};


function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      const isDark = state.mode === "dark";
      const newMode = isDark ? "light" : "dark";

      return {
        mode: newMode,
        theme: newMode === "light" ? lightTheme : darkTheme,
      };
    }

    case "SET_THEME": {
      const mode = action.payload;

      return {
        mode,
        theme: mode === "light" ? lightTheme : darkTheme,
      };
    }

    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // gonna use CSS vars
  useEffect(() => {
    const root = document.documentElement;

    Object.entries(state.theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
    localStorage.setItem("theme", state.mode);
  }, [state.theme]);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");

    if (savedMode) {
      dispatch({ type: "SET_THEME", payload: savedMode });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);