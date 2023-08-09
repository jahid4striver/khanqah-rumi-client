import React from 'react';

const UsePlayer = (url) => {
    console.log(url);
    return (
        <div>
            <audio src={url} controls></audio>
        </div>
    );
};

export default UsePlayer;