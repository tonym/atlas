import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const AppWrapper = styled('div')`
  padding-top: 80px;
`;

function App() {
  return (
    <AppWrapper className="App">
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div">
            Quiz
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>content goes here</Container>
    </AppWrapper>
  );
}

export default App;
