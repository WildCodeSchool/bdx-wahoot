import React from 'react';

const questionReps = [{
    id:"123",
    title: "Titre du Wahoot",
}
];

const TitlePlayer = () => {
    return (
        <div>
            {questionReps.map((qr) => {
                return <h2> {qr.title} </h2>
            })}
            
        </div>
    )
};

export default TitlePlayer;