


const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => { //5--> Por ultimo pasarla en el componente final donde se vaya a usar
    const{nombre, propietario, email, fecha,  sintomas, id} = paciente


    const handleEliminar = () => {
        const respuesta = confirm("¿Desea eliminar este paciente?")

        if(respuesta){
            eliminarPaciente(id)
        }
    }
    return (
        <div className='m-5 bg-gray-300 shadow-md px-5 py-10 rounded-lg'>

            <p className='font-bold mb-3 text-gray-900 uppercase'>
                Nombre: {" "}
                <span className=' font-normal normal-case'>{nombre}</span>
            </p>

            <p className='font-bold mb-3 text-gray-900 uppercase'>
                Propietario: {" "}
                <span className=' font-normal normal-case'>{propietario}</span>
            </p>

            <p className='font-bold mb-3 text-gray-900 uppercase'>
                Email: {" "}
                <span className=' font-normal normal-case'>{email}</span>
            </p>

            <p className='font-bold mb-3 text-gray-900 uppercase'>
                Fecha Alta: {" "}
                <span className=' font-normal normal-case'>{fecha}</span>
            </p>

            <p className='font-bold mb-3 text-gray-900 uppercase'>
                Sintomas: {" "}
                <span className=' font-normal normal-case'>{sintomas}</span>
            </p>


            <div className=" flex justify-between mt-10">
                <button
                    onClick={() => setPaciente(paciente)}
                    className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">
                    Editar
                </button>

                <button 
                onClick={handleEliminar}
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
                    Eliminar
                </button>
            </div>
        </div>

    )
}

export default Paciente