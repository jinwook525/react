

export default function TailBall({n}) {
  const ballColor = {
    'b0' : 'bg-red-500',
    'b1' : 'bg-yellow-500',
    'b2' : 'bg-green-500',
    'b3' : 'bg-blue-500',
    'b4' : 'bg-purple-500'

  }
  return (
    <div className={`w-20 h-20 flex justify-center items-center rounded-full
                      font-bold  text-white text-2xl m-1 
                     ${ballColor['b'+ Math.floor(n / 10)]}                      `}>
      {n }
    </div>
  )
}
