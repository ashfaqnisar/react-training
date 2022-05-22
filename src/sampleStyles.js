// 1. Internal
// 2. Inline
// 3. External

import "./sampleStyles.css"

const testStyle = {
    textTransform: "uppercase"
}

const SampleStyle = () => { 
    return (
        <div style={{
            color: "red"
        }}>
            <h1 style={testStyle}>Hello World</h1>
            <p>sample name</p>
        </div>
    )
}

export default SampleStyle;

