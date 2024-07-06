import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import CustomTextField from '../components/CustomTextfield.jsx'

import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomFileInput from '../components/CustomFileInput/index.jsx';
import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [profilePic, setprofilePic] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleChangeFile = (file) => {
    setprofilePic(file)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 2
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
          <CustomFileInput />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <CustomTextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                size='small'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                size='small'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomTextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                size='small'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} >
              <CustomTextField
                name="confirm-password"
                required
                fullWidth
                id="confirm-password"
                label="Confirm Password"
                type="password"
                size='small'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}

              />
            </Grid>
            <Grid item xs={12} >
              <input type='file' accept='image/*' onChange={(e) => handleChangeFile(e.target.files[0])} />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography component={Link} to={'/login'} variant="body2">
                Already have an account? Sign in
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}