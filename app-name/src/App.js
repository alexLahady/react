import React from 'react'; 
import Nav from './component/Nav';
import Footer from './component/Footer';
import Banner from './component/Banner';
import Gallery from './component/Gallery';

function App(){
    return(
        <div>
            <Nav />
            <main>
                <Banner />
                <Gallery />
            </main>
            <Footer />
        </div> 
    );
}

export default App;