import React, {useEffect} from 'react'

const Navbar = ({color}) => {
  //Case 1: This useEffect is run on every render
useEffect(() => {
  alert("Hay i am run on every render");
});

//Case 2: This useEffect is run only first time of render
useEffect(() => {
  alert(" Hay i am run only on first time,Welcome to my page");
}, []);

   useEffect(() => {   
     alert(" hay i am run because Color was changed")
   }, [color])
   
   //Example of cleane up function
   useEffect(() => {
    alert(" Hay i am run only on first time,This is the first render of app.jsx");

    return ()=>{
      alert("Component was unmounted");//it is only run when your navbar component is unmounted (disappear) from app.jsx file.
    }
  }, []);


return (
    <div>
      I am navbar of color {color}
    </div>
  )
}

export default Navbar
