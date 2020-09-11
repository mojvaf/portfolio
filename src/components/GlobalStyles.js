import {createGlobalStyle} from 'styled-components';
import {setColor,setFont} from '../styles'
import image from './image/background.png'
const Globals = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@1,200&family=Inknut+Antiqua:wght@700&display=swap');
 
body{
    color:${setColor.mainBlack};
    font-size: 100%;
    ${setFont.main};
 }

 body, ul{
    margin: 0;
    padding: 0;
 }

 

 h1 , h2, skills-list {
     ${setFont.slanted}
     
 }

 img{
     max-width:100%;
 }

 nav {
     background-color: #DBEBF4;
     position: fixed;
     z-index:1;
     width:100%;
 }

 nav ul li {
  display: inline-block;
  margin: 0 15px;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
 }

nav ul {
    margin: 0 auto;
    text-align: right;
    padding: 30px;
}

ul li {
  list-style: none;
  margin: 20px 0;
}
header{
    top: 90px;
    position: relative;
    margin-bottom: 220px;
    background-image: url(${image});
    background-repeat: repeat-x;
}

h1{
    font-size: 70px;
    line-height:130%;
}

.intro-img{
    box-shadow: 10px 2px 30px rgba(0,0,0,0.4);
}

.skills-list {
    text-align: center;
    font-size:50px;
    line-height:100%;
    margin-bottom:130px
}
 section {
    padding: 40px
 }

 .blue {
    background-color: #DBEBF4;
    
 }
 footer {
    color:${setColor.mainWhite};
     text-align: center;
     background-color: #1CC6FF;
     height: 75px;
     padding:15px
 }

 footer h2 {
     font-size: 15px;
 }
}
`

export default Globals