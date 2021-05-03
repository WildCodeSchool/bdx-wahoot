import React from 'react';


const EndDatePopup = ({ wahoots }) => {
    let endDatePublished = wahoots.filter((wahoot) => wahoot.status === "published");
    return (<p>{endDatePublished}</p>
    )
};

export default EndDatePopup;

