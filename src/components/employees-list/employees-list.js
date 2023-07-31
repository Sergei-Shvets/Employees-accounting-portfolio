import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

  const elements = data.map((item) => {
    return(
      <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase} rise={item.rise} key={item.id}
      onDelete={() => onDelete(item.id)}
      onToggleIncrease={() => onToggleIncrease(item.id)}
      onToggleRise={() => onToggleRise(item.id)}/>
      
      // Здесь также можно использовать спред-оператор. Для этого сначала делаем деструктуризацию, прямо внутри метода map, до метода return
      // Выглядит это так: const {id, ...itemProps}; 
      // В itemProps передаются все остальные свойства 
      // свойство id обязательно нужно вытащить отдельно, чтобы присвоить его свойству 'key' каждого элемента
      // Затем уже идет присваивание: <EmployeesListItem key={id} {...itemProps};
      // Как видно, остальные свойства добавляются через спред-оператор. Фактически это тоже самое, что и запись выше этого комментария
    )
  });
  return (
    <ul className="app-list list-group">
        {elements}
    </ul>
  )
}

export default EmployeesList;