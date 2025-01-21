import React, { useState } from 'react';
import { Typography, TextField, Button ,Alert,Checkbox,Link,InputAdornment,IconButton} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2';

function Uye() {
  // Şifre göster/gizle durumu
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  // Doğrulama şeması
  const validationSchema = Yup.object({
   email: Yup.string()
      .email("Geçerli bir e-posta giriniz")
      .required("E-posta alanı boş bırakılamaz"),
    password: Yup.string()
      .required("Şifre alanı boş bırakılamaz")
      .min(6, "Şifre en az 6 karakter olmalıdır")
      .matches(/[a-z]/, "En az bir küçük harf içermelidir")
      .matches(/[A-Z]/, "En az bir büyük harf içermelidir")
      .matches(/[0-9]/, "En az bir rakam içermelidir"),
      kosul: Yup.boolean()
      .oneOf([true], 'Şartları kabul etmelisiniz')
      .required('Seçmelisiniz'),
    kabul: Yup.boolean()
      .oneOf([true], 'Kabul etmelisiniz')
      .required('Seçmelisiniz'),
  });
  // Başlangıç değerleri
  const initialValues = [
    { email: "test1@esa", password: "123", kabul:false, kosul:false }
  ];

  const [userList, setUserList] = useState(initialValues); 

// Form gönderim işlemi
  const handleSubmit = (values,{resetForm}) => { 
    setUserList((newUser) => [...newUser, values]);
    Swal.fire({
    title: "Üye İşleminiz Başarılı ",
    icon: "success",
    draggable: true
    });
    /*
    setTimeout(() => {
      window.location.reload();
    }, 1800); 
    */
    console.log("Yeni kullanıcı eklendi:", values);
    resetForm();
  };

  return (
    <div style={{paddingLeft: '20px',paddingRight: '20px'}}>
      <Typography variant="h6" component="div" sx={{marginBottom:"20px"}} > Üye Formu</Typography>
      <Formik initialValues={{ email: "", password: "" ,kabul:false , kosul :false}} validationSchema={validationSchema}  onSubmit={handleSubmit} >
        {({ handleSubmit , errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <Typography variant="body1" fontWeight={500} sx={{marginBottom:"10px"}}>E-Posta</Typography>
              <Field as={TextField} fullWidth id="email" name="email"  type="email" placeholder="E-posta girin" variant="outlined"size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#973131", 
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#973131", 
                    },
                  },
                }}
              />
              {errors.email && touched.email && (
                <Alert severity="error" style={{ marginTop: "8px" }}>
                  {errors.email}
                </Alert>
              )}
            </div>
            <div style={{ marginBottom: '16px' }}>
              <Typography variant="body1" fontWeight={500} sx={{marginBottom:"10px"}}>Şifre</Typography>
              <Field as={TextField} fullWidth id="password"  name="password"
                type={showPassword ? "text" : "password"}  placeholder="Şifre girin"  variant="outlined"  size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#973131", // Hover rengini değiştirme
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#973131", // Focus rengini kaldırma
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }} />
               {errors.password && touched.password && (
                <Alert severity="error" style={{ marginTop: "8px" }}>
                  {errors.password}
                </Alert>
              )}
            </div>
            <div style={{ marginBottom: '16px' }}>
              <Field as={Checkbox} id="kosul"  name="kosul" type="checkbox" color="error"/>
              <span>Tarafıma Elektronik İleti Gönderilmesini Kabul Ediyorum.</span>
              {errors.kosul && touched.kosul && (
                <Alert severity="error" style={{ marginTop: '8px' }}>
                  {errors.kosul}
                </Alert>
              )}
            </div>
            <div style={{ marginBottom: '16px' }}>
              <Field as={Checkbox}  id="kabul"  name="kabul" type="checkbox" color="error" />
              <span> Kişisel Verilerimin işlenmesine yönelik <Link>aydınlatma metnini</Link> okudum ve anladım.</span>
              {errors.kabul && touched.kabul && (
                <Alert severity="error" style={{ marginTop: '8px' }}>
                  {errors.kabul}
                </Alert>
              )}
            </div>
            <Button type="submit" variant="contained" fullWidth sx={{backgroundColor:"#973131"}}>Kayıt Ol </Button>
          </Form>
        )}
      </Formik>
          {/*
          {userList.map((item, index) => (
                <p key={index}>
                  {item.email} - {item.password}
                </p>
              ))}  
          */ }
            
     
    </div>
  );
}
export default Uye;
