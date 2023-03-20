import Head from 'next/head'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from '@mui/material'
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Typography variant="h1">
              We purchase profitable, RevOps companies and supercharge them
              through applied AI to build brands that last.
            </Typography>
            <Typography>
              We purchase profitable, RevOps companies and supercharge them
              through applied AI to build brands that last.
            </Typography>
            <Typography>
              We purchase profitable, RevOps companies and supercharge them
              through applied AI to build brands that last.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card variant="outlined">
              <CardHeader title="What is RevOps?"></CardHeader>
              <CardContent>
                TODO: Image
                <Typography variant="body2">
                  Revenue Operations (RevOps) is a ...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
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
