import React from 'react';
import styles from './Box.module.css';


const Display = (props) => {
    const {allSang, setAllSang} = props;
    return (
        <div className = {styles.container}>
            {
            allSang.map((newBox, indx ) =>{
                return <div  className= {styles.box} style={{backgroundColor: newBox.boxColor }}>
            </div>
            })}
        </div>
    );
};


export default Display;
