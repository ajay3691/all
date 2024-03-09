// action types
let GM = "GM"
let GN = "GN"

//actions
let gmAction = () => {
    console.log("Test gmacton")
    return { type: GM }

}
let gnAction = () => {
    console.log("Test gnAction")
        return { type: GN }

}
export { gmAction, gnAction, GM, GN }