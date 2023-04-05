'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/counter'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className={styles.main}>
       <button className={styles.button} onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button className={styles.button} onClick={() => dispatch(decrement())}>Decrement</button>
    </main>
  )
}
