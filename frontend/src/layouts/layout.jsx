import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import Routers from '../Routes/Router'
const Layout =()=>{
    return <div className="min-h-screen">
  

    <Header/>
    <main>
        <Routers/>
    </main>
    <Footer/>
   
</div>
};
export default Layout;