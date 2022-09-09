import React from "react";

function StudentCard({student, patchStudent, handleDelete}){
console.log(student)
      return(
        <div className='container'>
          <div className='student_card'>
            <h3>Name: {student.student_name}</h3>
            <p>Age: {student.age}</p>
            <p>Gender: {student.gender}</p>
            <p>Phone Number: {student.phone}</p>
            <p>School: {student.school.school_name}</p>
            <button onClick={()=> patchStudent(student)}>Edit Details</button> 
            <button onClick={() => handleDelete(student.id)}>Delete Student</button>
          </div>
        </div>
        )
    }
    
//     export default StudentCard;