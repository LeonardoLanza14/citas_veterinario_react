


const Error = ({children}) => {
//Children hace referencia a todo lo que le pases de un componente padre a un componente hijo
    return (
        <div>
            <div className=' bg-red-800 rounded-lg text-center text-white p-3 uppercase font-bold m-2'>
                {children}
            </div>
        </div>
    )
}

export default Error