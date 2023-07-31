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
                {name: 'John Smith', salary: 800, increase: false, rise: false, id: 1},
                {name: 'Alex Miller', salary: 3500, increase: false, rise: false, id: 2},
                {name: 'Dan Brown', salary: 2000, increase: false, rise: false, id: 3}, 
            ],
            term: '',
            filter: 'all',
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        if (newItem.name.length > 3 && newItem.salary.length > 0 && newItem.salary > 0){
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        }
    }

    // Эта функция выделяет пользователя по нажатию на иконку "печенька"
    onToggleIncrease = (id) => {
        // Первый вариант решения с изменением нужного объекта в массиве data:
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return{
        //         data: newArr,
        //     }
        // })

        // Второй вариант через map:
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, increase: !item.increase};
                } else {
                return item;
                }
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, rise: !item.rise};
                } else {
                    return item;
                }
            })
        }))
    }

    searchEmployees = (items, term) => {
        if(term.length === 0) return items;

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch(filter){
            case 'rise':
                return items.filter(item => item.rise === true);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render(){
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase === true).length;
        const visibleData = this.filterPost(this.searchEmployees(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees}
                increased={increased}
                />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
    
                <EmployeesAddForm onAdd={this.addItem}/>
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