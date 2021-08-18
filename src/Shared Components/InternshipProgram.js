import React from 'react'

function InternshipProgram({image, title, description}) {
    return (
        <div className = "card">
            <div className="img">
                  <img src={image} alt="" />
                </div>
                <div className="course-details">
                  <h5 className="course-name">{title}</h5>
                  <p>
                    {description}
                  </p>
                </div>
                <div className = "footer-div">
                    <div className="duration">Duration: 2 Months</div>
                    <div className="know-more">Know More</div>
                </div>
                
        </div>
    )
}

export default InternshipProgram
