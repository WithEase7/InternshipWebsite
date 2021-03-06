import React from 'react';
import Carousel from 'react-elastic-carousel';
import "./Section3.css";
import card1 from "../../../assets/images/img/card1.png";
import card2 from "../../../assets/images/img/card2.png";
import card3 from "../../../assets/images/img/card3.png";
import card4 from "../../../assets/images/img/card4.png";
import card5 from "../../../assets/images/img/card5.png";
import card6 from "../../../assets/images/img/card6.png";
import card7 from "../../../assets/images/img/card7.png";
import card8 from "../../../assets/images/img/card8.png";
import card9 from "../../../assets/images/img/card9.png";
import card10 from "../../../assets/images/img/card10.png";
import card11 from "../../../assets/images/img/card11.png";

import InternshipProgram from '../../../Shared Components/InternshipProgram';

function Section() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ]
    return (
        <section className="homeSection3">
      <div class="container">
        <div class="text-box">
          <h1>Internships Programs</h1>
          <p>We have 11 Departments</p>
        </div>
        <div className = 'main-card'>
             <Carousel breakPoints={breakPoints}>

                 <InternshipProgram image = {card1} title="UI/UX Designer" description = "UI/UX Designer Description" />

                 <InternshipProgram image = {card2} title="Web Developer" description = "UI/UX Designer Description" />

                 <InternshipProgram image = {card3} title="Graphic Designer" description = "UI/UX Designer Description" />

                 <InternshipProgram image = {card4} title="Video Editor" description = "UI/UX Designer Description" />

                 <InternshipProgram image = {card5} title="Content Writer" description = "UI/UX Designer Description" />

                 <InternshipProgram image = {card6} title="HR Generalist" description = "UI/UX Designer Description" />

                 <InternshipProgram image = {card7} title="Digital Marketer" description = "UI/UX Designer Description" />

                 <InternshipProgram image = {card8} title="Data Analyst" description = "UI/UX Designer Description" />

                 <InternshipProgram image = {card9} title="Market Research Analyst" description = "UI/UX Designer Description" />

                 <InternshipProgram image = {card10} title="Business Development Trainee" description = "UI/UX Designer Description" />

                 <InternshipProgram image = {card11} title="Finance" description = "UI/UX Designer Description" />

             </Carousel>
        </div>
        </div>
        </section>
    )
}

export default Section
