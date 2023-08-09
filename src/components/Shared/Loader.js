import React from 'react';
import loading3 from "../../assets/images/loading3.gif"

const Loader = () => {
    return (
        <div className="flex h-screen items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;