// Action Types
const INCR = "incr"
const DECR = "decr"

// Redux Action
let incrAction = () => {
    return { type: INCR }
}
let decrAction = () => {
    return { type: DECR }
}

export { incrAction, decrAction, INCR, DECR }
// what is Action
// action is a function, it return actionable object
