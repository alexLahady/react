import '../style/Banner.scss';

function Banner(image,text,istrue) {
  let taille
  if(window.matchMedia("(max-width:798px)").matches && istrue){
      taille = '100px';
  } else {
    taille = '223px';
  }
  console.log(taille);
    return (
      <div className="Banner">
        <header className="Banner-header">
          <img src={image} height={taille} className='Banner-img' alt={text} />
          {istrue ? <span className='Banner-text'>Chez vous, partout et ailleurs</span> : <span className='Banner-text'></span>}
        </header>
      </div>
    );
  }
  
  export default Banner;
  