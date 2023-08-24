import {
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Slider,
  Box,
  Stack
} from '@mui/material'
import React, { useState } from 'react'

export default function Result(props) {
  const [inputTitle, setInputTitle] = useState('')
  const [inputResultHome, setInputResultHome] = useState(0)
  const [inputResultOut, setInputResultOut] = useState(0)
  const [imageUrl, setImageUrl] = useState('/api/og')

  return (
    <Container maxWidth="md">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Container>
          <FormControl>
            <TextField
              type="text"
              label="TÍTULO"
              value={inputTitle}
              onChange={(event) => {
                setInputTitle(event.target.value.toUpperCase())
              }}
              sx={{ mb: 2 }}
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
                  `/api/og?title=${inputTitle}&date=${props.date.toUpperCase()}&result=${inputResultHome}-${inputResultOut}`
                )
              }
              variant="contained"
              sx={{ mt: 1 }}
            >
              CRIAR
            </Button>
          </FormControl>
        </Container>

        <Container item xs={12} sm={6}>
          <Box
            component="img"
            sx={{
              width: ['100%', 300, 300]
            }}
            src={imageUrl}
            alt="OG IMAGE"
          />
        </Container>
      </Stack>
    </Container>
  )
}
