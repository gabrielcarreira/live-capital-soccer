import Image from 'next/image'
import React, { useState } from 'react'

export default function Resultado() {
  const [inputText, setInputText] = useState('')

  const handleInputChange = (event) => {
    setInputText(event.target.value)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Digite o texto aqui"
        style={{
          fontSize: 18,
          padding: '5px',
          border: '1px solid black',
          width: '200px'
        }}
      />
      <Image
        src={`/api/og?text=${inputText}`}
        alt="Next.js Logo"
        width={1080 / 3}
        height={1920 / 3}
        priority
      />
    </div>
  )
}
