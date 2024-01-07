import React, { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = (): JSX.Element => {
  const [count, setCount] = useState(1)

  const increment = (): void => { setCount((prev) => prev + 1) }
  const decrement = (): void => { setCount((prev) => prev - 1) }

  return (
    <>
    <h1>count: {count}</h1>
    <button className={classes.btn} onClick={() => { increment() }}><h3>increment + </h3></button>
    <button onClick={() => { decrement() }}><h3>decrement - </h3></button>
    <button onClick={() => { setCount(0) }}><h3>refresh</h3></button>
    </>
  )
}
