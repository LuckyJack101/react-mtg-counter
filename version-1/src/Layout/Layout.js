import React from 'react'
export default function Layout(props) {
  return (
    <>
      {/* Toolbar */}
      <div>Toolbar, logo, dad jokes</div>

      {/* Main content */}
      <div>{props.children}</div>
    </>
  )
}
