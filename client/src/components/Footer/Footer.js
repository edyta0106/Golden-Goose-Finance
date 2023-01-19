import * as React from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import GroupsIcon from "@mui/icons-material/Groups";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Toolbar, styled } from "@mui/material";

const StyledBottomNavigation = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <StyledBottomNavigation sx={{ flexGrow: 1 }} value={value} onChange={handleChange} style={{ background: "#546E7A" }}>
        <a href="https://github.com/edyta0106/Financial_Tracker" target="_blank" rel="noopener noreferrer">
          <BottomNavigationAction style={{ color: "#FFFFFF" }} label="Documents" value="docs" icon={<GitHubIcon />} />
        </a>

        <BottomNavigationAction style={{ color: "#FFFFFF" }} label="Contributors" value="group" icon={<GroupsIcon />} />

        <BottomNavigationAction style={{ color: "#FFFFFF" }} label="Contact" value="contact" icon={<ContactSupportIcon />} />
      </StyledBottomNavigation>
    </>
  );
}
