export default function FormSucess(props){
    const message = props.message
    return(
        <div>
            <div className=" w-full p-2 bg-green-200 my-[3%] rounded-md border border-green-500">
            <h1 className='text-green-500 text-center'>{message}</h1>
            </div>
        </div>
    )
}