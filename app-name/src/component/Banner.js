import '../style/Banner.scss';

//Bannière image avec 2 condition s'il possède du texte ou non 

function Banner(image,text,istrue) {
    return (
      <div className="Banner">
        <section className="Banner-header">
          {istrue ? <img src={image} className='Banner-img istrue' alt={text} /> : <img src={image} className='Banner-img' alt={text} />}
          {istrue ? <span className='Banner-text'>Chez vous, partout et ailleurs</span> : <span className='Banner-text'></span>}
        </section>
      </div>
    );
  }
  
  export default Banner;
  