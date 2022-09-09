import React from 'react';
import { useState, useEffect } from 'react'
import StudentCard from './Components/StudentCard';
import StudentForm from './Components/StudentsForm';
import Search from './Components/Search';

function App() {
  const [students, setStudents] = useState([])
  const [schools, setSchools] = useState([])
  const [search, setSearch] = useState("");

  useEffect(()=> {
  //Gets schools and students
    fetch('http://localhost:9292/students')
    .then(res => res.json())
    .then(setStudents)
    
//     fetch('http://localhost:9292/schools')
//     .then(res => res.json())
//     .then(setSchools)
//   },[])

//   //Creates a Student
//   const postStudent = (student) => {
//     fetch('http://localhost:9292/students',{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json',
//       },
//       body: JSON.stringify(student)
//     })
//     .then(res => res.json())
//     .then(newStudent => {
//       setStudents([newStudent,...students])
//     })
//   }
// //patches student
//   const patchStudent = (student) => {
//     fetch(`http://localhost:9292/students/${student.id}`,{
//       method:'PATCH',
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body: JSON.stringify({...student, active: false})
//     })
//     .then(res => res.json())
//     .then(data => {
//       setStudents(students.map(st => {
//         if(st.id === data.id){
//           return data
//         } else {
//           return st
//         }
//       }))
//     })
//   } 
// //Deletes student
//   const handleDelete = (id) => {
//     fetch(`http://localhost:9292/students/${id}`,{
//       method:'DELETE',
//       headers:{'Content-Type':'application/json'}
//     })
//     .then(res => res.json())
//     .then(() => {
//       setStudents(students.filter(st => st.id !== id))
//     })
//   }
  const displayedStudent = students.filter((student) =>
  student.student_name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className="App">
       
      <div>
      <Search search={search} onSearchChange={setSearch} />
      <StudentForm postStudent={postStudent} schools={schools}/>
      {students.map(st => <StudentCard student={st} students={displayedStudent} patchStudent={patchStudent} handleDelete={handleDelete} key={`${st.id}${st.student_name}`}/>)}
      </div> 
    </div> 
  );
}
export default App;
