import { Link, useNavigate } from "react-router-dom"
import { Layouts } from "../layouts"
import { useEffect } from "react";

export function Welcome() {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/home');
    }
  }, [navigate]);
  return (
    <Layouts>
      <div class="jumbotron">
        <h1 class="display-4">Halo, Dunia!!</h1>
        <p class="lead">
          Ini adalah Tugas membaut auth api dan songs api dengan menggunakan Larave & React
        </p>
        <hr class="my-4" />
        <p>
          Silahkan Login terlebih dahulu jika punua akun, jika tidak registrasi
        </p>

        <Link to="register" class="btn btn-secondary px-4 px-1 me-2">Register</Link>
        <Link to="login" class="btn btn-primary btn-lg px-4 py-1">Login</Link>
      </div>
    </Layouts >
  )
} 