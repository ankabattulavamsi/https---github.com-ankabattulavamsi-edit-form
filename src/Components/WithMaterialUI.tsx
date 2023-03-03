import React, { Component } from 'react'

export class WithMaterialUI extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default WithMaterialUI


// const validationSchema = yup.object({
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

//   const WithMaterialUI = () => {
//     const formik = useFormik({
//       initialValues: {
//         email: 'foobar@example.com',
//         password: 'foobar',
//       },
//       validationSchema: validationSchema,
//       onSubmit: (values) => {
//         alert(JSON.stringify(values, null, 2));
//       },
//     });
  