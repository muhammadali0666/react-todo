import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  const [price, setPrice] = useState();
  const [task, setTask] = useState([]);

  const addItem = () => {
    const taskName = {
      id: uuidv4(),
      product: value,
      task: data,
      price: price,
    };
    if (value.trim().length === 0 || data.trim().length === 0 || price.trim().length === 0) {
      alert("ILTIMOS HAMMASINI TO'LDIRING")
    }
    else{
      setTask([...task, taskName])
      setData("")
      setPrice("")
      setValue("")
    }
    
  };

  return (
    <div className="App container">
      <h1 className="mx-auto text-success py-3">Mahsulot kriting</h1>

      <div className="box">
        <div className="">
          <input
            className="form-control mb-3 shadow w-50"
            type="text"
            placeholder="mahsulot kriting..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <select 
            className="form-control mb-3 shadow w-50"
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}>
            <option value="Qora">Qora</option>
            <option value="Oq">Oq</option>
            <option value="Qizil">Qizil</option>
          </select>
        </div>
        <div>
          <input
            className="form-control mb-3 shadow w-50"
            type="number"
            placeholder="mahsulot kriting..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            addItem();
          }} 
          className="btn btn-success"
        >
          ADD TASK
        </button>
      </div>

      <table class="table mt-5 w-50">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">category</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        <tbody>
          {task.length > 0 ? (
            task.map((e,i) => {
              return (
                <>
                  <tr key={e.id}>
                    <th scope="row">{i}</th>
                    <td>{e.product}</td>
                    <td>{e.task}</td>
                    <td>{e.price}</td>
                  </tr>
                </>
              );
            })
          ) : (
            <p className="text-danger">NOT FOUND!</p>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
