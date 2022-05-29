import { Paper, Typography } from '@mui/material';
import React from 'react';
import { Sitter } from '../../types';

type SitterCardProps = Omit<Sitter, 'id'>;

const SitterCard: React.FC<SitterCardProps> = ({
  name, city, about,
}) => (
  <Paper>
    <Typography>{name}</Typography>
    <Typography>{city}</Typography>
    <Typography>{about}</Typography>
  </Paper>
);

export default SitterCard;
