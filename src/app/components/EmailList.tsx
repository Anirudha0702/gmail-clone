import React from "react";
import EmailRow from "./EmailRow";
import { MailProps } from "../types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InboxIcon from "@mui/icons-material/Inbox";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { List} from "@mui/material";
import SidebarOption from "./SidebarOption";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ReplayIcon from "@mui/icons-material/Replay";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LocalOfferOutlined from "@mui/icons-material/LocalOfferOutlined";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import KeyboardIcon from '@mui/icons-material/Keyboard';
const EmailList = () => {
  const mails:MailProps[]=[
    {
      "username": "alice01",
      "body": "Hey, don't forget the meeting at 10.",
      "time": "09:30 AM"
    },
    {
      "username": "bob02",
      "body": "Lunch at 1?",
      "time": "11:15 AM"
    },
    {
      "username": "charlie03",
      "body": "Can you review the report?",
      "time": "02:45 PM"
    },
    {
      "username": "dave04",
      "body": "Project update?",
      "time": "04:00 PM"
    },
    {
      "username": "eve05",
      "body": "Please check the attached file.",
      "time": "06:30 AM"
    },
    {
      "username": "frank06",
      "body": "Join the call at 3.",
      "time": "02:55 PM"
    },
    {
      "username": "grace07",
      "body": "Team lunch tomorrow.",
      "time": "11:00 AM"
    },
    {
      "username": "heidi08",
      "body": "Code review comments.",
      "time": "03:15 PM"
    },
    {
      "username": "ivan09",
      "body": "Meeting rescheduled to 4.",
      "time": "01:00 PM"
    },
    {
      "username": "judy10",
      "body": "Reminder: Team building event.",
      "time": "08:45 AM"
    },
    {
      "username": "kate11",
      "body": "Can you send the updated files?",
      "time": "09:00 AM"
    },
    {
      "username": "leo12",
      "body": "Budget meeting at 5.",
      "time": "04:45 PM"
    },
    {
      "username": "mike13",
      "body": "Feedback on the presentation?",
      "time": "01:30 PM"
    },
    {
      "username": "nina14",
      "body": "Join the webinar at 2.",
      "time": "11:45 AM"
    },
    {
      "username": "oscar15",
      "body": "Document submission deadline.",
      "time": "10:00 AM"
    },
    {
      "username": "paul16",
      "body": "Coffee break at 10:30?",
      "time": "10:00 AM"
    },
    {
      "username": "quinn17",
      "body": "Update on the client meeting?",
      "time": "09:15 AM"
    },
    {
      "username": "ruth18",
      "body": "New project kickoff at 9.",
      "time": "08:00 AM"
    },
    {
      "username": "steve19",
      "body": "Can we move the meeting to 2?",
      "time": "12:30 PM"
    },
    {
      "username": "tina20",
      "body": "Team sync-up at 11.",
      "time": "10:30 AM"
    }
  ]
  
  const [value, setValue] = React.useState("Primary");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorPage, setAnchorPage] = React.useState<null | HTMLElement>(null);
  const [anchorKbd, setAnchorKbd] = React.useState<null | HTMLElement>(null);
  const label = { inputProps: { "aria-label": "Checkbox " } };
  const open = Boolean(anchorEl);
  const openKbd = Boolean(anchorKbd);
  const openPage = Boolean(anchorPage);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorPage(event.currentTarget);
  };
  const handleClosePage = () => {
    setAnchorPage(null);
  };

  const handleClickKbd = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorKbd(event.currentTarget);
  };
  const handleCloseKbd = () => {
    setAnchorKbd(null);
  };
  return (
    <Box>
      <div className="flex justify-between sticky top-0">
        <div className="flex gap-6 items-center">
          <Button className="flex items-center w-10 border border-gray-600 rounded justify-center overflow-hidden">
            <Checkbox {...label} size="small" sx={{ margin: 0 }} />
            <div>
              <div
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <ArrowDropDownIcon fontSize="small" />
              </div>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>All</MenuItem>
                <MenuItem onClick={handleClose}>Mone</MenuItem>
                <MenuItem onClick={handleClose}>Read</MenuItem>
                <MenuItem onClick={handleClose}>Unread</MenuItem>
                <MenuItem onClick={handleClose}>Spam</MenuItem>
              </Menu>
            </div>
          </Button>
          <IconButton>
            <ReplayIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <Button
              id="basic-button"
              aria-controls={openPage ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openPage ? "true" : undefined}
              onClick={handleClickPage}
            >
              1-50 of 6,581
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorPage}
              open={openPage}
              onClose={handleClosePage}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClosePage}>Oldest</MenuItem>
              <MenuItem onClick={handleClosePage}>Newest</MenuItem>
            </Menu>
          </div>
          <IconButton size='small'>
            <KeyboardArrowLeftIcon fontSize="small" />
          </IconButton>
          <IconButton size='small'>
            <KeyboardArrowRightIcon fontSize="small" />
          </IconButton>
          <div className="flex items-center">
            <IconButton>
              <KeyboardIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="border-b border-b-gray-400">
        <div className="flex w-fit items-center ">
          {[
            { title: "Primary", icon: InboxIcon },
            {
              title: "Social",
              icon: GroupOutlinedIcon,
              notification: true,
              value: 20,
            },
            {
              title: "Promotions",
              icon: LocalOfferOutlined,
              notification: true,
              value: 20,
            },
          ].map((item, index) => {
            return (
              <ListItem
                key={index}
                className={
                  value === item.title
                    ? "text-blue-600 border-b border-b-blue-600 cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => {
                  handleChange(item.title);
                }}
              >
                <ListItemIcon>
                  <SidebarOption Icon={item.icon} title={item.title} />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            );
          })}
        </div>
      </div>
      <List sx={{ width: "100%" }}>
        {mails.map((mail_) => {
          return (
            <ListItem key={mail_.time} dense>
              <EmailRow {...mail_}  />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default EmailList;
