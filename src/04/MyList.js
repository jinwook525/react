import MyListData from './MyListData.json'
import MyLIstItem from './MyLIstItem.js'
export default function MyList() {

  MyListData.map(item => console.log(item.title))
  return (
    <div className=' w-10/12 grid grid-cols-2 gap-4'>
      <MyLIstItem />
      <MyLIstItem />
      <MyLIstItem />
      <MyLIstItem />
    </div>
  )
}
