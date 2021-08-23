import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

    /*const shopKepperDetails = [
        {
            name: "Arnald Bajigar",
            position: "Manager",
            salary: "$7500"
        },
        {
            name: "Febrigous Quarter",
            position: "Assistant Manager",
            salary: "$6900"
        },
        {
            name: "Robert Duogo",
            position: "Executive",
            salary: "$3500"
        }
    ];*/

    const [shopKepper, setShopkepper] = useState([])
    useEffect( () =>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setShopkepper(data.slice(0,5)))
    },[])

    const [comments, setComments] = useState([]);
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => setComments(data.slice(0,5)))
    },[])

  return (
    <div className="App">
        {
            comments.map( data =>
                <Comments body={data.body} id={data.id}>

                </Comments>
            )
        }
      <header className="App-header">
          {
              shopKepper.map(data =>
                  <Shop name={data.name} email={data.email} id={data.id} phone={data.phone}>
                  </Shop>)
          }
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Comments(props){
    const {body,id} = props;
    return(
        <div>
            <p>{id}. Comments {body}</p>
        </div>
    )
}

function Shop(props){
    const style = {
        color: "white",
        border: "1px solid Green",
        margin: "20px",
        width: "200px",
        height: "200px",
        padding: "10px"
    }
    const {name, email, phone} = props;
    return(
        <div style={style}>
            <h4>{name}</h4>
            <h5>Email: {email}</h5>
            <h5>Phone: {phone}</h5>
        </div>
    )

}
export default App;
