import React from "react";
import { SyncOutlined } from "@ant-design/icons";
const AuthForm = ({
  handleSubmit,
  name,
  setname,
  email,
  setemail,
  password,
  setpassword,
  secret,
  setsecret,
  loading,
  page,
  // username,
  // setUsername,
  // about,
  // setAbout,
  // profileUpdate,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* {profileUpdate && (
          <div className="form-group">
            <label htmlFor="user" className="form-label">
              Username
            </label>

            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="user"
              className="form-control"
              placeholder="Username"
            />
          </div>
        )}
        {profileUpdate && (
          <div className="form-group ">
            <label htmlFor="about" className="form-label">
              About
            </label>
            <input
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              type="text"
              id="about"
              className="form-control"
              placeholder="About"
            />
          </div>
        )} */}

        {page !== "login" && (
          <div className="form-group ">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter name"
            />
          </div>
        )}
        <div className="form-group ">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            // disabled={profileUpdate}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            className="form-control"
            id="Password"
            placeholder="Password"
          />
        </div>
        {page !== "login" && (
          <>
            <div className="form-group my-2">
              <label className="form-label">Questions</label>
              <select
                className="form-control"
                aria-label="Default select example"
              >
                <option>Pick a questions</option>
                <option>Where you born?</option>
                <option>What is your nick name?</option>
                <option>What is your favorite color?</option>
              </select>
            </div>
            <div className="form-group my-2">
              <input
                value={secret}
                onChange={(e) => setsecret(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Write your answer"
              />
            </div>
          </>
        )}

        <div className="text-center">
          <button
            disabled={
               page === "login"
                ? !email || !password || loading
                : !name || !email || !password || !secret || loading
            }
            type="submit"
            className="btn btn-primary col-12 my-2 "
          >
            {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
