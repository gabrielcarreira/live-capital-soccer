import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const text = searchParams.get('text')

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'black',
          background: 'lightgrey',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {text}
      </div>
    ),
    {
      width: 1080,
      height: 1920
    }
  )
}
