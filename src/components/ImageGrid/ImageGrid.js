import React, { useEffect, useState } from 'react';
import './styles.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { IMAGES } from '../../constants';
import { loadimages } from '../actions';

const ImageGrid = () => {
    const dispatch = useDispatch();

    const images = useSelector(state => state.images.imagespage) || [];
    const stats = useSelector(state => state.stats) || {};
    console.log(stats);
    const handlemore = e => {
        dispatch(loadimages());
    };
    return (
        <div className="content">
            <section className="grid">
                {images.map(image => (
                    <div
                        key={image.id}
                        className={`item item-${Math.ceil(
                            image.height / image.width,
                        )}`}
                    >
                        <img src={image.urls.small} alt={image.user.username} />
                    </div>
                ))}
                <button onClick={handlemore}> LoadMore</button>
            </section>
        </div>
    );
};

export default ImageGrid;
