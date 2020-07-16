import React from 'react'

export default function SidebarBtn({name, action}) {
  return (
    <button className="btn btn-sm btn-warning m-1 text-uppercase"
            onClick={()=>action(name)}
    >{name}</button>
  )
}
