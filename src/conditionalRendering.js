const ConditionalRendering = (props) => {

    if (props.age < 18) {
        return (
            <div>
                <h2>Sorry, you are too young to view this page!</h2>
            </div>
        )
    }

    return (
        <div>
            <h2>Conditional Rendering</h2>
            <h3>Age: {props?.age ?? "Default Age" }</h3>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <ConditionalRendering age={17} />
            <ConditionalRendering age={18} />
            <ConditionalRendering age={19} />
            <ConditionalRendering />
        </div>
    )
}

export default App