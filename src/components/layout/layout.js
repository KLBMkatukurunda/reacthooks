import React from "react"
import "../layout/layout.css"


function Layout({ children }) {
  return (
    <div>
    
      <main>{children}</main>
    
    </div>
  )
}

export default Layout
