import { Card, Form } from 'react-bootstrap';

function FormContainer() {
    return (
        <Card>
            <Form className='px-2'>
                <div className='h4 pt-2 pb-2 text-center lead text-dark'>Add New Item</div>
                <Form.Group className="mb-3">
                    <Form.Label className='mx-2'>Todo item</Form.Label>
                    <Form.Control className='form-control' type='text' placeholder='Add todo item' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='mx-2' aria-label='Due Date'>Due Date</Form.Label>
                    <input className='form-control' type='date' placeholder='Due Date' />
                </Form.Group>
                <div className='btn btn-primary mb-3 w-100' type="submit">Add Todo</div>
            </Form>
        </Card>
    )
}

export default FormContainer;