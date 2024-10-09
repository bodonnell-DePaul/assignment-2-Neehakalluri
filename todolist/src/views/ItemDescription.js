import { Tab } from "react-bootstrap";
import { todos } from '../todoItems';

function ItemDescription({paneIndex}) {

    return (
        <Tab.Content role="tabpanel">
            {
                todos.map((item, index) => (
                    <Tab.Pane active={index == paneIndex} eventKey={"#item" + index} key={index}>
                        <p className="text-dark" contentEditable>{item.description}</p>
                        <input type="date" value={item.dueDate} onChange={() => { }} />
                    </Tab.Pane>
                ))
            }
        </Tab.Content>
    );
}

export default ItemDescription;