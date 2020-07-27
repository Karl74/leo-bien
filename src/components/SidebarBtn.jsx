import React from 'react'

export default function SidebarBtn({name, action}) {
  return (
    <button className="btn btn-sm btn-warning m-1 py-3 text-uppercase"
            onClick={()=>action(name)}
            style={{minWidth:"7.5rem"}}
    >{name}</button>
  )
}
