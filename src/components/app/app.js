import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

// Классовый компонент

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'John Smith', salary: 800, increase: false, id: 1},
                {name: 'Alex Miller', salary: 3500, increase: true, id: 2},
                {name: 'Dan Brown', salary: 2000, increase: false, id: 3}, 
            ],
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render(){
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
    
                <EmployeesAddForm/>
            </div>
        )
    }
    
}

// Функциональный компонент

// function App(){

//     const data = [
//         {name: 'John Smith', salary: 800, increase: false, id: 1},
//         {name: 'Alex Miller', salary: 3500, increase: true, id: 2},
//         {name: 'Dan Brown', salary: 2000, increase: false, id: 3}, 
//     ];
//     return (
//         <div className="app">
//             <AppInfo/>

//             <div className="search-panel">
//                 <SearchPanel/>
//                 <AppFilter/>
//             </div>

//             <EmployeesList 
//                 data={data}
//                 onDelete={id => console.log(id)}/>

//             <EmployeesAddForm/>
//         </div>
//     )
// }

export default App;