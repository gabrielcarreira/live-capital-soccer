import Image from 'next/image'
import React, { useState } from 'react'

export default function Resultado() {
  const [inputTitle, setInputTitle] = useState('')
  const [inputDate, setInputDate] = useState('')
  const [inputResult, setInputResult] = useState('')

  const handleInputChange = (event) => {
    setInputText(event.target.value)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        type="text"
        value={inputTitle}
        onChange={(event) => {
          setInputTitle(event.target.value)
        }}
        placeholder="TÍTULO"
        style={{
          fontSize: 18,
          padding: '5px',
          border: '1px solid black',
          width: '200px'
        }}
      />
      <input
        type="text"
        value={inputDate}
        onChange={(event) => {
          setInputDate(event.target.value)
        }}
        placeholder="DATA"
        style={{
          fontSize: 18,
          padding: '5px',
          border: '1px solid black',
          width: '200px'
        }}
      />
      <input
        type="text"
        value={inputResult}
        onChange={(event) => {
          setInputResult(event.target.value)
        }}
        placeholder="RESULTADO"
        style={{
          fontSize: 18,
          padding: '5px',
          border: '1px solid black',
          width: '200px'
        }}
      />
      <img
        src={`/api/og?title=${inputTitle}&date=${inputDate}&result=${inputResult}`}
        alt="OG IMAGE"
        style={{
          width: '360px',
          height: '640px'
        }}
      />
    </div>
  )
}
