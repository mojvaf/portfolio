import React from 'react'
import Button from '@material-ui/core/Button';
 const Section=()=> {
    return (
        <div>
            <section>
             <ul className="skills-list" >
                 <li>01-graphic design</li>
                 <li>02-user experience</li>
                 <li>03-design thinking</li>
                 <li>04-user research</li>
             </ul>
            </section>

            <section  className="blue">
            <div className="container">
              <div className="row"> 
               <div className="col-sm">
              <figure>
               <img src="https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="my picture"/>
               <figcaption>photo by Sam</figcaption>
               </figure>
               </div>
               <div className="col-sm">
               <h2>branding strategy 1</h2>
               <p>Lorem lkldfk dlsklskf lksldkfsl lkdskfs ksdkfslk</p>
                <Button href="#" color="primary">
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
               <h2>branding strategy 2</h2>
               <p>Lorem lkldfk dlsklskf lksldkfsl lkdskfs ksdkfslk</p>
               <Button href="#" color="primary">
                   GitHub link
                </Button>
               </div>
               <div className="col-sm">
               <figure>
               <img src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="my picture"/>
               <figcaption>photo by Sam</figcaption>
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
               <figcaption>photo by Sam</figcaption>
               </figure>
               </div>
               <div className="col-sm">
               <h2>branding strategy 3</h2>
               <p>Lorem lkldfk dlsklskf lksldkfsl lkdskfs ksdkfslk</p>
               <Button href="#" color="primary">
                   GitHub link
                </Button>
               </div> <div className="col-sm">
               <h2>branding strategy 3</h2>
               <p>Lorem lkldfk dlsklskf lksldkfsl lkdskfs ksdkfslk</p>
               <Button href="#" color="primary">
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