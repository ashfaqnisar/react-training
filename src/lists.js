const ListItem = props => {

    // {
    //     key: number, 
    //     itemData: {
    //         name: String,
    //         age: number,
    //        email: String
    //         image: String
    //         id: number
    //     }
    // }

    console.log(props.itemData.name)
    
    
    const { itemData: item } = props
    
    console.log(props.itemData.name)
    console.log(item.name)


    // const { name = "Ashfaq", age, image, id } = props.itemData



    return (
        <div style={{
            marginTop: 15,
            marginBottom: 15
        }}>
            <img src={item?.image} alt="student" />
            <h2>
                Hello {item?.name ?? "Default Name"}    
            </h2>
            <h3>Age: {item?.age ?? "Default Age"}</h3>
        </div>
    )
};





const ListApp = () => {
    const list = [{
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
      }
    ]

    return (
        <div>
            {/* {list.map((item) => <ListItem key={item.id} {...item} />)} */}
            {list.map((item) => <ListItem key={item.id} itemData={item} />)}
        </div>    
    )
}

export default ListApp;


// const sample = (a = 1, b) =>{
// return a + b
// }