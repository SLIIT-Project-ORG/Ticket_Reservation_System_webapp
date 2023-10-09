import React from "react";
import '../../styles/Home.css'
import Header from "./Header";
import NaveBar from "./NaveBar";
import Footer from "./Footer";




const backgroundStyle = {
    backgroundImage: `url('https://res.cloudinary.com/simpleview/image/upload/v1528972382/clients/norway/d1cbdd81_95dc_4d03_96bc_a31440b9ca9c_af984979-fba4-43d6-8415-80656c70228b.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    
     // Ensures the background covers the entire viewport height
  };
  

export default function Home() {

    return (
        
      
            <div className="mt-4" >
                <Header />
                <div style={backgroundStyle}>
                <NaveBar />

              
                
            </div>
            
            <Footer />
        </div>
        
    )

}