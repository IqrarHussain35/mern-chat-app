import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation } from 'react-router-dom';

const handleClick = (event) => {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
};

const CustomBreadcrumbs = ({ data }) => {
  const { pathname } = useLocation();
  const breadcrumbs = data?.map((item, index) => (
    <Link
      underline="hover"
      key={index + 1}
      color={pathname === item.href ? 'primary' : 'inherit'}
      href={item.href}
      variant="caption"
    >
      {item.label}
    </Link>
  ));

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
