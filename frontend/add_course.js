import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIPuCXTPYYeSrFbYhJfRoqWkpUXz06qPw",
  authDomain: "learningmanagementsystem-6a495.firebaseapp.com",
  projectId: "learningmanagementsystem-6a495",
  storageBucket: "learningmanagementsystem-6a495.appspot.com",
  messagingSenderId: "607890066394",
  appId: "1:607890066394:web:8902df59d3fe6dea648ee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

/**
 * Add selected subjects to a student's record in Firestore.
 * @param {string} studentId - The ID of the student.
 * @param {Array} subjects - The list of subjects selected by the student.
 */
async function addSubjectsToStudent(studentId, subjects) {
    // Reference the student's document
    const studentRef = doc(db, 'students', studentId);
  
    try {
      // Update the student's document with the selected subjects
      await updateDoc(studentRef, {
        subjects: subjects
      });
      console.log("Subjects added successfully!");
    } catch (error) {
      console.error("Error adding subjects: ", error);
    }
  }
  


document.getElementById('subjectForm').addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Get the selected subjects
    const selectedSubjects = [];
    document.querySelectorAll('input[name="subject"]:checked').forEach((checkbox) => {
      selectedSubjects.push(checkbox.value);
    });
  
    // Assume you have the student's ID stored (e.g., from login information)
    const studentId = 'uniqueStudentId';
  
    // Call the function to add subjects
    addSubjectsToStudent(studentId, selectedSubjects);
  });