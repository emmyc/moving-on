//  import PropTypes from 'prop-types';
//  import React, { useState, useEffect, useFade } from 'react';
//  import '../App.css';

//  const useFade = (initial) => {
//     const [show, setShow] = useState(initial);
//     const [isVisible, setVisible] = useState(show);

//     // Update visibility when show changes
//     useEffect(() => {
//         if (show) setVisible(true);
//     }, [show]);

//     // When the animation finishes, set visibility to false
//     const onAnimationEnd = () => {
//         if (!show) setVisible(false);
//     };

//     const style = { animation: `${show ? "fadeIn" : "fadeOut"} .3s` };

//     // These props go on the fading DOM element
//     const fadeProps = {
//         style,
//         onAnimationEnd
//     };

//     return [isVisible, setShow, fadeProps];
// };
// const FadeText = ({ text } ) => {

//     const [fadeProp, setFadeProp] = useState({
//         fade: 'fade-out',
//     });

//     useEffect(() => {
//         const timeout = setInterval(() => {
//             if (fadeProp.fade === 'fade-out') {
//                 setFadeProp({
//                     fade: 'fade-in',
//                 });
//             } else {
//                 setFadeProp({
//                     fade: 'fade-out',
//                 });
//             }
//         }, 1000);

//         return () => clearInterval(timeout);
//     }, [fadeProp]);
//     return (
//         <>
//             <h1 className={fadeProp.fade}>{ text }</h1>
//         </>
//     );
// };

// // FadeText.defaultProps = {
// //     text: 'Hello World!',
// // };

// FadeText.propTypes = {
//     text: PropTypes.string,
// };

// export default FadeText;