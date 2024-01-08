import '../style/Banner.scss';

function Banner(image,text,istrue) {
    return (
      <div className="Banner">
        <header className="Banner-header">
          {istrue ? <img src={image} className='Banner-img istrue' alt={text} /> : <img src={image} className='Banner-img' alt={text} />}
          {istrue ? <span className='Banner-text'>Chez vous, partout et ailleurs</span> : <span className='Banner-text'></span>}
        </header>
      </div>
    );
  }
  
  export default Banner;
  