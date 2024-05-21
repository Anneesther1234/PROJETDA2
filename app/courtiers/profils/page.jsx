
import { cookies } from 'next/headers'
import getInfo from '../../../lib/api/getInfo'

export default async function Profils(){
    let user = null
    if(cookies().has("email")){
      user = await getInfo()
     
    }
    return (
    <>
      <h1 className="text-center font-bold text-gris m-[3%] text-[30px]">Profils utilisateur </h1>
      <div className="p-[3%] h-4/5 w-full">
        <div className="bg-white shadow h-full w-full flex-col flex items-center space-y-[5%]">
          <div className="flex h-1/2 w-full justify-center items-center">
            <div className="h-full flex justify-center items-center w-1/4 ">
              <div className="flex h-48 w-48 bg-indigo-100 rounded-full shadow-2xl items-center justify-center text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>  
            {user && <div className="p-5 text-center border-b flex-col space-y-2">
                <h1 className="text-4xl font-medium text-gray-700">{user.nom}</h1>
                <p className="text-gray-500">{user.role}</p>
              <p className="text-gray-600">{user.type_compagnie}</p>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-gray-500">{user.telephone}</p>
            </div>}
          </div>
          
          <div className="space-x-8 flex justify-center md:mt-0 md:justify-center pl-[25%]">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"> Connect</button>
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"> Message </button>
            </div>

        </div>
      </div>
           
  </>
  )
}