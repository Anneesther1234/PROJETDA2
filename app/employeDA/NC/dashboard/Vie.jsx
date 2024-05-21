
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Bar,Chart } from 'react-chartjs-2';
import faker, { Faker } from '@faker-js/faker';
import { type } from 'os';
import { useRouter } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import getInfo from '../../../../lib/api/getInfo';
import getAll from '../../../../lib/api/dashboard/getAll'
import { useState } from 'react';




const getCurrentTrimestre = () => {
    const month = new Date().getMonth(); // 0 (Janvier) à 11 (Décembre)
  
    if (month >= 0 && month <= 2) {
      return "Trimestre 1"
    } else if (month >= 3 && month <= 5) {
        return "Trimestre 2"
    } else if (month >= 6 && month <= 8) {
        return "Trimestre 3"
    } else {
        return "Trimestre 4"
    }
}

export default function Vie () {
    const router = useRouter()
    const [currentAnnee,setCurrentAnnee] = useState(new Date().getFullYear())
    const [currentTrimestre,setCurrentTrimestre] = useState(getCurrentTrimestre())
    const [annee,setAnnee] = useState()
    const [trimestre,setTrimestre] = useState()
    //Initialisation du graphique
    ChartJS.register(
        LinearScale,
        CategoryScale,
        BarElement,
        PointElement,
        LineElement,
        Legend,
        Tooltip,
        LineController,
        BarController
      );
      // Récupération des données 
      const {data, isLoading,error,refetch} = useQuery({
        queryKey : ["ncDashboard"],
        queryFn : async () => {
            const user = await getInfo()
            if(user === false) { 
                // return router.push('/connexion')
                console.log("user not connect");
                router.push('/connexion')
                return null
            }
            return getAll(2000,"Trimestre 1")
        },
        refetchInterval : 10000,
        refetchIntervalInBackground : true,
        onSucces : (data) => {
            console.log("Success request ",data);
        },

    })
    const options = {
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Sociétés',
          },
        },
      };
      //Données du graphique
      const dashboard = {
        labels : ['2024', '2023', '2022', '2020', '2019', '2018', '2017'],
        datasets: [
            {
                type: 'line',
                label: 'Total',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: [1800,1700,1600,1500,1400,1300,1200],
                tension: 0.2,
              },
          {
            type : 'bar',
            label: 'VIE',
            data: [200,300,400,500,600,700,800],
            backgroundColor: '#F78238',

          },

          {
            type : 'bar',
            label: 'IARD',
            data: [800,700,600,500,400,300,200],
            backgroundColor: '#009440',
          },
          {
            type : 'bar',
            label: 'COURTIERS',
            data: [800,700,600,500,400,300,200],
            backgroundColor: '#5C5C5C',
          },
          
          
        ],
      };
    return (
        <div className='h-[94%] flex '>
            <div className='w-10/12 h-full '>
                <div className="flex justify-between h-[13%]  p-1 w-full">
                    {/* <div className="w-[20%] flex items-center">
                        <h1 className="text-center font-medium">Toutes les sociétés :</h1>
                    </div> */}
                    {/* Total */}
                    <div className="flex items-center border-dashed bg-green-500 rounded-md shadow-md h-full w-[15%] min-[160px]" title="Toutes les sociétés ayant transmis les notes de conjonture">
                        <div className="flex flex-col my-7 h-fit p-[3%]">
                            <span className="text-secondary-inverse text-[120%] tracking-[-0.115rem] font-bold text-white">364</span>
                            <div className="m-0">
                                <span className="font-medium text-secondary-dark text-[100%] text-white">Total des sociétés</span>
                            </div>
                        </div>
                    </div>
                    {/* Vie */}
                    <div className="flex items-center border-dashed bg-green-500 rounded-md shadow-md h-full w-[15%]" title="Nombre de compagnies VIE ayant soumis des NC correctes">
                        <div className="flex flex-col my-7 h-fit p-[3%]">
                            <span className="text-secondary-inverse text-[120%] tracking-[-0.115rem] font-bold text-white">29</span>
                            <div className="m-0">
                                <span className="font-medium text-secondary-dark text-lg/normal text-white">Vie</span>
                            </div>
                        </div>
                    </div>
                    {/* IARD */}
                    <div className="flex items-center border-dashed bg-green-500 rounded-md shadow-md h-full w-[15%]" title="Nombre de compagnies IARD ayant soumis des NC correctes">
                        <div className="flex flex-col my-7 h-fit p-[3%]">
                            <span className="text-secondary-inverse text-[120%] tracking-[-0.115rem] font-bold text-white">35</span>
                            <div className="m-0">
                                <span className="font-medium text-secondary-dark text-lg/normal text-white">IARD</span>
                            </div>
                        </div>
                    </div>
                    {/* COURTIERS */}
                    <div className="flex items-center border-dashed rounded-2xl border-2 shadow-md border-gray-400 h-full w-[15%]" title="Nombre de courtiers ayant soumis des NC correctes">
                        <div className="flex flex-col my-7 h-fit p-[3%]">
                            <span className="text-secondary-inverse text-[120%] tracking-[-0.115rem] font-bold">300</span>
                            <div className="m-0">
                                <span className="font-medium text-secondary-dark text-lg/normal">COURTIERS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex h-[86%] justify-center">
                    <div className="flex w-[95%] h-full border px[2.5%] bg-white rounded-md shadow-md">
                        {/* <Bar className='h-full w-full' options={options} data={data} /> */}
                        <Chart type='bar' data={dashboard} options={options} />
                    </div>
                </div>
            </div>
            {/* Barre de droite */}
            <div className='flex w-2/12 h-full justify-center py-2'>
                <div className="flex-col space-y-[10%] h-[75%] w-[80%]">
                    {/* Sélectionner le trimestre */}
                    <div className="flex-col w-full border bg-gray-200 border-gray-400">
                        <div className='p-1 h-[25%] border-b border-gray-400'>
                            <h1 className='text-center'>Trimestre</h1>
                        </div >
                        <div className="flex flex-col p-1 items-center overflow-auto h-[75%]">
                            <label className="flex items-center">
                            <input type="radio" className="form-checkbox h-5 w-5 text-blue-600" name="trimestre" value="1"/>
                            <span className="ml-2 text-gray-700">Trimestre 1</span>
                            </label>
                            <label className="flex items-center">
                            <input type="radio" className="form-checkbox h-5 w-5 text-blue-600" name="trimestre" value="2" defaultChecked/>
                            <span className="ml-2 text-gray-700" >Trimestre 2</span>
                            </label>
                            <label className="flex items-center">
                            <input type="radio" className="form-checkbox h-5 w-5 text-blue-600" name="trimestre" value="1"/>
                            <span className="ml-2 text-gray-700">Trimestre 3</span>
                            </label>
                            <label className="flex items-center">
                            <input type="radio" className="form-checkbox h-5 w-5 text-blue-600" name="trimestre" value="2"/>
                            <span className="ml-2 text-gray-700">Trimestre 4</span>
                            </label>
                            
                        </div>
                    </div>
                    {/* Sélectionner l'année */}
                    <div className="flex-col h-[60%] w-full border bg-gray-200 border-gray-400">
                        <div className='p-1 h-[14%] border-b border-gray-400'>
                            <h1 className='text-center'>Année</h1>
                        </div >
                        <div className="flex flex-col p-1 items-center overflow-auto h-[86%]">
                            <label className="flex items-center">
                            <input type="radio" className={"form-checkbox h-5 w-5 text-blue-600"} name="annee" value="1" defaultChecked/>
                            <span className="ml-2 text-gray-700" >2024</span>
                            </label>
                            <label className="flex items-center">
                            <input type="radio" className={"form-checkbox h-5 w-5 text-blue-600"} name="annee" value="2"/>
                            <span className="ml-2 text-gray-700">2023</span>
                            </label>
                            <label className="flex items-center">
                            <input type="radio" className="form-checkbox h-5 w-5 text-blue-600" name="annee" value="3"/>
                            <span className="ml-2 text-gray-700">2022</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}