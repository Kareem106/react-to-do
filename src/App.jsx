import { useEffect, useState } from 'react'
import Form from "./components/Form"
import ListItem from "./components/ListItem"
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import ThemeController from './components/ThemeController'

function App() {
  const theme=useSelector(state=>state.theme.theme);
  const [status,setStatus]=useState("all");
  const items=useSelector(state=>status==="all"?state.items : status==="active" ? state.items.filter(item=>!item.status):state.items.filter(item=>item.status));
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme",theme);
  },[theme])
  return (
    <>
    <div className="container mx-auto relative min-h-screen">
      <div className="w-full lg:w-1/2 mx-auto p-4 pb-20">
      <div className="py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">TODO</h1>
        <ThemeController/>
      </div>
        <Form/>
        <div className='flex justify-start items-center py-4 text-xl'>
        <div role="tablist" className="tabs tabs-boxed tabs-lg font-medium">
          <a role="tab" className={`tab ${status==="all"?"tab-active":""}`} onClick={()=>setStatus("all")}>All</a>
          <a role="tab" className={`tab ${status==="active"?"tab-active":""}`} onClick={()=>setStatus("active")}>Active</a>
          <a role="tab" className={`tab ${status==="completed"?"tab-active":""}`} onClick={()=>setStatus("completed")}>Completed</a>
        </div>
        {/* <div>
          <button className='btn text-xl'>clear all</button>
        </div> */}
        </div>
        <div className="flex flex-col gap-2">
        {
          items?.map(item=><ListItem key={item?.id} {...item}/>).reverse()
        }
        </div>
      </div>
      <div className='text-center absolute w-full top-full -translate-y-full p-2'>
        @kareem ahmed
      </div>
    </div>
    </>
  )
}

export default App
