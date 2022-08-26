import React from 'react';

const Country = (props) => {
    console.warn(props.country)
    return (
        <div>
            <h1>Name: {props.country.name.common}</h1>
        </div>
    );
};

export default Country;