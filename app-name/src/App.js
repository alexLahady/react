import React from 'react'; 
import Nav from './component/Nav';
import Footer from './component/Footer';
import Banner from './component/Banner';
import Gallery from './component/Gallery';
import image from './images/img-1.png'


function App(){
    return(
        <div>
            <Nav />
            <main>
                {Banner(image,"une montagne",true)}
                <Gallery />
            </main>
            <Footer />
        </div> 
    );
}

export default App;