
const students = {
  "vivek": {
    "name": "vivek",
    "age": "23",
    "email": "vivek@email.com"
  },
  "rahul": {
    "name": "rahul",
    "age": "22",
    "email": "rahul@email.com"
  },
  "ananya": {
    "name": "ananya",
    "age": "23",
    "email": "ananya@email.com"
  },
  "ashfaq": {
    "name": "ashfaq",
    "age": "23",
    "email": "ashfaq@email.com"
  },
}

// React Component
const test = (name) => { // rahul
  const student = students[name]

  // {
  //   "name": "vivek",
  //   "age": "23",
  //   "email": "vivek@email.com"
  // }

  console.log(student)

  return (
    <div>
      <h1>Hello {student.name}</h1>
    </div>
  );
}

const getStudent = () => {
  return "test"
}

const Student = (properties) => {
  console.log(properties)
  // {
  //   name: "vivek",
  //   age: 22
  // }
  return (
    <div>
      <h1>Hello {properties.name}</h1>
      <p>Age: {properties.age}</p>
    </div>
  );
}

// React Component  - Class and
const SampleFunction = () => {
  let isDarkTheme = false

  const theme = isDarkTheme ? 'dark' : 'light'


  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a paragraph</p>
      <p>test</p>
      {test("rahul")}
      
      <Student name={"vivek"} age={22} 
        address = {
          {
            "street": "123",
            "city": "bangalore"
          }
        } 
      />
      {/* <div><h1></h1></div> */}
    </div>
  );
} 

export default SampleFunction;

// - Capitalize the first letter of each word
// - <div /> - <ReactElement />
// - Props are passed inside the tag - <ReactElement name="vivek" />
// - Props are acccessed as an object - 
//   - const ReactElement = (props) =>  <div>{props.name}</div>
//  Props are always passed from parent to child
//  The flow of data is always from top to bottom. 

























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Ashfaq <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn REACT KS
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
