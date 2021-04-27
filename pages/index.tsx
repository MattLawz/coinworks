import Head from 'next/head'
import { Heading, Stack, Center, Text, Button } from '@chakra-ui/react'
import Container from '../components/Container'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function Home() {
  return (<>
<Head>
<title>Donate BTC</title>
      <link rel="icon" href="/btc.svg" />
      <meta name="og:type" content="website" />
      <meta
        name="description"
        content="Custom Donate BTC Page"
      />
      <meta name="keywords" content="donate bitcoin, coinbase, donation" />
      <meta
        name="og:description"
        content="Custom Donate BTC Page"
      />
      <meta name="og:image" content="/btc.svg" />
      <meta name="theme-color" content="#f2a900" />
</Head>
<Container>
</Container>
<Center>
<Stack spacing={8}>
<Heading>Custom Bitcoin Donation Pages</Heading>
<Text>There is no registration or logins, it is meant to be easy, fast, and loaded with features.</Text>
<Link href="https://app.archbee.io/doc/9vcLAEz22e8v64S5Y2Ck3/78sRUU71EiCZ4NHolJYqN">
        <a target="_blank" rel="noreferer">
<Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="outline">
    Get Started
  </Button>
  </a>
  </Link>
  <Link href="https://app.archbee.io/doc/ByB0SITocaEpKZ1Y6QzTf/JLZfnLzWITtp3tqRXEOaK">
        <a target="_blank" rel="noreferer">
<Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="outline">
    Learn More
  </Button>
  </a>
  </Link>

</Stack>
</Center>

</>
)
}
