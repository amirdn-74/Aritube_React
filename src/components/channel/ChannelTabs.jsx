import { makeStyles, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  tabsWrapper: {
    float: "left",
    width: "100%",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    borderBottom: "1px solid #ccc",
  },
  tab: {
    color: "#000",
    fontSize: "1.8rem",
  },
}));

function ChannelTabs(props) {
  const classes = useStyles();
  const tabs = [
    {
      label: "HOME",
      url: "/",
    },
    {
      label: "VIDEOS",
      url: "/videos",
    },
    {
      label: "PLAYLISTS",
      url: "/playlists",
    },
    {
      label: "COMMUNITY",
      url: "/community",
    },
    {
      label: "ABOUT",
      url: "/about",
    },
  ];

  return (
    <div className={classes.tabsWrapper}>
      <Tabs variant="scrollable">
        {tabs.map((tab) => (
          <Link to={`/channel${tab.url}`}>
            <Tab label={tab.label} className={classes.tab} />
          </Link>
        ))}
        {/* <Tab icon={<Search />} className={`${classes.tab}`} /> */}
      </Tabs>
    </div>
  );
}

export default ChannelTabs;
