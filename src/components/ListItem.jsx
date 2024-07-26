import { useDispatch } from "react-redux"
import { changeItemStatus,removeItem } from "../app/itemSlice"
function ListItem({id,text,status}) {
    const dispatch=useDispatch();
  return (
    <div className={
      `flex justify-between text-2xl bg-slate-100 dark:bg-slate-500 p-4 rounded-sm items-center 
      ${status?'opacity-70':''}`
    }>
        <div className="flex gap-4 items-center">
        <input type="checkbox" className='checkbox checkbox-success border-2 peer' checked={status}
        onChange={()=>dispatch(changeItemStatus(id))}/>
        <h1 className='peer-checked:line-through
        text-slate-500  dark:text-slate-100 peer-checked:text-slate-400'>{text}</h1>
        </div>
        <div>
          <img src={"/trash.svg"} className="w-8 aspect-square cursor-pointer" onClick={()=>dispatch(removeItem(id))}/>
        </div>
    </div>
  )
}
export default ListItem