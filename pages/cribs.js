import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import axios from "axios";
import CribsData from "../components/CribsData";
import UserRoute from "../components/routes/UserRoute";
import { UserContext } from "../context";
import { PlusSquareOutlined } from "@ant-design/icons";

const Cribs = () => {
  const [state, setState] = useContext(UserContext);
  const [cribs, setCribs] = useState([]);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [id, setid] = useState(null);
  const [ok, setok] = useState(false);
  const [pass, setPass] = useState(true);
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  let GetData = async () => {
    try {
      const cribs = await axios.get(
        "/cribs"
      );
      setCribs([...cribs.data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  let handleCreate = async () => {
    try {
      const create = await axios.post(
        "/cribs",
        {
          name: name,
          pic: img,
          location: location,
        }
      );
      setName("");
      setImg("");
      setLocation("");
      GetData();
    } catch (error) {
      console.log(error);
    }
  };
  let handleUpdate = async (id) => {
    try {
      const update = await axios.put(
        `/cribs/${id}`,
        {
          name: name,
          pic: img,
          location: location,
        }
      );
      setName("");
      setImg("");
      setLocation("");
      GetData();
    } catch (error) {
      console.log(error);
    }
  };
  let handleEdit = (id, name, pic, location) => {
    setPass(!pass);
    setid(id);
    pass ? setName(name) : setName("");
    pass ? setImg(pic) : setImg("");
    pass ? setLocation(location) : setLocation("");
  };

  let handleDelete = async (id) => {
    try {
      const del = await axios.delete(
        `/cribs/${id}`
      );
      GetData();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (state && state.token) {
      GetData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state && state.token]);

  return (
  <UserRoute>
   <div className="container-fluid my-3">
   <div className="row">
   
     <div className="col-lg-12">
        <div className="input-group mb-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
            placeholder="Search by name ..."
            aria-label="Recipient's name"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center my-2">
              <button className="btn btn-secondary" name='Create Cribs'  onClick={() => setok(true)}>
              <PlusSquareOutlined className=" fs-2 " /> <span>Create Cribs</span>
              </button>
            </div>
        <Modal
         title="Create/Edit"
         visible={ok}
         onCancel={() => setok(false)}
         footer={null}>
        <div >
        <h3> Create / Edit </h3>
        <input
          value={name}
          className="form-control mt-2"
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name"
        />

        <input
          value={img}
          className="form-control mt-2"
          onChange={(e) => setImg(e.target.value)}
          type="text"
          placeholder="Image Url"
        />

        <input
          value={location}
          className="form-control mt-2"
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Location"
        />

        <button
          className="btn btn-block btn-primary mt-2 mb-2"
          onClick={() =>
            name !== false && img !== false && location !== false
              ? pass
                ? handleCreate()
                : handleUpdate(id)
              : ""
          }
        >
          Submit
        </button>
      </div>
        </Modal>
        {loading ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47a3p0udgs59ya5nzo9fy2sirdmd88v3sgc322j1mm&rid=giphy.gif&ct=g"
            alt="loading"
            className='mx-auto mt-3 d-block'
          ></img>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {cribs
              .filter((obj) => obj.name.includes(search))
              .map((obj, id) => (
                <CribsData
                  key={id}
                  id={obj._id}
                  name={obj.name}
                  pic={obj.pic}
                  location={obj.location}
                  edit={handleEdit}
                  update={handleUpdate}
                  delete={handleDelete}
                  ok={ok}
                  setok={setok}
                />
              ))}
          </div>
        )}
      </div>
    </div>
   </div>
  </UserRoute>
  );
};

export default Cribs;
