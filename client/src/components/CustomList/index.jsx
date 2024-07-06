import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import React from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const CustomList = ({ data }) => {
  const [openMenuIndex, setOpenMenuIndex] = React.useState(null);

  const handleListClick = (index) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const handlesearch = (CountryId, CityId, SpecialityId) => {
    // navigate(`/SearchDoctor/${CountryId}/${CityId}/${SpecialityId}`);
    // navigate(
    //   `/SearchDoctor?CountryId=${CountryId}&CityId=${CityId}&SpecialityId=${SpecialityId}`
    // );
    // handleClose();
  };
  const doctors = [
    {
      Specialities: 'Detmataologist',
      SpecialitiesID: 1,
      CityCount: 4,
      Cities: [
        {
          CityName: 'Lahore',
          CityID: 2234,
          CountryID: 133,
        },
      ],
    },
  ];
  return (
    <List
      sx={{ bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {data?.map((menuItem, index) => (
        <React.Fragment key={index}>
          <ListItemButton onClick={() => handleListClick(index)}>
            <ListItemText
              primary={menuItem.Specialities}
              sx={{ color: '#232426' }}
            />
            {menuItem.CityCount > 0 &&
              (openMenuIndex === index ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
          <Collapse in={openMenuIndex === index} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menuItem.Cities.map((subItem, subIndex) => (
                <React.Fragment key={subIndex}>
                  {subIndex === 0 && (
                    <Divider variant="fullWidth" component="li" />
                  )}

                  <ListItemButton
                    onClick={() =>
                      handlesearch(
                        subItem.CountryID,
                        subItem.CityID,
                        menuItem.SpecialitiesID,
                      )
                    }
                  >
                    <ListItemText
                      primary={`${menuItem.Specialities} in ${subItem.CityName}`}
                      sx={{ mt: 0, mb: 0 }}
                    />
                  </ListItemButton>
                  <Divider />
                </React.Fragment>
              ))}
              {menuItem.CityCount > 3 && (
                <>
                  <ListItemButton
                    onClick={() => handlesearch(0, 0, menuItem.SpecialitiesID)}
                  >
                    <ListItemText
                      primary={`All Cities in ${menuItem.Specialities}`}
                      sx={{ mt: 0, mb: 0 }}
                    />
                  </ListItemButton>
                  <Divider />
                </>
              )}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default CustomList;
