import { useState } from 'react';
import { format } from 'date-fns';
import { AppBar, Card, CardContent, Container, CssBaseline, Grid, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const AppWrapper = styled('div')`
  padding-top: 80px;
`;

enum TimeFormat {
  Twelve = 'h:mm:ss aaa',
  TwentyFour = 'HH:mm:ss'
}

function App() {
  const [date] = useState<Date>(new Date());
  const [timeFormat, setTimeFormat] = useState<'Twelve' | 'TwentyFour'>('Twelve');
  const [dateFormat] = useState<string>('d MMMM yyyy');

  const toggleTimeFormat = () => {
    setTimeFormat(timeFormat === 'Twelve' ? 'TwentyFour' : 'Twelve');
  };

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
        <Typography align="center" paragraph variant="h5">
          Session start time:
        </Typography>
        <Grid container justifyContent="center">
          <Card onClick={toggleTimeFormat} sx={{ cursor: 'pointer' }} variant="outlined">
            <CardContent>
              <Typography component="span" fontWeight="500" variant="h2">
                {format(date, TimeFormat[timeFormat])}
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
