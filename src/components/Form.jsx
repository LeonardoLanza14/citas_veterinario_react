import { useState, useEffect } from 'react'
import Error from './Error';


//3 piezas clave:
//1--la parte que dice cliente, es la variable que contiene el valor del estado
//2--setCliente, es el modificador que va a cambiar el valor del estado de la variable cliente
//setCliente unicamente puede modificar el estado de cliente, ningun otro
//3--Por ultimo la funcion de useState que inicia con esas llaves que quiere decir que es un valor vacio.
//useState es el valor inicial
//Eso quiere decir que cliente inicia como un objeto vacio

//NOTA: Podemos tener multiples useState por componente

/*
const [total, setTotal] = useState(0);
const [modal, setModal] = useState(true);
*/

//Importante, react reacciona en base al useState
//Cada vez que el state cambia, tu aplicacion de react va a renderizar y 
//actualizarse con estos cambios que se hagan en el state

//Para modificar el state, se utiliza la funcion que extraemos cuando declaramos el state en nuestro componente, o sea el set
//SIEMPRE, debe modificarse el state por medio del set


const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState(''); //Este es un Hook, va siempre ahi
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    //Actualiza el componente hasta que el cambio suceda, y no mientras el componente esta cambiando
    useEffect(() => {
        if (Object.keys(paciente).length > 0) { //verifica que no este vacio, y si no esta vacio edita lo siguiente:
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)


        }

    }, [paciente]) //se leen los cambios en el array paciente


    //Funcion para generar un id unico

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }



    //Con esta funcion podrimos validar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();


        //Validacion

        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('Hay Al Menos un campo vacio')

            setError(true)
            return;
        }

        setError(false)

        //Creamos un objeto para que contenga todos los datos del formulario:

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }


        if (paciente.id) { //Si el objeto pacientes tiene un id esto quiere decir que se puede editar
            //Editando paciente
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
                paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({});

        } else {//caso contrario agrega un id al paciente, y al mismo tiempo agrega un objeto paciente
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente])
            //Usamos los 3 puntos para no modificar el arreglo original y crear uno nuevo
            //Gracias a ese arreglo inmutable, nos genera un nuevo arreglo y en el momento que se genera lo agregamos con setPacientes
            //Sin necesidad de modificar el original

        }






        //*******REINICIO DEL FORMULARIO*******/
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='text-black font-black text-center text-3xl'>Seguimiento pacientes</h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Añade Pacientes y {" "}
                <span className='font-bold text-indigo-700'>Administralos</span>
            </p>



            <form
                action=""
                className=' bg-gray-300 shadow-md rounded-lg py-10 px-5 mb-10'
                onSubmit={handleSubmit}
            >
                {/*lo de abajo es practicamente esto:*/}
                {/**{error ? <Error mensaje={"Todos los campos son obligatorios"}/> : ('') } */}

                {error && <Error><p>Todos los campos son obligatorios</p></Error>} {/*Si error es true entonces imprime eso*/}
                {/* Con el elemento children que ponemos en el componente error, no hace falta pasarle una prop directamente
                si no que podemos usar el componente como si fuera una etiqueta, y ahi ponemos lo que queramos pasar como prop */}

                <div className='mb-5'>
                    <label htmlFor="nameMascota" className='block text-gray-900 uppercase font-bold'>
                        Nombre De La Mascota
                    </label>
                    <input
                        type="text"
                        name=""
                        id="nameMascota"
                        className=' rounded-md border-2 w-full p-2 mt-2'
                        placeholder='Nombre de la mascota'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>


                <div className='mb-5'>
                    <label htmlFor="namePropietario" className='block text-gray-900 uppercase font-bold'>
                        Propietario
                    </label>
                    <input
                        type="text"
                        name=""
                        id="namePropietario"
                        className=' rounded-md border-2 w-full p-2 mt-2'
                        placeholder='Nombre del propietario'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>


                <div className='mb-5'>
                    <label htmlFor="email" className='block text-gray-900 uppercase font-bold'>
                        Email
                    </label>
                    <input
                        type="email"
                        name=""
                        id="email"
                        className=' rounded-md border-2 w-full p-2 mt-2'
                        placeholder='leonardo.ejemplo@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor="alta" className='block text-gray-900 uppercase font-bold'>
                        Alta
                    </label>
                    <input
                        type="date"
                        name=""
                        id="alta"
                        className=' rounded-md border-2 w-full p-2 mt-2'
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}

                    />
                </div>


                <div className='mb-10'>
                    <label htmlFor="sintomas" className='block text-gray-900 uppercase font-bold'>
                        Sintomas
                    </label>
                    <textarea
                        id='sintomas'
                        placeholder='Escribe los sintomas'
                        className='rounded-md border-2 w-full p-2 mt-2'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />

                </div>



                <input
                    type="submit"
                    className=' bg-indigo-700 w-full rounded-md hover:bg-indigo-800 text-center
                 p-3 text-gray-300 uppercase font-bold cursor-pointer transition-all'
                    value={paciente.id ? "Editar datos" : "Agregar Paciente"}
                />




            </form>
        </div>
    )
}

export default Form

//rafce