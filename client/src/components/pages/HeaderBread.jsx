import React from 'react'
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import { Breadcrumbs, Box
 } from '@mui/material';

function handleClick(event) {
  event.preventDefault();
}

const HeaderBread = ({page, action}) => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Dashboard
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      {page}
    </Link>,
    <Typography key="3" color="text.primary">
     {action}
    </Typography>,
  ];

  return (
    <Box>
      <Typography fontWeight={"bold"} variant="h2">
        {page}
      </Typography>
      <Breadcrumbs separator="›" aria-label="breadcrumb" mt={2}>
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};

export default HeaderBread 
