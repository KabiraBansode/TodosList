import React from 'react'

export const Footer = () => {

  let footerStyle=
  {
    position: "relative",
    top:"50vh",
    width: "100%",
    padding:"10px",
    margin:"10px"

  }
  return (
    <footer className='bg-dark text-light ' style={footerStyle} >
        <p className='text-center justify-content-center align-items-center m-auto'>
         Copyright &copy; Mytodoslist.com
          </p> 
      </footer>
  )
}
