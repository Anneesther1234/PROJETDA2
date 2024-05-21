export default function FormError (props){
    const message = props.message
    return(
        <div>
            <div className=" w-full p-2 bg-red-200 my-[2%] rounded-md border border-red-500">
                <h1 className='text-red-500 text-center'>{message}</h1>
            </div>
        </div>
    )
}