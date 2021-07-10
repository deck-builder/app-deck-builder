import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../index'

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch
