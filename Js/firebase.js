import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyC-hxQoCmX9cWusz1nA5Sn0OJP3fWXB11w",
  authDomain: "contador-960c6.firebaseapp.com",
  projectId: "contador-960c6",
  storageBucket: "contador-960c6.appspot.com",
  messagingSenderId: "729519031153",
  appId: "1:729519031153:web:0f9a5a58af9cd33e816cd0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Atualize o contador
window.onload = async function () {
  const counterRef = doc(db, "stats", "visits");
  
  try {
    const docSnap = await getDoc(counterRef);
    
    if (docSnap.exists()) {
      const currentCount = docSnap.data().count + 1;
      await updateDoc(counterRef, { count: currentCount });
      document.getElementById("counter").innerText = currentCount;
    } else {
      await setDoc(counterRef, { count: 1 });
      document.getElementById("counter").innerText = 1;
    }
  } catch (error) {
    console.error("Erro no contador:", error);
  }
};