import React from 'react'

function Courses() {
  /**create an array with strings for various subjects like computer, maht, bio etc */
  const subjects = ['Computer', 'Math', 'Biology', 'Physics', 'Chemistry', 'English'];

  /** return the subjects listed in Card react components */
    return (
      <div className="courses">
        {subjects.map((subject, index) => (
          <div className="card" key={index}>
            <h2>{subject}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          </div>
        ))}
        </div>
    )
        
}

export default Courses;