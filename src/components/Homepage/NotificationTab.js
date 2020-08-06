import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";

const NotificationTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position={'static'}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
        </Tabs>
      </AppBar>
    </>
  );
};
export default NotificationTab;
