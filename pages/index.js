import Result from '@/components/Result'
import { Container } from '@mui/material'
import RootLayout from '@/app/layout'

export default function Home() {
  return (
    <RootLayout>
      <Container>
        <Result date="26 de agosto" />
      </Container>
    </RootLayout>
  )
}
