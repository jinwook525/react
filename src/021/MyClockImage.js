import clock from './clock.png'

function MyClockImage() {
  return (
    <div className=' w-full h-full flex justify-center items-center'>
      <img src={clock} alt='시계' className='h-2/3 '/>
    </div>
  )
}

export default MyClockImage ;