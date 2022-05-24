import "./Students.css"

const Student = (props) => {
    return (
        <div style={{
            marginTop: 15,
            marginBottom: 15
        }}>
            <img src={props.image} alt="student" />
            <h2 
                style={{
                    color: props.age > 20 ? "red" : "green"
                }}>
                    Hello {props?.name ?? "Default Name"}    
                </h2>
            <h3>Age: {props?.age ?? "Default Age"}</h3>
        </div>
    )
}


const App = () => {
   const  students = [{
    "id": 1,
    "name": "Hayes",
    "age": 57,
    "image": "http://dummyimage.com/200x100.png/cc0000/ffffff"
  }, {
    "id": 2,
    "name": "Oralia",
    "age": 88,
    "image": "http://dummyimage.com/226x100.png/5fa2dd/ffffff"
  }, {
    "id": 3,
    "name": "Somerset",
    "age": 95,
    "image": "http://dummyimage.com/145x100.png/dddddd/000000"
  }, {
    "id": 4,
    "name": "Ainslie",
    "age": 54,
    "image": "http://dummyimage.com/132x100.png/dddddd/000000"
  }, {
    "id": 5,
    "name": "Selig",
    "age": 2,
    "image": "http://dummyimage.com/232x100.png/dddddd/000000"
  }, {
    "id": 6,
    "name": "Winne",
    "age": 53,
    "image": "http://dummyimage.com/146x100.png/dddddd/000000"
  }, {
    "id": 7,
    "name": "Elliott",
    "age": 2,
    "image": "http://dummyimage.com/216x100.png/cc0000/ffffff"
  }, {
    "id": 8,
    "name": "Abbi",
    "age": 30,
    "image": "http://dummyimage.com/239x100.png/ff4444/ffffff"
  }, {
    "id": 9,
    "name": "Tally",
    "age": 53,
    "image": "http://dummyimage.com/205x100.png/cc0000/ffffff"
  }, {
    "id": 10,
    "name": "Leena",
    "age": 29,
    "image": "http://dummyimage.com/110x100.png/ff4444/ffffff"
  }, {
    "id": 11,
    "name": "Terese",
    "age": 39,
    "image": "http://dummyimage.com/192x100.png/dddddd/000000"
  }, {
    "id": 12,
    "name": "Orlando",
    "age": 31,
    "image": "http://dummyimage.com/162x100.png/dddddd/000000"
  }, {
    "id": 13,
    "name": "Rochelle",
    "age": 56,
    "image": "http://dummyimage.com/162x100.png/cc0000/ffffff"
  }, {
    "id": 14,
    "name": "Michal",
    "age": 21,
    "image": "http://dummyimage.com/177x100.png/5fa2dd/ffffff"
  }, {
    "id": 15,
    "name": "Aurilia",
    "age": 62,
    "image": "http://dummyimage.com/193x100.png/5fa2dd/ffffff"
  }, {
    "id": 16,
    "name": "Ward",
    "age": 100,
    "image": "http://dummyimage.com/129x100.png/dddddd/000000"
  }, {
    "id": 17,
    "name": "Grady",
    "age": 28,
    "image": "http://dummyimage.com/132x100.png/dddddd/000000"
  }, {
    "id": 18,
    "name": "Robinetta",
    "age": 97,
    "image": "http://dummyimage.com/245x100.png/cc0000/ffffff"
  }, {
    "id": 19,
    "name": "Sharla",
    "age": 47,
    "image": "http://dummyimage.com/148x100.png/dddddd/000000"
  }, {
    "id": 20,
    "name": "Leta",
    "age": 25,
    "image": "http://dummyimage.com/127x100.png/cc0000/ffffff"
  }, {
    "id": 21,
    "name": "Rebeka",
    "age": 63,
    "image": "http://dummyimage.com/212x100.png/5fa2dd/ffffff"
  }, {
    "id": 22,
    "name": "Tann",
    "age": 89,
    "image": "http://dummyimage.com/109x100.png/dddddd/000000"
  }, {
    "id": 23,
    "name": "Alvinia",
    "age": 68,
    "image": "http://dummyimage.com/193x100.png/cc0000/ffffff"
  }, {
    "id": 24,
    "name": "Glen",
    "age": 51,
    "image": "http://dummyimage.com/170x100.png/ff4444/ffffff"
  }, {
    "id": 25,
    "name": "Lonna",
    "age": 29,
    "image": "http://dummyimage.com/161x100.png/ff4444/ffffff"
  }, {
    "id": 26,
    "name": "Estrella",
    "age": 78,
    "image": "http://dummyimage.com/169x100.png/dddddd/000000"
  }, {
    "id": 27,
    "name": "Jelene",
    "age": 82,
    "image": "http://dummyimage.com/215x100.png/dddddd/000000"
  }, {
    "id": 28,
    "name": "Vita",
    "age": 28,
    "image": "http://dummyimage.com/208x100.png/5fa2dd/ffffff"
  }, {
    "id": 29,
    "name": "Nikkie",
    "age": 40,
    "image": "http://dummyimage.com/203x100.png/dddddd/000000"
  }, {
    "id": 30,
    "name": "Terrance",
    "age": 7,
    "image": "http://dummyimage.com/234x100.png/cc0000/ffffff"
  }, {
    "id": 31,
    "name": "Idelle",
    "age": 47,
    "image": "http://dummyimage.com/192x100.png/ff4444/ffffff"
  }, {
    "id": 32,
    "name": "Marjy",
    "age": 86,
    "image": "http://dummyimage.com/114x100.png/5fa2dd/ffffff"
  }, {
    "id": 33,
    "name": "Erasmus",
    "age": 27,
    "image": "http://dummyimage.com/107x100.png/ff4444/ffffff"
  }, {
    "id": 34,
    "name": "Noelyn",
    "age": 62,
    "image": "http://dummyimage.com/238x100.png/dddddd/000000"
  }, {
    "id": 35,
    "name": "Melania",
    "age": 84,
    "image": "http://dummyimage.com/127x100.png/5fa2dd/ffffff"
  }, {
    "id": 36,
    "name": "Lindsay",
    "age": 43,
    "image": "http://dummyimage.com/153x100.png/5fa2dd/ffffff"
  }, {
    "id": 37,
    "name": "Ginelle",
    "age": 7,
    "image": "http://dummyimage.com/154x100.png/cc0000/ffffff"
  }, {
    "id": 38,
    "name": "Katrinka",
    "age": 40,
    "image": "http://dummyimage.com/193x100.png/5fa2dd/ffffff"
  }, {
    "id": 39,
    "name": "Nanni",
    "age": 78,
    "image": "http://dummyimage.com/226x100.png/cc0000/ffffff"
  }, {
    "id": 40,
    "name": "Tobe",
    "age": 22,
    "image": "http://dummyimage.com/203x100.png/dddddd/000000"
  }, {
    "id": 41,
    "name": "Monika",
    "age": 70,
    "image": "http://dummyimage.com/145x100.png/cc0000/ffffff"
  }, {
    "id": 42,
    "name": "Port",
    "age": 87,
    "image": "http://dummyimage.com/171x100.png/dddddd/000000"
  }, {
    "id": 43,
    "name": "Neely",
    "age": 80,
    "image": "http://dummyimage.com/110x100.png/cc0000/ffffff"
  }, {
    "id": 44,
    "name": "Reinaldos",
    "age": 62,
    "image": "http://dummyimage.com/193x100.png/ff4444/ffffff"
  }, {
    "id": 45,
    "name": "Daisey",
    "age": 10,
    "image": "http://dummyimage.com/242x100.png/dddddd/000000"
  }, {
    "id": 46,
    "name": "Rory",
    "age": 60,
    "image": "http://dummyimage.com/249x100.png/5fa2dd/ffffff"
  }, {
    "id": 47,
    "name": "Amelina",
    "age": 6,
    "image": "http://dummyimage.com/213x100.png/5fa2dd/ffffff"
  }, {
    "id": 48,
    "name": "Darnell",
    "age": 66,
    "image": "http://dummyimage.com/169x100.png/cc0000/ffffff"
  }, {
    "id": 49,
    "name": "Bab",
    "age": 38,
    "image": "http://dummyimage.com/151x100.png/ff4444/ffffff"
  }, {
    "id": 50,
    "name": "Trudey",
    "age": 72,
    "image": "http://dummyimage.com/249x100.png/5fa2dd/ffffff"
  }, {
    "id": 51,
    "name": "Heindrick",
    "age": 80,
    "image": "http://dummyimage.com/170x100.png/ff4444/ffffff"
  }, {
    "id": 52,
    "name": "Giordano",
    "age": 79,
    "image": "http://dummyimage.com/210x100.png/dddddd/000000"
  }, {
    "id": 53,
    "name": "Tamqrah",
    "age": 92,
    "image": "http://dummyimage.com/125x100.png/ff4444/ffffff"
  }, {
    "id": 54,
    "name": "Nicolle",
    "age": 72,
    "image": "http://dummyimage.com/244x100.png/dddddd/000000"
  }, {
    "id": 55,
    "name": "Nels",
    "age": 48,
    "image": "http://dummyimage.com/242x100.png/dddddd/000000"
  }]

    // for of loop
    // for (let student of students) {
    //     console.log(student)
    // }

    


    return (
        <div>
            <h1>Hello World</h1>
            {students.map((element,index) => {
                console.log(element, index)
                return(
                    <Student 
                        key={element.name}
                        name={element.name}
                        age={element.age}
                        image={element.image}
                    />    
                )
            })}
            {/* <Student name="vivek" age="23" />
            <Student name="rahul" age="22" />
            <Student name="ananya" age="23" />
            <Student name="ashfaq" age="23" />
            <Student name={"vamshi"} age="" /> */}
        </div>
    )
}

export default App;