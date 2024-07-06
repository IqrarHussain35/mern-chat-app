import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const CustomTab = ({
  value,
  onChange,
  centered,
  tabs,
  color,
  sx,
  ...props
}) => {
  const defaultStyle = { color: color, textTransform: 'none', ...sx };
  return (
    <TabContext value={value}>
      <TabList
        textColor={color}
        TabIndicatorProps={{ style: { backgroundColor: color } }}
        onChange={onChange}
        centered={centered}
        {...props}
        sx={{
          overflowX: 'auto',
        }}
      >
        {tabs?.map((item) => (
          <Tab
            sx={defaultStyle}
            key={item}
            label={item.label}
            value={item.value}
          />
        ))}
      </TabList>
      {tabs?.map(
        (item) =>
          item.panel && (
            <TabPanel key={item} value={item.value}>
              {item.panel}
            </TabPanel>
          ),
      )}
    </TabContext>
  );
};

export default CustomTab;
