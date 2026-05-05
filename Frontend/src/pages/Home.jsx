import React from 'react'
import Navbar from '../components/Navbar'
import Messages from '../components/Messages'
import SendMessage from '../components/SendMessage'

const Home = () => {
  return (
    <div className='w-full sm:w-[80%] mx-auto'>
      <Navbar />
      <Messages />
      <SendMessage />
    </div>
  )
}

export default Home