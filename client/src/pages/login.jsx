import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import CustomTextfield from '../components/CustomTextfield.jsx';
import { Paper } from '@mui/material';
import { useState } from 'react';

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    navigate('/chat')
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        m: '0 auto',
      }}
    >
      <Paper
        sx={{
          p: 2
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <CustomTextfield
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            size="small"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomTextfield
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            size="small"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            LogIn
          </Button>
          <Grid sx={{
            display: 'flex ',
            alignItems: 'center',
            justifyContent: 'space-between'

          }}>
            <Typography />
            <Typography
              sx={{
                alignSelf: 'self-end'
              }} component={Link} to="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Typography>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}