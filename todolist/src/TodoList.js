import './TodoList.css';
import { Container, Form } from 'react-bootstrap';

function TodoList() {
  return (
    <div className="container-fluid bg-light">
      <div className='navbar'>
        <div className='navbar-brand'>Assignment 2: Neeha Kalluri ToDo List</div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <FormContainer />
        </div>
        <div className="col-md-3 mr-2">
          <ItemListContainer />
        </div>
        <div className="col-md-6 mr-2">

        </div>
      </div>
    </div>
  );
}

function FormContainer() {
  return (
    <div className='card'>
      <div className='form px-2'>
        <h4 className='pt-2 pb-2 text-center lead text-dark'>Add New Item</h4>
        <div className="form-group mb-3">
          <input className='form-control' type='text' placeholder='Title' />
        </div>
        <div className="form-group mb-3 w-50">
          <input className='form-control' type='date' placeholder='Due Date' />
        </div>
        <div className='btn btn-primary mb-3' type="submit">Submit</div>
      </div>
    </div>
  )
}

function ItemListContainer() {
  return (
    <div className='list-group bg-primary'>
      
    </div>
  );
}
export default TodoList;
