import Link from 'next/link';

import {useRef,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {dataFetch,userFetch} from '@redux/reducers'




export default function HeaderTopBar() {
  // const {data} = useSelector((state) => state.profile);
  const dispatch = useDispatch()
  
  dispatch(userFetch())

    return(
      <div className="container mx-auto max-w-full bg-theme-primary-black py-5">
        <p className="text-theme-white text-center text-sm">Free Shipping World wide for all orders over 199aed. <Link href="/shop"><a className="text-theme-light-red">Click and Shop Now.</a></Link></p>
      </div>
    )
}