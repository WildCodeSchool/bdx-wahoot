import React from 'react';

function Main(props) {
    const {children} = props;

    return (
        <div>
            <div>Header</div>
            {children}
            <div>Footer</div>
        </div>
    );
}

export default Main;