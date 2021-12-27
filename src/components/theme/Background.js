import React from 'react'

const Background = ({ children }) => {
  return (
    <aside className="bg-white text-black section-font dark:bg-gray-900 dark:text-gray-400 transition-all">
      {children}
    </aside>
  )
}

export default Background
