import { useState } from "react"


function printData (item){
    console.log(`the item name is ${item.name}`)
}

const ListItem = props => {
    const { itemData } = props

    return (
        <div 
            style={{
                marginTop: 15,
                marginBottom: 15, 
                border: "2px solid black",
                cursor: "pointer"
            }}
            onClick={() => console.log(`the item name is ${itemData.name}`)}
        >
            <img src={itemData?.image} alt="student" />
            <h2>
                Hello {itemData?.name ?? "Default Name"}    
            </h2>
            <h3>Age: {itemData?.age ?? "Default Age"}</h3>
        </div>
    )
};

let count = 0;

const EventsApp = () => {
    let list = [{
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

    // const [itemValue, setItemValue] = useState(defaultValue)

    const [items, setItems] = useState(list)

    const handleSearch = (searchText) => {
        // searchText = ""
        const result = list.filter((item) => {
            return item?.name?.toLowerCase().includes(searchText.toLowerCase().trim())
        })
        console.log(result)
        // list = result
        setItems(result)
    }


    return (
        <div>
            Counter: {++count}
            <input 
                type="text" 
                placeholder="Search Names" 
                onChange={(event) => handleSearch(event.target.value)} 
            />
            {items.map((item) => <ListItem key={item.id} itemData={item} />)}
        </div>    
    )
}

export default EventsApp;
