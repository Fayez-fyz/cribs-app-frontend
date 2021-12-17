import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal, Card } from "antd";
import Link from "next/link";
import { UserContext } from "../context";
import { useRouter } from "next/router";
import AuthForm from "../components/forms/AuthForm";



const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [secret, setsecret] = useState("");
  const [ok, setok] = useState(false);
  const [loading, setloading] = useState(false);

  const [state] = useContext(UserContext);
  const router = useRouter();

  let handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name,email,password,secret)
    setloading(true);
    try {
      const { data } = await axios.post(`/register`, {
        name,
        email,
        password,
        secret,
      });
      if (data.error) {
        toast.error(data.error);
        setloading(false);
      } else {
        setname("");
        setemail("");
        setpassword("");
        setsecret("");
        setok(data.ok);
        setloading(false);
      }
    } catch (error) {
      toast.error(error.response.data);
      setloading(false);
    }
  };
  if (state && state.token) router.push("/cribs");
  return (
    <div className="container-fluid">
      <div className="row mt-2">
        <div className="col-lg-4 offset-lg-4">
          <Card
            hoverable
            className="bg-dark text-white reglog h-100 border rounded-3 border-primary"
          >
            <div className="col text-center">
              <h1 className="fw-bold text-white">
                <b>REGISTER</b>
              </h1>
            </div>
            <AuthForm
              handleSubmit={handleSubmit}
              name={name}
              setname={setname}
              email={email}
              setemail={setemail}
              password={password}
              setpassword={setpassword}
              secret={secret}
              setsecret={setsecret}
              loading={loading}
            />
            <div className="row mt-1">
              <div className="col">
                <p className="text-center">
                  You already registered?{" "}
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Modal
        title="Congratulations"
        visible={ok}
        onCancel={() => setok(false)}
        footer={null}
      >
        {" "}
        <p>You have successfully registered</p>
        <Link href="/login">
          <a className="btn btn-sm btn-primary">Login</a>
        </Link>
      </Modal>
    </div>
  );
};

export default Register;
