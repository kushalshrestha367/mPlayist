import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-gray-900 text-white text-center p-4 ">
            &copy; {new Date().getFullYear()} mPlaylist. All rights reserved.
        </footer>
    </div>
  )
}

export default Footer
