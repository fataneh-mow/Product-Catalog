import { createContext, useContext, useReducer } from "react";

const ProductUIContext = createContext();

const initialState = {
    view: "grid",
    search: "",
    page: 1,
    category: "all",
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_VIEW":
            return { ...state, view: action.payload };

        case "SET_SEARCH":
            return { ...state, search: action.payload };

        case "SET_PAGE":
            return { ...state, page: action.payload };
            
        case "SET_CATEGORY":
            return { ...state, category: action.payload };

        default:
            return state;
    }
}

export function ProductUIProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ProductUIContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductUIContext.Provider>
    );
}

export const useProductUI = () => useContext(ProductUIContext);