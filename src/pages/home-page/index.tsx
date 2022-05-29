import React, { useState, useEffect } from 'react';
import { Container, Box, Grid } from '@mui/material';

import axios from 'axios';

import { Sitter } from '../../types';
import SitterCard from './sitter-card';

const HomePage: React.FC = () => {
  const [sitters, setSitters] = useState<Sitter[]>([]);

  useEffect(() => {
    axios.get<Sitter[]>('http://localhost:8000/sitters')
      .then(({ data }) => setSitters(data))
      .catch(console.error);
  }, []);

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Box
        component="section"
        gap={5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'Wrap',
          py: 8,
        }}
      >
        {sitters.map(({ id, ...SitterProps }) => (
          <Grid key={id} item xs={12} lg={4}>
            <SitterCard {...SitterProps} />
          </Grid>
        ))}
      </Box>
      <Box />
    </Container>
  );
};

export default HomePage;
