import oneone from '../pictures/11.jpeg'
import two from '../pictures/2.jpg'
import three from '../pictures/3.jpg'
import four from '../pictures/4.jpg'
import five from '../pictures/5.jpg'
import six from '../pictures/6.jpg'
import eight from '../pictures/8.jpg'
import nine from '../pictures/9.jpeg'
import ten from '../pictures/10.jpeg'

import './Page.css'
import { motion } from 'framer-motion';


function Page() {
  return (<>
  <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
    >
    <div className='responsive-image'>
      <img src={oneone} alt='mababa' className='responsive-image__image'></img>
      <motion.div
        className="box"
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
      >
        <p className='p'>The secret of a happy marriage remains a secret.</p>
      </motion.div>
      <img src={ten} alt='mababa' className='responsive-image__image'></img>
      <img src={two} alt='mababa' className='responsive-image__image'></img>
      <motion.div
        className="box"
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
      >
        <p className='p'>It’s funny how your parents tell you it’s their house, but as soon as something needs cleaning, it magically becomes yours too.</p>
      </motion.div>
    </div>
    <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 0, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    >
      <h1 style={{ color: 'white', textAlign: 'center', fontSize: 50 }}>The Mahata Family</h1>
    </motion.div>
    <div className='responsive-image'>
      <img src={three} alt='mababa' className='responsive-image__image'></img>
      <img src={eight} alt='mababa' className='responsive-image__image'></img>
      <motion.div
        className="box"
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
      >
        <p className='p'>It didn’t matter how big our house was; it mattered that there was love in it.</p>
      </motion.div>
      <img src={four} alt='mababa' className='responsive-image__image'></img>
    </div>

    <div className='responsive-image'>
      <motion.div
        className="box"
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
      >
        <p className='p'>Everyone needs a house to live in, but a supportive family is what builds a home.</p>
      </motion.div>
      <img src={six} alt='mababa' className='responsive-image__image'></img>
      <img src={nine} alt='mababa' className='responsive-image__image'></img>
      <motion.div
        className="box"
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
      >
        <p className='p'>Having one kid makes you a parent. Having two kids makes you a referee.</p>
      </motion.div>
      <img src={five} alt='mababa' className='responsive-image__image'></img>
    </div>
    </motion.div>
  </>

  );
}

export default Page;
