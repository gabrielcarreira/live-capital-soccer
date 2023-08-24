import {
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Slider,
  Paper
} from '@mui/material'
import React, { useState } from 'react'

export default function Resultado() {
  const [inputTitle, setInputTitle] = useState('')
  const [inputDate, setInputDate] = useState('')
  const [inputResultHome, setInputResultHome] = useState(0)
  const [inputResultOut, setInputResultOut] = useState(0)
  const [imageUrl, setImageUrl] = useState('/api/og')

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl>
              <TextField
                type="text"
                label="TÍTULO"
                value={inputTitle}
                onChange={(event) => {
                  setInputTitle(event.target.value)
                }}
                sx={{ mb: 4 }}
              />
              <TextField
                type="text"
                label="DATA"
                value={inputDate}
                onChange={(event) => {
                  setInputDate(event.target.value.toUpperCase())
                }}
                sx={{ mb: 4 }}
              />
              <Slider
                disabled={false}
                marks
                max={10}
                min={0}
                size="medium"
                valueLabelDisplay="off"
                value={inputResultHome}
                onChange={(event) => {
                  setInputResultHome(event.target.value)
                }}
              />
              <Slider
                disabled={false}
                marks
                max={10}
                min={0}
                size="medium"
                valueLabelDisplay="off"
                value={inputResultOut}
                onChange={(event) => {
                  setInputResultOut(event.target.value)
                }}
              />

              <Button
                onClick={() =>
                  setImageUrl(
                    `/api/og?title=${inputTitle}&date=${inputDate}&result=${inputResultHome}-${inputResultOut}`
                  )
                }
              >
                CRIAR
              </Button>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <img
              src={imageUrl}
              alt="OG IMAGE"
              style={{
                width: '360px',
                height: '640px'
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
