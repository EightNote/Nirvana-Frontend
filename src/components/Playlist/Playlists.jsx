import * as React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyPlaylists from "./MyPlaylists";
import DiscoverPlaylists from "./DiscoverPlaylists";
import CreatePlaylist from "./CreatePlaylist";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Playlist() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ bgcolor: 'background.paper', flexGrow: 1, display: 'flex', height: 900 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="My Playlists" {...a11yProps(0)} />
                <Tab label="Discover Playlists" {...a11yProps(1)} />
                <Tab label="Create Playlist" {...a11yProps(2)} />
                {/* <Tab label="Collaborative Playlists" {...a11yProps(3)} /> */}
            </Tabs>
            <TabPanel value={value} index={0}>
                <MyPlaylists/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <DiscoverPlaylists/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <CreatePlaylist/>
            </TabPanel>
        </Box>
    );
}
