// const firebaseConfig = {
//   apiKey: "AIzaSyCaOjygaYDPWMqIJUIFxSnzNlCHQiPvDtQ",
//   authDomain: "typing-game-eb88a.firebaseapp.com",
//   projectId: "typing-game-eb88a",
//   storageBucket: "typing-game-eb88a.appspot.com",
//   messagingSenderId: "802096698382",
//   appId: "1:802096698382:web:967ac318e206055099585f",
// };

// export {firebaseConfig}


// Define the type of firebaseConfig object
type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

// Define the firebaseConfig object with the defined type
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyCaOjygaYDPWMqIJUIFxSnzNlCHQiPvDtQ",
  authDomain: "typing-game-eb88a.firebaseapp.com",
  projectId: "typing-game-eb88a",
  storageBucket: "typing-game-eb88a.appspot.com",
  messagingSenderId: "802096698382",
  appId: "1:802096698382:web:967ac318e206055099585f",
};

export { firebaseConfig };