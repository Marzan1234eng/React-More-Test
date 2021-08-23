import logo from './logo.svg';
import './App.css';

function App() {

    /*const shopJson(){

    }*/

    const shopKepperDetails = [
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
    ];
  return (
    <div className="App">
      <header className="App-header">
          {
              shopKepperDetails.map(data => <Shop name={data.name} position={data.position}
                                                  salary={data.salary}></Shop>)
          }
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
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
    const {name, position, salary} = props;
    return(
        <div style={style}>
            <h4>{name}</h4>
            <h5>Position is {position}</h5>
            <h5>Salary is {salary}</h5>
        </div>
    )

}
export default App;
