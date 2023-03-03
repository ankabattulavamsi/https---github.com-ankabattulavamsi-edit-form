// import { Box, Button, TextField } from '@mui/material'
// import { useFormik } from 'formik';
// import React from 'react'
// import * as yup from "yup"; 

// const App = () => {

//   const validationSchema = yup.object({
//     email: yup
//     .string()
//       .min(2, "Too Short!")
//       .max(50, "Too Long!")
//       .email('Enter a valid email')
//       .required('Email is required'),
//     password: yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//       .min(8, 'Password should be of minimum 8 characters length')
//       .required('Password is required'),
//   });

  
//     const formik:any = useFormik({
//       initialValues: {
//         email: 'foobar@example.com',
//         password: 'foobar',
//       },
//       validationSchema: validationSchema,
//       onSubmit: (values) => {
//         alert(JSON.stringify(values, null, 2));
//       },
//     });  


//   return (
//     <Box sx={{p: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
//     <form onSubmit={formik.handleSubmit}>
//       <TextField
//         fullWidth
//         id="email"
//         name="email"
//         label="Email"
//         value={formik.values.email}
//         onChange={formik.handleChange}
//         error={formik.touched.email && Boolean(formik.errors.email)}
//         helperText={formik.touched.email && formik.errors.email}
//         sx={{m:2}}
//       />
//       <TextField
//         fullWidth
//         id="password"
//         name="password"
//         label="Password"
//         type="password"
//         value={formik.values.password}
//         onChange={formik.handleChange}
//         error={formik.touched.password && Boolean(formik.errors.password)}
//         helperText={formik.touched.password && formik.errors.password}
//         sx={{m:2}}
//       />
//       <Button color="primary" variant="contained" fullWidth type="submit"  sx={{m:2}}>
//         Submit
//       </Button>
//     </form>
//   </Box>
//   )
// }


// export default App

import React from 'react'
import Home from './Components/Home'
import './App.css'
import CompA from './NewComp/CompA'

const App = () => {
  return (
    <div>
      <CompA />
    </div>
  )
}

export default App
