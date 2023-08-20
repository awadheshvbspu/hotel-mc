import React,{createContext,useEffect,useState} from 'react'
import {roomData} from '../data'

export const RoomContext =createContext()
export default function RoomProvider({children}) {
  const [rooms,setRooms] =useState(roomData);
  const [total,setTotal] =useState(0)
  const [adults,setAdults] =useState('1 Aadult')
  const [kids,setKids] =useState('0 kids')
  const [loading,setLoading] = useState(false)
  // console.log(Number(adults[0]))
  // console.log(Number(kids[0]))

  useEffect(()=>{
    setTotal(Number(adults[0])  + Number(kids[0]));
  })

  const handleClick = (e) =>{
    e.preventDefault();
    setLoading(true)
    const newRooms =roomData.filter((room) =>{
      return total <= room.maxPerson;
    });
    setTimeout(()=>{
      setRooms(newRooms);
      setLoading(false)
    },3000)
    console.log(rooms)
  }
  return (
    <RoomContext.Provider value={{rooms,adults,setAdults,kids,setKids,handleClick,loading}}>
    {children}
    </RoomContext.Provider>
  )
}

