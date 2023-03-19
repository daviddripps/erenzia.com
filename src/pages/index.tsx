import Head from 'next/head'
import Image from 'next/image'
import { Container, Typography } from '@mui/material'
import HeaderBar from '~/ui/components/HeaderBar'
import Footer from '~/ui/components/Footer'

import type { SystemStyleObject } from '@mui/system'

export default function Home() {
  return (
    <>
      <Head>
        <title>Erenzia</title>
        <meta
          name="description"
          content="We build companies that leave legacies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBar />
      <Container component="main" maxWidth="md" sx={styles.content}>
        <Typography variant="h1">
          We purchase profitable, RevOps companies and supercharge them through
          applied AI to build brands that last.
        </Typography>
        <Typography>
          We purchase profitable, RevOps companies and supercharge them through
          applied AI to build brands that last.
        </Typography>
        <Typography variant="subtitle1">
          We build companies that leave legacies.
        </Typography>
        <div
          style={{
            background: `linear-gradient(
              270deg,
              rgba(95, 127, 176, 0) 0%,
              rgba(95, 127, 176, 1) 100%
            )`,
            boxShadow: '0px 10px 0 0 #ffeedd',
            display: 'inline-block',
            marginTop: '100px',
            overflow: 'visible',
          }}
        >
          <Image
            alt="David Dripps"
            height={559 * (300 / 447)}
            quality={100}
            src="/i-zxjqzv3-X4-no-crop.png"
            style={{ float: 'left', marginTop: '-25%' }}
            width={447 * (300 / 447)}
          />
        </div>
        <Typography>
          We purchase profitable, RevOps companies and supercharge them through
          applied AI to build brands that last.
        </Typography>
        <Typography variant="subtitle1">
          We build companies that leave legacies.
        </Typography>
      </Container>
      <Footer />
    </>
  )
}

const styles: Record<string, SystemStyleObject> = {
  content: {
    px: { xs: 3, sm: 4 },
  },
}
