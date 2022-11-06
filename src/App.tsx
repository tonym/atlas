import { useState } from 'react';
import { format } from 'date-fns';
import { AppBar, Card, CardContent, Container, CssBaseline, Grid, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const AppWrapper = styled('div')`
  padding-top: 80px;
`;

function App() {
  const [date] = useState<Date>(new Date());
  const [timeFormat] = useState<string>('HH:mm:ss');
  const [dateFormat] = useState<string>('d MMMM yyyy');

  return (
    <AppWrapper className="App">
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography component="div" variant="h6">
            Quiz
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography align="center" paragraph variant="h6">
          Session start time:
        </Typography>
        <Grid container justifyContent="center">
          <Card variant="outlined">
            <CardContent>
              <Typography component="span" fontWeight="700" variant="h2">
                {format(date, timeFormat)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Typography align="center" paragraph variant="h6">
          {format(date, dateFormat)}
        </Typography>
      </Container>
    </AppWrapper>
  );
}

export default App;
