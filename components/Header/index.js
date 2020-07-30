import React from 'react'
//import './styles.css'
import Link from 'next/link'
const Header = () => {
    return(
        <div className="">
            <div className=" flex text-center bg-green-700 content-center shadow-md p-2 sm:flex-row md:flex-col lg:flex-col xl:flex-col">

                <img className="mx-auto md:w-1/12 lg:w-1/12 xl:w-1/12 w-10"  src="logo.png" alt="SCMCP" />
                <p className="lg:text-4xl md:text-4xl xl:text-4xl text-2xl ">Gestor de Consultas</p>
            </div>
            <div className=" mx-auto text-center bg-red-700 p-2 " >
                <Link href="/" ><a className="px-2 hover:bg-blue-600 text-white ">Entrada</a></Link>
                <Link href="/listar" ><a  className="px-2 hover:bg-blue-600 text-white">Listar</a></Link>
                <Link href="/adicionar" ><a  className="px-2 hover:bg-blue-600 text-white">Adicionar</a></Link>


            </div>
        </div>
    )
}
export default Header