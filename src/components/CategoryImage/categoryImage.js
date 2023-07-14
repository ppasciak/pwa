import React from 'react';
import classes from './categoryImage.module.css'

const CategoryImage = ({ src, name }) => {
    return (
        <div className={classes.wrapper}>
            <img src={src} alt={name} className={classes.image} />
        </div>
    );
};

export default CategoryImage;
