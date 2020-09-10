import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import DescriptionTab from "./productDetailTabs/Description";
import DetailsTab from "./productDetailTabs/Details";
import VideoTab from "./productDetailTabs/Video";
import WriteReview from "./productDetailTabs/WriteReview";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LabTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Description" value="1" />
            <Tab label="Details" value="2" />
            <Tab label="Video" value="3" />
            <Tab label="Write Review" value="4" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <DescriptionTab />
        </TabPanel>
        <TabPanel value="2">
          <DetailsTab />
        </TabPanel>
        <TabPanel value="3">
          <VideoTab />
        </TabPanel>
        <TabPanel value="4">
          <WriteReview />
        </TabPanel>
      </TabContext>
    </div>
  );
}
