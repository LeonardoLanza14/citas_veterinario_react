import { useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {
  const [pacientes, setPacientes] = useState(() => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    return pacientesLS;
  }); //Este es un array
  const [paciente, setPaciente] = useState({}); //Este es un objeto

  //Pasar una prop. pasos:

  //1--> Declarar la variable con su setter en el componente padre


  //Fuera del return se pueden colocar funcione, dentro del return NO
  //Solamente podemos meter codigo de JS mediante llaves {}
  //Se pueden crear variables fuera del return, y mostrarlas dentro del return

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  


  const eliminarPaciente = (id) => {

    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)

  } //,filter no muta o cambia el arreglo original si no que nos retorna uno nuevo!!!



  return (
    <div className="container justify-center mx-auto mt-5">

      <Header />

      <div className="mt-24 md:flex">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
          <ListadoPacientes 
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
      </div>

    </div>
  )
}

export default App
