import oneone from '../pictures/11.jpeg'
import two from '../pictures/2.jpg'
import three from '../pictures/3.jpg'
import four from '../pictures/4.jpg'
import five from '../pictures/5.jpg'
import six from '../pictures/6.jpg'
import seven from '../pictures/7.jpg'
import eight from '../pictures/8.jpg'
import nine from '../pictures/9.jpeg'
import ten from '../pictures/10.jpeg'

import './Page.css'

function Page() {
  return (<>
    <div className='responsive-image'>
      <img src={oneone} alt='mababa' className='responsive-image__image'></img>
      <p className='p'>The secret of a happy marriage remains a secret.</p>
      <img src={ten} alt='mababa' className='responsive-image__image'></img>
      <img src={two} alt='mababa' className='responsive-image__image'></img>
   <p className='p'>It’s funny how your parents tell you it’s their house, but as soon as something needs cleaning, it magically becomes yours too.</p>
    </div>

    <h1 style={{color:'white', textAlign:'center', fontSize:50}}>The Mahata Family</h1>

    <div className='responsive-image'>
    <img src={three} alt='mababa' className='responsive-image__image'></img>
    <img src={eight} alt='mababa' className='responsive-image__image'></img>
     <p className='p'>It didn’t matter how big our house was; it mattered that there was love in it.</p>
      <img src={four} alt='mababa' className='responsive-image__image'></img>
    </div>

    <div className='responsive-image'>
   <p className='p'>Everyone needs a house to live in, but a supportive family is what builds a home.</p>
      <img src={six} alt='mababa' className='responsive-image__image'></img>
      <img src={nine} alt='mababa' className='responsive-image__image'></img>
   <p className='p'>Having one kid makes you a parent. Having two kids makes you a referee.</p>
   <img src={five} alt='mababa' className='responsive-image__image'></img>
    </div>
  </>

  );
}

export default Page;
