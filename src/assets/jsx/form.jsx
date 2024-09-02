import React from "react";
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

const HolaMundo = ()=>{
    return(
        <div>Segunda prueba</div>
    );
};

root.render(<HolaMundo />);