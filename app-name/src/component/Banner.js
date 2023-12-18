import '../style/Banner.scss';
import image from '../images/img-1.png'

function Banner() {
    return (
      <div className="Banner">
        <header className="Banner-header">
          <img src={image} className='Banner-img' alt='une montagne sur la mer' />
          <span className='Banner-text'>Chez vous, partout et ailleurs</span>
        </header>
      </div>
    );
  }
  
  export default Banner;
  