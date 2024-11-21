import React, {useEffect} from 'react'

//Case 1: This useEffect is run on every render
useEffect(() => {
    alert("Hay i am run on every render");
});

//Case 2: This useEffect is run only first time of render
useEffect(() => {
    alert("Welcome to my page");
}, []);

const Navbar = ({color}) => {
   useEffect(() => {   
     alert("Color was changed")
   }, [color])
   
return (
    <div>
      I am navbar of color {color}
    </div>
  )
}

export default Navbar
