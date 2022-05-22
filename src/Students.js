import "./Students.css"

const Student = (props) => {
    return (
        <div style={{
            marginTop: 15,
            marginBottom: 15
        }}>
            <h2>Hello {props?.name ?? "Default Name"}</h2>
            <h3>Age: {props?.age ?? "Default Age"}</h3>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Student name="vivek" age="23" />
            <Student name="rahul" age="22" />
            <Student name="ananya" age="23" />
            <Student name="ashfaq" age="23" />
            <Student name={"vamshi"} age="" />
        </div>
    )
}

export default App;