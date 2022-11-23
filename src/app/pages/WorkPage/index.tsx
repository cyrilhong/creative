import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade'
import * as color from 'styles/colors';
export function WorkPage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application WorkPage"
        />
      </Helmet>
      <NavBar bgColor={color.DarkBlue} color={color.White} />
      <PageWrapper>
        <h1>Feature</h1>
        <ParallaxProvider>
          <Parallax
            speed={-50}
            style={{ background: 'blue', height: '500px' }}
            className="test"
          >
            <h1>Hello</h1>
          </Parallax>
          <Parallax
            style={{ background: 'red', height: '500px' }}
            className="test"
          />
          <Fade bottom>
          <h1>Hell</h1>
          </Fade>
          <Parallax
            speed={-30}
            style={{ background: 'green', height: '500px' }}
            className="test"
          />
          <Parallax
            style={{ background: 'gray', height: '500px' }}
            className="test"
          />
        </ParallaxProvider>
      </PageWrapper>
    </>
  );
}
