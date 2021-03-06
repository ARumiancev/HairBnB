import {
  Container, Box, TextField, Typography, Paper,
} from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import ButtonScale from '../../components/button-scale';
import { createNewSitterAction } from '../../store/features/sitters/sitters-action-creators';
import { useRootDispatch } from '../../store/hooks';
import { CreateSitter } from '../../types';

type CreateConfig = FormikConfig<CreateSitter>;

const initialValues: CreateSitter = {
  name: '',
  city: '',
  email: '',
  about: '',
  img: '',
};

const validationSchema: Yup.SchemaOf<CreateSitter> = Yup.object({
  name: Yup.string()
    .required('This field is Required'),
  city: Yup.string()
    .required('This field is Required'),
  email: Yup.string()
    .required('This field is Required')
    .email('Enter a valid email'),
  about: Yup.string()
    .required('This field is Required'),
  img: Yup.string()
    .required('This field is Required'),
});

const CreateNewSitterForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useRootDispatch();

  const handleSubmitCreateSitter: CreateConfig['onSubmit'] = ({
    name, city, email, about, img,
  }) => {
    dispatch(createNewSitterAction({
      name, city, email, about, img,
    }));
    navigate('/');
  };

  const {
    values, handleSubmit, handleChange, handleBlur, touched, errors,
  } = useFormik<CreateSitter>({
    initialValues,
    onSubmit: handleSubmitCreateSitter,
    validationSchema,
  });

  return (
    <Container
      sx={{
        pt: 15,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 400,
          px: 4,
          py: 3,
          bgcolor: 'formColor.main',
          boxShadow: 2,
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          color="primary.main"
        >
          Join our community as a sitter:
        </Typography>
        <TextField
          name="name"
          type="text"
          label="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Typography sx={{
          fontSize: 12, color: 'red', mt: 1, ml: 1,
        }}
        >
          {touched.name && errors.name}
        </Typography>

        <TextField
          name="city"
          type="text"
          label="City"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Typography sx={{
          fontSize: 12, color: 'red', mt: 1, ml: 1,
        }}
        >
          {touched.city && errors.city}
        </Typography>

        <TextField
          name="email"
          type="text"
          label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Typography sx={{
          fontSize: 12, color: 'red', mt: 1, ml: 1,
        }}
        >
          {touched.email && errors.email}
        </Typography>

        <TextField
          name="about"
          type="text"
          label="About"
          value={values.about}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Typography sx={{
          fontSize: 12, color: 'red', mt: 1, ml: 1,
        }}
        >
          {touched.about && errors.about}
        </Typography>

        <TextField
          name="img"
          type="text"
          label="Image URL"
          value={values.img}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Typography sx={{
          fontSize: 12, color: 'red', mt: 1, ml: 1,
        }}
        >
          {touched.img && errors.img}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <ButtonScale color="secondary" type="submit">Create</ButtonScale>
          <ButtonScale
            type="button"
            onClick={() => navigate('/')}
          >
            Back
          </ButtonScale>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateNewSitterForm;
