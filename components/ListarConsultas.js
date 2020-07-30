import {React, Component} from 'react'
import { getConsultas} from '../api/consultas'

class ListarConsultas extends Component{
    state={
        utente: '',
        ano: '',
        mes: '',
        dia: '',
        dados: [],
        tipo: '',
        val: ''
    }

render(){
    const lista = '';
    if (this.state.tipo === 'all' ){
        this.setState({dados: getConsultas()})
        if (dados.length > 0 ){
            this.state.dados.map(item=>{
                console.log('merda' + item.nome)
            })
        }else{

        }
        
    }

    return (
        <div className="container mx-auto p-4 ">
            <h2 className="p-2 text-2xl" >Lista de consultas</h2>
            <div className="flex flex-col bg-gray-600 p-4 " >
                <div className="bg-gray-400 flex w-full sm:flex-row flex-col mx-auto p-4 rounded " >
                    <div className="pr-2  w-full lg:w-1/6 md:w-1/6 xl:w-1/6">
                        <label className="font-bold">Dia:</label>
                        <select id="_dia"  placeholder="dia" className="py-2 m-2 w-full rounded"  >
                            <option value="0"></option>
                            {
                               
                            }                   
                        
                        </select>

                    </div>

                    <div className="pr-2  w-full lg:w-2/6 md:w-2/6 xl:w-2/6">
                        <label className="font-bold">Mês:</label>
                        <select id="_mes"  placeholder="mes"  className="py-2 m-2  w-full rounded" >
                            <option value="0"></option>
                            <option value="1">Janeiro</option>
                            <option value="2">Fevereiro</option>
                            <option value="3">Março</option>
                            <option value="4">Abril</option>
                            <option value="5">Maio</option>
                            <option value="6">Junho</option>
                            <option value="7">Julho</option>
                            <option value="8">Agosto</option>
                            <option value="9">Setembro</option>
                            <option value="10">Outubro</option>
                            <option value="11">Novembro</option>
                            <option value="12">Dezembro</option>
                        </select>
                    </div>
                    
                    <div className="pr-2  w-full  lg:w-3/6 md:w-3/6 xl:w-3/6">
                        <label className="font-bold">Ano:</label>
                        <select id="_ano"  placeholder="mes"  className="py-2 m-2  w-full  rounded" >
                            <option value="0"></option>
                            {
                                
                            }
                        </select>
                    </div>
                    <div className=" pr-2 w-full lg:w-5/6 md:w-4/6 xl:w-4/6">
                    <label className="font-bold">Utente</label>
                        <input id="utente"  type="text" className=" py-2 px-2 m-2  rounded  w-full "  />
                            
                    </div>
                    <div className=" pl-2 w-full lg:w-6/6 md:w-6/6 xl:w-6/6">
                    <label className="font-bold">Pequisar</label>
                        <button id="listar"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded  w-full ">
                            listar
                        </button>
                    </div>
                    
                </div>
            </div>
            </div>
    
        );


}



}

export default ListarConsultas