import React from "react";
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

const HolaMundo = ()=>{
    return(
        <div>Mi primer deploy</div>
    );
};

root.render(<HolaMundo />);