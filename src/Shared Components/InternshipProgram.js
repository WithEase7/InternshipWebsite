import React from 'react'

function InternshipProgram({image, title, description}) {
    return (
        <div className = "card">
            <div class="img">
                  <img src={image} alt="" />
                </div>
        </div>
    )
}

export default InternshipProgram
