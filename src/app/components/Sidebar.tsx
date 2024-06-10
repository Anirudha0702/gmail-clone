"use client";
import * as React from "react";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MailIcon from "@mui/icons-material/Mail";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import InboxIcon from "@mui/icons-material/Inbox";
import InsertDriveFileSharpIcon from "@mui/icons-material/InsertDriveFileSharp";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import {
  Search,
  Tune,
  ExpandMore,
  ExpandLess,
  HelpOutline,
  Settings,
  Apps,
  LocalOfferOutlined,
  QuestionAnswerOutlined,
} from "@mui/icons-material";
import EmailList from "./EmailList";
import Mail from "@mui/icons-material/Mail";
import Collapse from "@mui/material/Collapse";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import SidebarOption from "./SidebarOption";
import Compose from "./Buttons/Compose";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropDown";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,

  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,

    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const [showMore, setShowMore] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [showCatagories, setShowCatagories] = React.useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleCatagories = () => {
    setShowCatagories(!showCatagories);
    console.log("showCatagories", showCatagories);
  };
  return (
    <Box sx={{ display: "flex",height: "100vh" ,width:'100svw'}} className="">
      <CssBaseline />
      <AppBar position="fixed" color="default" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggle}
            edge="start"
          >
            <MenuIcon />
          </IconButton>

          <div className="flex flex-col w-screen relative">
            <div className="bg-slate-100 flex justify-between w-full h-fit items-center p-3">
              <div className="flex items-center gap-4">
                <Image
                  src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
                  loading="eager"
                  width={120}
                  height={30}
                  alt="gmail Logo"
                />
              </div>

              <div className=" rounded-full p-3 w-1/2  flex gap-2 bg-slate-200">
                <Search />
                <input
                  type="text"
                  placeholder="Search in mail"
                  className="bg-inherit w-11/12 outline-none"
                />
                <Tune />
              </div>

              <div className="flex justify-between gap-2 items-center ">
                <div className="bg-slate-200 p-3 flex items-center cursor-pointer rounded-full">
                  <div className="bg-green-600 rounded-full h-3 w-3 mr-2"></div>
                  <span>Active</span>
                  <ExpandMore />
                </div>
                <HelpOutline className="cursor-pointer" />
                <Settings className="cursor-pointer" />
                <Apps className="cursor-pointer" />
                <Avatar
                  alt="Joy pradhan"
                  src="https://lh3.googleusercontent.com/a/ACg8ocK9GKJnigu8vrGL7bcTWVI8Ip4C5xaAL0O69ncUHNTwoCHy6K7Y=s96-c"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <Divider />
        <Compose size={open ? "medium" : "small"} />
        <List aria-labelledby="nested-list-subheader">
          {[
            { title: "Inbox", icon: InboxIcon },
            { title: "Starred", icon: StarOutlineIcon },
            { title: "Snoozed", icon: AccessTimeIcon },
            { title: "Sent", icon: SendSharpIcon },
            { title: "Drafts", icon: InsertDriveFileSharpIcon },
          ].map((obj, index) => (
            <ListItem key={obj.title} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  height: 32,
                  justifyContent: open ? "initial" : "center",
                  alignItems: "center",
                  px: 2.5,
                  // backgroundColor:"red",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <SidebarOption Icon={obj.icon} title={obj.title} />
                </ListItemIcon>
                <ListItemText
                  className="text-sm"
                  primary={obj.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                height: 32,
                justifyContent: open ? "initial" : "center",
                alignItems: "center",
                px: 2.5,
              }}
              onClick={handleShowMore}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {showMore ? (
                  <SidebarOption Icon={ExpandLess} />
                ) : (
                  <SidebarOption Icon={ExpandMore} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={showMore ? "Less" : "More"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          {showMore && (
            <>
              {[
                { icon: LabelImportantIcon, title: "Important" },
                { icon: ChatOutlinedIcon, title: "Chats" },
                { icon: ScheduleSendOutlinedIcon, title: "Scheduled" },
                { icon: MarkAsUnreadOutlinedIcon, title: "All Mail" },
                { icon: ReportOutlinedIcon, title: "Spam" },
                { icon: DeleteOutlinedIcon, title: "Trash" },
              ].map((obj) => (
                <ListItem
                  key={obj.title}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    sx={{
                      height: 32,
                      justifyContent: open ? "initial" : "center",
                      alignItems: "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <SidebarOption Icon={obj.icon} />
                    </ListItemIcon>
                    <ListItemText
                      className="text-sm"
                      primary={obj.title}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}

              {/* //category */}
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    height: 32,
                    justifyContent: open ? "initial" : "center",
                    alignItems: "center",
                  }}
                  onClick={handleCatagories}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {showMore && showCatagories ? (
                      <SidebarOption Icon={ArrowDropUpIcon} />
                    ) : (
                      <SidebarOption Icon={ArrowDropDownIcon} />
                    )}
                    {/* <SidebarOption Icon={Mail} /> */}
                  </ListItemIcon>
                  <ListItemText primary="Catagories" />
                </ListItemButton>
                <Collapse in={showCatagories} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {[
                      { title: "Social", icon: GroupOutlinedIcon },
                      { title: "Updates", icon: InfoOutlinedIcon },
                      { title: "Forums", icon: QuestionAnswerOutlined },
                      { title: "Promotions", icon: LocalOfferOutlined },
                    ].map((obj, index) => (
                      <ListItem key={obj.title} disablePadding>
                        <ListItemButton
                          sx={{
                            height: 32,
                            justifyContent: open ? "initial" : "center",
                            alignItems: "center",
                            pl: 5,
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                            }}
                          >
                            <SidebarOption Icon={obj.icon} />
                          </ListItemIcon>
                          <ListItemText primary={obj.title} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </ListItem> 
            </>
          )}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1,py:3 ,overflowY:'scroll',width:1}} >
        <DrawerHeader />
        <EmailList />
      </Box>
      
    </Box>
  );
}
