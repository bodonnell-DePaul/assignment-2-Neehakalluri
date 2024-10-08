import { Tab } from "react-bootstrap";
import { todos } from '../todoItems';

function ItemDescription() {
    return (
        <Tab.Content role="tabpanel">
            {
                todos.map((item, index) => (
                    <Tab.Pane eventKey={"#item" + index} key={index}>
                        <p className="text-dark">{item.description}</p>
                        <input type="date" value={item.dueDate} onChange={() => { }} />
                    </Tab.Pane>
                ))
            }
        </Tab.Content>
    );
}

export default ItemDescription;