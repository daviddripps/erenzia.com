import Head from 'next/head'
import Image from 'next/image'
import { Box, SxProps } from '@mui/material'
import HeaderBar from '~/ui/components/HeaderBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBar />
      <Box sx={styles.content}>
        <main>
          <h1>Erenzia</h1>{' '}
        </main>
      </Box>
    </>
  )
}

const styles: Record<string, SxProps> = {
  appBar: {
    mx: { xs: 1, md: 4 },
  },
  content: {
    px: { xs: 3, sm: 4, md: 12 },
  },
}
