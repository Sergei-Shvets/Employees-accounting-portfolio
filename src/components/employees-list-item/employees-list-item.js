import { Component } from 'react';
import './employees-list-item.css';

// Классовый компонент

class EmployeesListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            increase: false,
            like: false,
        }
    }

    onIncrease = () => {
        this.setState(state => ({
            increase: !state.increase,
        }))
        // Можно использовать деструктуризацию:
        // this.setState(({increase}) => ({
        //     increase: !increase
        // }))
    }

    addLike = () => {
        this.setState(state => ({
            like: !state.like,
        }))
    }

    render () {
        const {name, salary, onDelete} = this.props;
        const {increase, like} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";

    if(increase){
        classNames += " increase";
    }

    if(like){
        classNames += " like";
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label"
                onClick={this.addLike}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-cookie btn-sm"
                    type="button"
                    onClick={this.onIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button className="btn-trash btn-sm" type="button"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
    }
}

// Функциональный компонент

// const EmployeesListItem = (props) => {
//     const {name, salary, increase} = props;

//     let classNames = "list-group-item d-flex justify-content-between";

//     if(increase){
//         classNames += " increase";
//     }
    
//     return (
//         <li className={classNames}>
//             <span className="list-group-item-label">{name}</span>
//             <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
//             <div className="d-flex justify-content-center align-items-center">
//                 <button className="btn-cookie btn-sm" type="button">
//                     <i className="fas fa-cookie"></i>
//                 </button>
//                 <button className="btn-trash btn-sm" type="button">
//                     <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i>
//             </div>
//         </li>
//     )
// }

export default EmployeesListItem;