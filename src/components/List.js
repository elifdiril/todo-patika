
function List({ list, setList }) {

    const deleteHandle = (element) => {
        setList(list.filter(el => el.todo !== element.todo))
    }

    const checkButtonHandle = (id) => {
        const newList = list.map((item) => {
            if (item.id === id) {
                const updatedItem = {
                    ...item,
                    status: !item.status,
                };

                return updatedItem;
            }
            return item;
        });
        console.log(newList)
        setList(newList);
    }

    return (
        <div>
            <ul className="view">
                {list.map((item) => {
                    return (
                        <div key={item.id} className="todo-list">
                            <li className={item.status ? "completed" : ""}>
                                <input value={item.status} className="toggle" type="checkbox" onChange={() => checkButtonHandle(item.id)} checked={item.status ? "checked" : ""} />
                                <label>{item.todo}</label>
                                <button className="destroy" onClick={() => deleteHandle(item)} />
                            </li>
                        </div>)
                })
                }
            </ul>
        </div>
    );
}

export default List;