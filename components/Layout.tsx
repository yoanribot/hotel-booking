import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Real State</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
