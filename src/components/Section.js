import React from 'react'
import Button from '@material-ui/core/Button';
 const Section=()=> {
    return (
        <div>
            <section>
             <ul className="skills-list" >
                 <li>Some skills</li>
                 <li>JavaScript </li>
                 <li>Node.js</li>
                 <li>React</li>
                 <li>Java</li>
             </ul>
            </section>

            <section  className="blue">
            <div className="container">
              <div className="row"> 
               <div className="col-sm">
              <figure>
               <img src="https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="my picture"/>
               <figcaption>photo by pixabay from pexels</figcaption>
               </figure>
               </div>
               <div className="col-sm">
               <h2>Front and Back-end project</h2>
               <p>This project has front-end with React and back-end with node.js</p>
                <Button href="https://github.com/mojvaf/login-front-and-backend" color="primary">
                   GitHub link
                </Button>
               
               </div>
               </div>
               </div>
            </section>


            <section>
            <div className="container">
              <div className="row"> 
               <div className="col-sm">
               <h2>React with styled component</h2>
               <p>In this project I used react hooks and styled components</p>
               <Button href="https://github.com/mojvaf/Malibu" color="primary">
                   GitHub link
                </Button>
               </div>
               <div className="col-sm">
               <figure>
               <img src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="my picture"/>
               <figcaption>photo by serpatat from pexels</figcaption>
               </figure>
               </div>
               </div>
               </div>
            </section>

            <section className="blue" >
            <div className="container">
              <div className="row"> 
               <div className="col-6">
               <figure>
               <img src="https://images.pexels.com/photos/545008/pexels-photo-545008.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="my picture"/>
               <figcaption>photo by burst from pexels</figcaption>
               </figure>
               </div>
               <div className="col-sm">
               <h2>React with material ui</h2>
               <p>I am still working on this project</p>
               <Button href="https://github.com/mojvaf/exersice" color="primary">
                   GitHub link
                </Button>
               </div> <div className="col-sm">
               <h2>shopping cart with React</h2>
               <p>I am still working on this project</p>
               <Button href="https://github.com/mojvaf/shopping-cart" color="primary">
                   GitHub link
                </Button>
               </div>
               </div>
               </div>
            </section>
        </div>
    )
}
export default Section