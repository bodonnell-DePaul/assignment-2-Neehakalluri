import './TodoList.css';
import { Container, Row, Navbar, NavbarBrand, Tab, Col } from 'react-bootstrap';
import ItemListContainer from './views/ItemListContainer';
import FormContainer from './views/FormContainer';
import ItemDescription from './views/ItemDescription';
import { useState } from 'react';

function TodoList() {
  let [activeTodo, setActiveTodo] = useState(0);
  return (
    <Container fluid className="bg-light vh-100">
      <Navbar className='navbar'>
        <NavbarBrand>Assignment 2: ToDo List</NavbarBrand>
      </Navbar>
      <Tab.Container fluid>
        <Row>
          <Col md={4}><FormContainer /></Col>
          <Col md={3}>
            <ItemListContainer
              activeId={activeTodo}
              setActiveId={(item) => setActiveTodo(item)}
            />
          </Col>
          <Col md={5}>
            <ItemDescription paneIndex={activeTodo} />
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default TodoList;
