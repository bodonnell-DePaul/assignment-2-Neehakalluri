import { ListGroup } from 'react-bootstrap';
import { todos } from '../todoItems';

function ItemListContainer({activeId, setActiveId}) {

    const getVariant = (dueDate) => {
        const currentDate = new Date();
        const dueDateObj = new Date(dueDate);
        const diffTime = Math.abs(dueDateObj - currentDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 7) return 'primary';
        if (diffDays <= 7 && diffDays > 4) return 'success';
        if (diffDays <= 4 && diffDays > 2) return 'warning';
        return 'danger';
    };

    return (
        <ListGroup role='tablist'>
            {todos.map(function (item, index) {
                return (
                    <ListGroup.Item variant={getVariant(item.dueDate)}
                        eventKey={"#item" + index}
                        className={"list-group-item-"}
                        role='tab'
                        action={true}
                        active={index === activeId}
                        key={index}
                        onClick={() => setActiveId(index)}>
                        <a className={'list-group-item-'+ getVariant(item.dueDate)}>{item.title}</a>
                        </ListGroup.Item>
                );
            })
            }
        </ListGroup>
    );
}

export default ItemListContainer;