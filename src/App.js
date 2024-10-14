import { useState } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./Components/Form/Form";
import { ItemDo } from "./Components/ItemDo/ItemDo";

function App() {
    const [todos, setTodos] = useState([{
            id: 0,
            todo: "Выучить JS",
            status: true,
        },
        {
            id: 1,
            todo: "Выучить CSS",
            status: false,
        },
        {
            id: 2,
            todo: "Выучить React",
            status: true,
        },
    ]);

    function addDo(item) {
        const newDo = {
            id: todos.length,
            todo: item,
            status: false,
        };
        setTodos([...todos, newDo]);
    }
    let updateStatusDo = id => {
        console.log(id);
        let allTodos = todos;
        allTodos[id].status = true;
        setTodos(allTodos);
        console.log(todos);
    };

    let updateTextDo = (id, text) => {
        console.log(id, text);

        let allTodos = todos;
        allTodos[id].todo = text;
        setTodos(allTodos);
    };

    const deleteDo = id => {
        console.log(id);
        const newListDo = todos.filter(i => i.id !== id);
        setTodos(newListDo);
    };
    return ( <
        div className = "container" >
        <
        h1 > Список дел < /h1> <Form addDo={addDo} / > { " " } {
            !todos.length ? ( <
                h3 > Дел нет < /h3>
            ) : (
                todos.map(item => ( <
                    ItemDo updateStatusDo = { updateStatusDo }
                    updateTextDo = { updateTextDo }
                    item = { item }
                    deleteDo = { deleteDo }
                    />
                ))
            )
        } { " " } <
        /div>
    );
}

export default App;