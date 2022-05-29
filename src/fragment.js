import React from 'react';
import PropTypes from 'prop-types';

const SampleReactComponent = props => {
    return (
        <div>
            {props.name}
            <br />
            {props.age}
        </div>
    );
};

SampleReactComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    address: PropTypes.object,
    products: PropTypes.array
};

const SampleReactApp = () => {
    // return <SampleReactComponent name="Ashfaq" age={10} /> 
    return (
        <>
            <SampleReactComponent name="Ashfaq" age={10} />
            <SampleReactComponent name='Rahul' age={11} address={{street1: "Sample"}} />
        </>
    )
}

export default SampleReactApp;