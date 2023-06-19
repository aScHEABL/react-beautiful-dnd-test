import react, { createContext, useReducer, ReactNode } from "react";
import { v4 as uuid } from "uuid";

interface State {
    tasks: { id: string, title: string, content: string }[],
    columns: { id: string, title: string, taskIDs: [] }[],
    columnOrder: []
}

interface ContextValue {
    state: State;
    dispatch: React.Dispatch<any>;
}

interface Action {
    type: string,
    payload?: any;
}

const initialState: State = {
    tasks: [
        {
            id: uuid(),
            title: "Read work emails",
            content: ""
        },
        {
            id: uuid(),
            title: "Walmart shopping",
            content: ""
        },
        {
            id: uuid(),
            title: "File taxes",
            content: ""
        },
        {
            id: uuid(),
            title: "Take out the trash",
            content: ""
        }
    ],
    columns: [
        {   
            id: uuid(),
            title: "to-do",
            taskIDs: []
        },
        {
            title: "in-progress",
            id: uuid(),
            taskIDs: []
        },
        {
            title: "completed",
            id: uuid(),
            taskIDs: []
        }
    ],
    columnOrder: []
}

const AppContext = createContext<ContextValue>({} as ContextValue);

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "TEST":
            return {
                ...state,
                test: action.payload.test,
            }
        default:
            return state;
    }
}

interface AppContextProviderProps {
    children: ReactNode;
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const ContextValue = {
        state,
        dispatch
    }

    return (
        <AppContext.Provider value={ContextValue}>
            { children }
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };