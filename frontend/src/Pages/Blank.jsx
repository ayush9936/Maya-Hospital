import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

const Blank = () => {
  return (
    <>
    <div class="page-wrapper">
        <Header/>
        <Sidebar/>
			<div class="page-content">
			  
			</div>
            <Footer/>
		</div>
        </>
  )
}

export default Blank