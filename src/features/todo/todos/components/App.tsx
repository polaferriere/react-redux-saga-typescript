import * as React from 'react';
import MainSection from './MainSection';
import Header from './Header';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <Container maxWidth="sm">
      <Grid >
        <Grid item>
          <Header />
          <MainSection />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
