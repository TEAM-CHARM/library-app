import React, { useEffect, useState } from 'react'
import { apiGetBook } from '../../../services/book'
import { Link, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const BookDetails = () => {
  const [book, setBook] = useState({})
  const [loading, setLoading]= useState(false)

 const {id} = useParams()

console.log("book id", id);
  const fetchBook = async ()=>{
    try {
      setLoading(true)
      const res = await apiGetBook(id)
      if(res.status === 200){
        setBook(res.data)
      }

    } catch (error) {
      console.log("Error fetching book");
      toast.error("Error fetching book")
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchBook()
  },[])
  return (
    <div>{JSON.stringify(book)}
    <Link></Link>
    </div>
  )
}

export default BookDetails