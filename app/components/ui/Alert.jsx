import Image from "next/image";


export default function Alert(props) {
    const message = props.message
    const onClose = props.onClose
    return (
        <div className='absolute flex flex-col items-center p-3 justify-between w-1/4 h-1/4 rounded bg-white shadow shadow-gray-600'>
          <Image src='/check-mark.png' width={70} height={70} alt="check-mark"/>
        <h1 className='text-gray-600 font-bold text-xl'>{message}</h1>
          <button type="submit" onClick={onClose} className=" h-10  px-5 text-white bg-blue-400 rounded-lg transition-colors focus:shadow-outline hover:bg-green-800">
            OK
          </button>
        </div>
    );
  };