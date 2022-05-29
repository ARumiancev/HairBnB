import { Button, styled } from '@mui/material';

const ButtonScale = styled(Button)(({ theme }) => ({
  mt: 4,
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  fontSize: 12,
  px: 3,
  opacity: 0.9,
  transition: theme.transitions.create('transform', {
    duration: '0.5s',
  }),
  ':hover': {
    opacity: 1,
    transform: 'scale(1.1)',
    backgroundColor: theme.palette.primary.main,
  },
}));

export default ButtonScale;
