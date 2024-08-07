import {createContext } from 'react'
import firestore from '../firebase/Config.js'


export const FirebaseContext = createContext(null)

function Firebase({children}) {
    return (
        <FirebaseContext.Provider value={firestore} >
            {children}
        </FirebaseContext.Provider>
    )
}

export {Firebase}