import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchPlaying } from '../../Actions/coreActions'

const NowPlaying = () => {
  const dispatch = useDispatch()
  const currentMovies = useSelector( state => ({
    
  }), shallowEqual)

  useEffect(() => {
    dispatch(fetchPlaying())
  }, [])

  console.log(currentMovies)

  return (
    <div>
      
    </div>
  )
}

export default NowPlaying
