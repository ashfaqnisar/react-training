
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import HomeApp from "./App"
import StudentsApp from "./Students"

const SampleComponent = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 onClick={() => navigate("/students")}>Sample Component</h1>
            {/* <Link to="/home">Home</Link> */}
            <button onClick={() => navigate("/home")}>Home</button>
            <Link to="/home">Home</Link>
            <Link to="/students">Students</Link>
        </div>
    );
}

const SampleApp = () => {
    return (
        <div>
            <BrowserRouter>
                <SampleComponent />
                <Routes>
                    <Route index element={
                        <div>
                            <Link to="/home">Home</Link>
                            <Link to="/students">Students</Link>
                        </div>
                    }/>
                    <Route path="/home" element={<HomeApp />} />
                    <Route path="/students" element={<StudentsApp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default SampleApp;