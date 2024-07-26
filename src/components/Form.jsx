import { useDispatch } from "react-redux"
import { nanoid } from "nanoid";
import { addItem } from "../app/itemSlice";
function Form() {
    const dispatch=useDispatch();
    const addItemHandler=(formData)=>{
        const text=formData.get("text");
        if(text.length ===0){
            alert("there is no text");
        }else{
            dispatch(addItem({
                id:nanoid(),
                text,
                status:false
            }))
        }
    }
  return (
    <div>
    <form onSubmit={(e)=>{
        e.preventDefault();
        const formData=new FormData(e.target);
        addItemHandler(formData);
        e.target.reset();
    }}>
      <input type="text" name="text" className="input w-full bg-slate-200 dark:bg-slate-500 rounded-sm text-3xl" />
    </form>
  </div>
  )
}

export default Form