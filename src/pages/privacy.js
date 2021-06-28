import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Privacy from 'components/privacyHtml';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="KlubMeet Home" />
          <Privacy />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
