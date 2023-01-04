/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { CasePage } from './pages/CasePage/Loadable';
import { SKFHPage } from './pages/SKFH/Loadable';
import { ServicePage } from './pages/ServicePage/Loadable';
import { WorkPage } from './pages/WorkPage/Loadable';
import { ContactPage } from './pages/ContactPage/Loadable';
import { CustomerPage } from './pages/CustomerPage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { AboutUsPage } from './pages/AboutUsPage/Loadable';
import { JoinUsPage } from './pages/JoinUsPage/Loadable';
import { useTranslation } from 'react-i18next';
import Footer from './components/Footer'

export function App(props) {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Helmet
        titleTemplate="%s - AJA Creative"
        defaultTitle="AJA Creative"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="AJA Creative" />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case" element={<CasePage />} />
        <Route path="/case/SKFH" element={<SKFHPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/join-us" element={<JoinUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="/zh_tw" element={<HomePage />} /> */}
        <Route
          path="/zh_tw"
          element={<Navigate to="/" replace />}
        />
      </Routes>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}
