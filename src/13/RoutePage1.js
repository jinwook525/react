import { useParams } from "react-router-dom"

export default function RoutePage1() {
  const item= useParams().item ;
  const item2= useParams().item2 ;
  return (
    <div className="text-3xl mt-10">
      p1
      {item} : {item2}
    </div>
  )
}
