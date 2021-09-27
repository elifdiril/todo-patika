import { useState } from 'react';

function AddItem({ list, setList }) {
    const [item, setItem] = useState('');
    const [counter, setCounter] = useState(2)

    const addNewItem = () => {
        if (item !== "")
            setList([...list, { id: counter + 1, todo: item, status: false }]);
        setItem('');
        setCounter(counter + 1)
    };

    return (
        <div className="new-todo">
            <input  value={item} onChange={(e) => setItem(e.target.value)} autoFocus placeholder="What needs to be done?" />
            <button onClick={addNewItem}>Add</button>
        </div>
    );
}

export default AddItem;