
import Paciente from "./Paciente"


const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => { //3-->Poner la variable ahi para poder usarla dentro del componente


    //Se puede aplicar distructuring, para que asi en lugar de poner pacientes.nombre, .propietario etc
    //Solo pongamos: nombre, paciente, fecha, sintomas, etc
    //Esos se hace de la siguiente forma:
    //const {nombre, propietario, email, fecha, sintomas} = pacientes



    return (
        <div className=' md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto '>

            {pacientes && pacientes.length ?
                (
                    <>
                        <h2 className='font-black text-center text-3xl'>Listado Pacientes</h2>
                        <p className='text-xl text-center mt-5 mb-10'>
                            Administra Tus {" "}
                            <span className='text-indigo-700 font-bold'>
                                Pacientes Y Citas
                            </span>
                        </p>

                        {pacientes.map( paciente => {
                            //Paciente es variable temporal que se usa para iterar en cada elemento, .nombre, .fecha .email etc.
                            //Debemos pasarle un identificador unico, en este caso el que se genera en la funcion
                            //que hice en el formulario, la cual llame en el objeto paciente con el id

                            return (
                                <Paciente
                                    key={paciente.id}
                                    paciente={paciente} //Pasamos como prop la variable temporal  
                                    setPaciente={setPaciente} //4--> Si voy a usar esa prop en otro comonente, pasarla tambien para usarla despues en otro componente   
                                    eliminarPaciente={eliminarPaciente}              
                                />
                            )
                        })}
                    </>
                ) : (
                    <>
                        <h2 className='font-black text-center text-3xl'>No hay pacientes</h2>
                        <p className='text-xl text-center mt-5 mb-10'>
                            Agrega a tus pacientes {" "}
                            <span className='text-indigo-700 font-bold'>
                                Desde el formulario
                            </span>
                        </p>
                    </>
                )}




        </div>
    )
}

export default ListadoPacientes