import React, { useEffect } from 'react';
import '../styles/Preload.scss';
// import 'regenerator-runtime/runtime';
import Loading from '../assets/loading.svg';

const PRELOAD_TIMEOUT_IN_SEC = 10;

function Preload(props) {
  const { images } = props;
  const REQUEST_BLOCK = 8;
  useEffect(() => {
    // void means the promise's result is being ignored.
    // we do this to avoid an eslint rule: @typescript-eslint/no-floating-promises
    void cacheImages(images);
    const timeout = setTimeout(() => props.onPreloaded(), PRELOAD_TIMEOUT_IN_SEC * 1000);
    return () => clearTimeout(timeout);
  }, []);

  const cacheImages = async (srcArray) => {
    for (let i = 0; i < srcArray.length; i+=REQUEST_BLOCK) {
      const promises = [];
      // preload REQUEST_BLOCK number of images
      for (let j = i; j < srcArray.length && j - i < REQUEST_BLOCK; j++) {
        promises.push(
          new Promise(function (resolve, reject) {
            const img = new Image();
            img.src = srcArray[j];
            img.onload = () => resolve(srcArray[j]);
            img.onerror = () => reject(`Could not load ${srcArray[j]}. Please try again.`);
          }).catch((error) =>
            // eslint-disable-next-line no-console
            console.warn(error),
          ),
        );
      }

      await Promise.all(promises);
    }

    // const promises = await srcArray.map((src) => {
    //   return new Promise(function (resolve, reject) {
    //     const img = new Image();
    //     img.src = src;
    //     img.onload = () => resolve(src);
    //     img.onerror = () => reject(`Could not load ${src}. Please try again.`);
    //   }).catch((error) =>
    //     // eslint-disable-next-line no-console
    //     console.warn(error),
    //   );
    // });
    // await Promise.all(promises);
    props.onPreloaded();
  };

  return (
    <>
      <div className='loading-screen'>
        <img src={Loading} alt='loading...'/>
      </div>
    </>
  );
}
export default Preload;