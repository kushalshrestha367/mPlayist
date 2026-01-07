import React from 'react';
import { IoMusicalNotes } from "react-icons/io5";
import { MdEditSquare } from "react-icons/md";
import { IoPlayForwardCircle } from "react-icons/io5";

export default function About() {
  return (
    <div className='min-h-screen px-6 py-12 bg-gray-200 text-black'>
    <div className='max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md'>
      <div className='flex flex-col md:flex-row items-center gap-10'>
        <div className=' w-full md:w-1/3'>
          <img
            src='https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
            alt='About mPlaylist'
            className='w-full h-auto rounded-lg shadow-md'
          />
        </div>
        <div className='md:w-2/3 w-full'>
          <h1 className='text-3xl font-bold mb-4'>About mPlaylist</h1>
          <p className='mb-4'>
            Welcome to mPlaylist, your go-to platform for creating and sharing music playlists. Our mission is to provide music enthusiasts with an easy-to-use tool to curate their favorite tracks and share them with friends and the world.
          </p>
          <p>
            Whether you're into pop, rock, jazz, or classical, mPlaylist has something for everyone. Start building your perfect playlist today!
          </p>
      </div>
    </div>
      <div className='bg-gray-300 text-black border border-gray-400 p-6 mt-8 rounded-lg flex items-center gap-8'>
        <IoMusicalNotes className='text-4xl flex-shrink-0' />
        <div>
          <h2 className='text-lg font-semibold text-green-700'>Create Custom Playlists</h2>
          <p>Organize your favorite songs into personalized playlists.</p>
        </div>
        </div>
        <div className='bg-gray-300 text-black border border-gray-400 p-6 mt-8 rounded-lg flex items-center gap-8'>
          <MdEditSquare className='text-4xl flex-shrink-0'/>
          <div>
          <h2 className='text-lg font-semibold text-green-700'> Edit & Manage Lists</h2>
          <p>Add, remove, and edit songs in your playlists.</p>
          </div>
        </div>
        <div className='bg-gray-300 text-black border border-gray-400 p-6 mt-8 rounded-lg flex items-center gap-8'>
          <IoPlayForwardCircle className='text-4xl flex-shrink-0'/>
          <div>
          <h2 className='text-lg font-semibold text-green-700'>Enjoy Seamless Playlists</h2>
          <p>Listen to your playlists without interruptions.</p>
          </div>
        </div>
  </div>
  </div>  );
}
 
  
  