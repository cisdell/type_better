// import { createContext, useReducer, useEffect, ReactNode } from "react";
// import { auth } from "../firebase/config";
// import { Unsubscribe, onAuthStateChanged } from "firebase/auth";

// // Define the type for the context
// type AuthContextType = {
//   user: any; // Replace 'any' with the appropriate type for your user object
//   authIsReady: boolean;
//   dispatch: React.Dispatch<any>; // Replace 'any' with the type of your action object
// };

// export const AuthContext = createContext<AuthContextType>(
//   {} as AuthContextType
// );

// export const authReducer = (state: AuthContextType, action: any) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { ...state, user: action.payload };
//     case "LOGOUT":
//       return { ...state, user: null };
//     case "AUTH_IS_READY":
//       return { user: action.payload, authIsReady: true };
//     default:
//       return state;
//   }
// };
// interface AuthContextProviderProps {
//   children: ReactNode;
// }

// export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {

//   const [state, dispatch] = useReducer(authReducer, {
//     user: null,
//     authIsReady: false
//   });



//   useEffect(() => {
//     const unsub: Unsubscribe = onAuthStateChanged(auth, (user) => {
//       dispatch({ type: "AUTH_IS_READY", payload: user });
//     });
//     return () => unsub(); // Cleanup the listener when the component unmounts
//   }, []);

//   console.log("AuthContext state:", state);

//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
