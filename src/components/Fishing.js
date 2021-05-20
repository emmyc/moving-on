//import React, {useEffect, useState} from 'react';
import React from 'react';
import '../styles/Fishing.scss';
//import Background from '../assets/fishback.png';
import Water from '../assets/fishwater.png';

function Fishing() {


  return (
    <section id='game'>

      <water>
      <img src={Water}/>
      </water>
    </section>
  );
}

export default Fishing;
