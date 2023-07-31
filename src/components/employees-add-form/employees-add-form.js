import { Component } from 'react';
import './employees-add-form.css';

// Классовый компонент

class EmployeesAddForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      salary: '',
    }
  }

  onValueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value, 
      // Квадртаные скобки дают возможность обратиться к атрбиуту "name" элемента input
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
        name: '',
        salary: ''
    })
  }

  render() {
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
          <h3>Добавьте нового сотрудника</h3>
          <form className="add-form d-flex"
            onSubmit={this.onSubmit}>
              <input type="text"
                  className="form-control new-post-label"
                  placeholder="Как его зовут?"
                  onChange={this.onValueChange}
                  name="name"
                  value={name} />
              <input type="number"
                  className="form-control new-post-label"
                  placeholder="З/П в $?"
                  onChange={this.onValueChange}
                  name="salary"
                  value={salary} />
              <button type="submit"
                  className="btn btn-outline-light">Добавить</button>
          </form>
      </div>
    )
  }
}

// Функциональный компонент

// const EmployeesAddForm = () => {
//   return (
//     <div className="app-add-form">
//         <h3>Добавьте нового сотрудника</h3>
//         <form className="add-form d-flex">
//             <input type="text"
//                 className="form-control new-post-label"
//                 placeholder="Как его зовут?" />
//             <input type="number"
//                 className="form-control new-post-label"
//                 placeholder="З/П в $?" />
//             <button type="submit"
//                 className="btn btn-outline-light">Добавить</button>
//         </form>
//     </div>
//   )
// }

export default EmployeesAddForm;