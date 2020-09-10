import React from 'react'
import Button from '@material-ui/core/Button';
import Contact from './Contact';


 const Header=()=> {
    

    return (
        <div>
          
            <nav>
              <ul>
               <li> 
             <Contact/>
             </li> 
             </ul>
            </nav> 
            <header >
              <div className="container">
              <div className="row"> 
              <div className="col-sm">
                <h1>Hello, I am <br/> Mojgan Vafa </h1>
                <ul >
                   <li>React developer</li>
                   <li>graph designer</li>
                   <li>data analysis </li>
                </ul>  
                <Button variant="contained" color="primary">
                <a href="https://www.linkedin.com/in/mojgan-vafa/">Add me on LinkedIn</a>
                </Button>
                </div>
               <div className="col-sm">
               <figure>
                <img  src="https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="intro-img" alt="my picture"/>
                <figcaption>photo by oziel Gomez from Pexels</figcaption>
                </figure>
                </div>
               </div>
             </div>
           </header> 
        </div>
    )
}
export default Header