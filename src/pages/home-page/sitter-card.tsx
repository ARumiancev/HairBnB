import {
  Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { Sitter } from '../../types';

type SitterCardProps = Omit<Sitter, 'id'>;

const SitterCard: React.FC<SitterCardProps> = ({
  name, city, email, about, img,
}) => (
  <Paper
    elevation={0}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: 307,
      width: 300,
      textAlign: 'center',
      pb: 1,
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box>
        {img && (
          <Box
            component="img"
            src={img}
            sx={{ height: 200, width: 300 }}
          />
        )}
        <Typography gutterBottom variant="h6">
          {name}
        </Typography>
        <Typography color="text.secondary" sx={{ px: 2, fontSize: 12 }}>
          {city}
        </Typography>
      </Box>

    </Box>
    <Accordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>More info</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          {about}
        </Typography>
        <Typography variant="body1">
          {email}
        </Typography>
      </AccordionDetails>
    </Accordion>

  </Paper>
);

export default SitterCard;
