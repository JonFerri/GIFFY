export type StateType = {
    textInput: string
    lang: "en" | "es"
    limit: number
}

const languages = ["es","en"] as const 
export type Langs = typeof languages[number]

const controller = {
    changeTextInput (prevState:StateType, action: any): StateType {
        return {
            ...prevState,
            textInput: action.payload.textInput
        }
    },
    setLang (prevState:StateType, action: any): StateType {
        return {
            ...prevState,
            lang: action.payload.lang
        }
    },
    setLimit (prevState:StateType, action: any): StateType {
        return {
            ...prevState,
            limit: action.payload.limit
        }
    }

}

export type ControllerType = keyof typeof controller
export type ActionType = {
    payload: any
    type: ControllerType
}

const reducer: React.Reducer<StateType,ActionType> = (prevState: StateType, action: ActionType) => {
    const type: ControllerType = action.type;
    return controller[type](prevState,action)
}

export default reducer


// const [textInput, changeTextInput] = useState(initialKeyword)
//   const [lang, setLang] = useState(initialLang)
//   const [limit, setLimit] = useState(initialLimit)