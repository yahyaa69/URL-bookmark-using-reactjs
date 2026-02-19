import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function App() {


  let navigate = useNavigate();
  let [column, setColumn] = useState([]);
  let [record, setRecord] = useState([]);

  useEffect(() => {
    axios.get("https://bookmarkapi-110o.onrender.com/sites").then((res) => {
      // console.log(res);
      if (res.data.length > 0) {
      setColumn(Object.keys(res.data[0]));
      setRecord(res.data);
    }});
  }, []);
  // console.log(column);
  // console.log(record);

  let handleNavigate = (url)=>{
    navigate(`${url}`)
  }
  let handleDelete = (id) => {
    let ans = window.confirm("Do you want to Delete the bookmark?");

    if (ans) {
      axios.delete(`https://bookmarkapi-110o.onrender.com/sites/${id}`).then((res) => {
        alert("The bookmark is been removed!!!");
        setRecord((prev) => prev.filter((item) => item.id !== id));
      });
    }
  };

  return (
    <>
      <div id="main">
        <h1 id="heading">UrlHub</h1>
        <div className="create-btn">
          <Link to="/create">+ Add Bookmarks</Link>
        </div>
        <table>
          <thead>
            <tr>
              {column.map((d, i) => {
                return (
                  <Fragment key={i}>
                    <th>{d}</th>
                  </Fragment>
                );
              })}
              <th>Updates</th>
            </tr>
          </thead>
          <tbody>
            {record.map((d, i) => {
              return (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.url}</td>
                  <td>
                    <Link to={`/update/${d.id}`}>Update</Link>
                    <button onClick={() => handleDelete(d.id)}>Delete</button>
                    <Link to={`${d.url}`}>Navigate</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
