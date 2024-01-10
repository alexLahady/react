import '../style/Banner.scss';

//Bannière image avec 2 condition s'il possède du texte ou non 

function Banner(image,text,istrue) {
    return (
      <section className="Banner">
        <div className="Banner-header">
          {istrue ? <img src={image} className='Banner-img istrue' alt={text} /> : <img src={image} className='Banner-img' alt={text} />}
          {istrue ? <span className='Banner-text'>Chez vous, partout et ailleurs</span> : <span className='Banner-text'></span>}
        </div>
      </section>
    );
  }
  
  export default Banner;
  