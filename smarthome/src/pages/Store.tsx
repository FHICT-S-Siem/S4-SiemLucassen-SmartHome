import { createContext, FC, Dispatch, useReducer, ReactNode } from 'react'
import { DetectionProps } from '../components/Detection'

const initialState = {
  detections: null as DetectionProps[] | null,
}

type Action =
| { type: 'setDetectionsOfDay', payload: DetectionProps[] }

const reducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case 'setDetectionsOfDay': 
      return { ...state, detections: action.payload }
    default:
      return state
  }
}

type InitialState = typeof initialState

type InitialContext = {
  state: InitialState,
  dispatch: Dispatch<Action>
}

const initialContextState: InitialContext = {
  state: initialState,
  dispatch: () => null
}

export const Context = createContext(initialContextState)

const StoreProvider: FC<{children: ReactNode | []}> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Context.Provider value={{state, dispatch}}>
    {children}
  </Context.Provider>
}

export default StoreProvider