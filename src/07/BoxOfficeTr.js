import React from 'react'

export default function BoxOfficeTr({handleClick, mv}) {
  return (
       <tr onClick={handleClick} className="bg-white dark:bg-gray-800">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {mv.rank}
                </td>
                <td className="px-6 py-4">
                 {mv.movieNm}
                </td>
                <td className="px-6 py-4">
                  {parseInt(mv.audiCnt).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  {parseInt(mv.salesAcc).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  {mv.rankInten > 0  ? <span className='text-red-500'>"▲"</span> :
                        mv.rankInten <0 ? <span className=' text-blue-500'>"▼"</span> : "-"}
                </td>
              </tr>

  )
}
