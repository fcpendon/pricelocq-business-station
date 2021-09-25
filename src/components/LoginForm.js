import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';

const LoginForm = (props) => {
  const [inputs, setInputs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    attemptLogin();
  }

  const attemptLogin = () => {
    const loginAPI = 'https://staging.api.locq.com/ms-profile/user/login';
  
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: inputs.email, password: inputs.password}),
    };

    let statusCode = 0;

    fetch(loginAPI, requestOptions)
      .then(response => {
        statusCode = response.status;
        return response.json();
      })
      .then(data => {
        if (statusCode === 400) {
          (typeof data.message === 'string') ? setErrors([data.message]) : setErrors(data.message);
          setLoading(false);
        } else if (statusCode === 201)  {
          let userData = {email: inputs.email, token: data.data.AccessToken};
          props.setUser(userData);
          sessionStorage.setItem('user', JSON.stringify(userData));
        }
      });
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Paper style={{width: 300, margin: '20px auto', padding: 20}}>
        <Typography variant="h6" color="#627b7" mb="20px">
          PriceLOCQ for Business Stations
        </Typography>
        <TextField label="Email" name="email" value={inputs.email || ''} variant="standard" type="email" onChange={handleChange} fullWidth />
        <TextField label="Password" name="password" value={inputs.password || ''} variant="standard" type="password" onChange={handleChange} fullWidth />
        <LoadingButton type="submit" loading={loading} variant="contained" sx={{mt: '40px'}} fullWidth>Log in</LoadingButton>
      </Paper>

      {errors && (
        <Stack spacing={1} sx={{mx: 'auto', width: 300}}>
          {errors.map(error => (
            <Alert severity="error" key={error}>{error}</Alert>
          ))}
        </Stack>
      )}
    </form>
  );
}

export default LoginForm;