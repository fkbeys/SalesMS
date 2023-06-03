import {
  Box,
  Button,
  Collapse,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import React, { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Adjust,
  Brightness4,
  ExpandLess,
  ExpandMore,
  SettingsApplications,
  ViewAgenda,
} from "@mui/icons-material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../Images/kucukLogo.jpg"; // import your logo image here
import headerLogo from "../Images/headerLogo.png"; // 
import { useDispatch } from "react-redux";
import { temaDegis } from "../Slices/TemaSlice";
import Url from "../Consts/Url";
import moment from "moment";
import AccountMenu from "../Components/UiComponents/AccountMenu";


type Anchor = "top" | "left" | "bottom" | "right";

const LayoutPage = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(true);
  const [hoveropen, setHoverOpen] = React.useState(true);
  const [mobilemode, setMobileMode] = React.useState(false);

  //-----------------------------------------------------------------------
  const [kartlarMainMenu, setKartlarMainMenu] = useState(false);

  const karlarHandle = () => {
    setKartlarMainMenu(!kartlarMainMenu);
  };
  //-----------------------------------------------------------------------

  //--------------------------------------------------------------------------
  const [idareEtMainMenu, setIdareEtMainMenu] = useState(false);

  const idareEtHandle = () => {
    setIdareEtMainMenu(!idareEtMainMenu);
  };
  //--------------------------------------------------------------------------

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  //--------------------------------------------------------------------------

  const user = "userinfo";
  const drawerWidth = 319;

  React.useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  const resizeHandler = () => {
    const windowsWidth = window.innerWidth;
    if (windowsWidth <= 768) {
      setMobileMode(true);
      setOpen(false);
    }
    if (windowsWidth > 768) {
      setMobileMode(false);
      setOpen(true);
    }
  };

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.complex,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.complex,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(8)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  interface AppBarProps {
    open?: boolean;
    mobmode: string;
  }

  const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme, open, mobmode }) => ({
    ...(mobmode === "true" && {
      width: `calc(100% - ${10}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.complex,
      }),
    }),
    ...(mobmode === "false" && {
      width: `calc(100% - ${90}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.complex,
      }),
      ...(open && {
        width: `calc(100% - ${270}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.complex,
        }),
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
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const hoverDrawerOpen = () => {
    if (!open && hoveropen) {
      setOpen(true);
      setHoverOpen(false);
    }
  };
  const hoverDrawerClose = () => {
    if (open && !hoveropen) {
      setOpen(false);
      setHoverOpen(true);
    }
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };

  const HeaderStyle = {
    color: "black",
    backgroundColor: "#adb2b8",
    "&:hover": { backgroundColor: "#73b2fe", borderradius: "10px" },
  };

  const itemStyle = {
    color: "black",
    "&:hover": { backgroundColor: "#73b2fe", borderradius: "10px" },
  };

  const ikonStyle = { color: "black" };

  const selectedItemStyle = {
    backgroundColor: "#faac05",
    color: "black",
    "&:hover": { backgroundColor: "#73b2fe", borderradius: "10px" },
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width:
          anchor === "top" || anchor === "bottom" ? "auto" : { drawerWidth },
      }}
      role="presentation"
    >
      {/* ************************************************************* Əməliyyatlar ********************************************************************************* */}
      <List
        sx={{ width: "100%", maxWidth: { drawerWidth } }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
          ></ListSubheader>
        }
      >
        <ListItemButton sx={HeaderStyle} onClick={() => karlarHandle()}>
          <ListItemIcon style={ikonStyle}>
            {" "}
            <ViewAgenda />{" "}
          </ListItemIcon>{" "}
          <ListItemText primary="Əməliyyatlar" />
          {kartlarMainMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={kartlarMainMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <List component="div" disablePadding>
              {" "}
              <ListItemButton
                sx={selectedIndex === 1 ? selectedItemStyle : itemStyle}
                onClick={() => {
                  navigate("/PaketAxtarisUI");
                  handleSelect(1);
                }}
              >
                <ListItemIcon style={ikonStyle}>
                  {" "}
                  <Adjust />{" "}
                </ListItemIcon>{" "}
                <ListItemText primary="Paket Axtar" />{" "}
              </ListItemButton>
            </List>

            <List component="div" disablePadding>
              {" "}
              <ListItemButton
                sx={selectedIndex === 2 ? selectedItemStyle : itemStyle}
                onClick={() => {
                  navigate("/BekleyenPaketlerPage");
                  handleSelect(2);
                }}
              >
                <ListItemIcon style={ikonStyle}>
                  {" "}
                  <Adjust />{" "}
                </ListItemIcon>{" "}
                <ListItemText primary="Gözləyən Paketlər" />{" "}
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              {" "}
              <ListItemButton
                sx={selectedIndex === 3 ? selectedItemStyle : itemStyle}
                onClick={() => {
                  navigate("/TeslimEdilmisPaketlerPage");
                  handleSelect(3);
                }}
              >
                <ListItemIcon style={ikonStyle}>
                  {" "}
                  <Adjust />{" "}
                </ListItemIcon>{" "}
                <ListItemText primary="Təhvil Verilmiş Paketlər " />{" "}
              </ListItemButton>
            </List>
          </List>
        </Collapse>
      </List>

      {/* ********************************************************************** İDAREETME ************************************************************************ */}

      {user.length > 0 ? (
        <List
          sx={{ width: "100%", maxWidth: { drawerWidth } }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
            ></ListSubheader>
          }
        >
          <ListItemButton sx={HeaderStyle} onClick={() => idareEtHandle()}>
            <ListItemIcon style={ikonStyle}>
              {" "}
              <SettingsApplications />{" "}
            </ListItemIcon>{" "}
            <ListItemText primary="İdarəetmə" />
            {idareEtMainMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={idareEtMainMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <List component="div" disablePadding>
                {" "}
                <ListItemButton
                  sx={selectedIndex === 21 ? selectedItemStyle : itemStyle}
                  onClick={() => {
                    navigate("/DepartmanlarPage");
                    handleSelect(21);
                  }}
                >
                  <ListItemIcon style={ikonStyle}>
                    {" "}
                    <Adjust />{" "}
                  </ListItemIcon>{" "}
                  <ListItemText primary="Departamentlər" />{" "}
                </ListItemButton>
              </List>

              <List component="div" disablePadding>
                {" "}
                <ListItemButton
                  sx={selectedIndex === 22 ? selectedItemStyle : itemStyle}
                  onClick={() => {
                    navigate("/KullanicilarPage");
                    handleSelect(22);
                  }}
                >
                  <ListItemIcon style={ikonStyle}>
                    {" "}
                    <Adjust />{" "}
                  </ListItemIcon>{" "}
                  <ListItemText primary="İstifadəçilər" />{" "}
                </ListItemButton>
              </List>

              <List component="div" disablePadding>
                {" "}
                <ListItemButton
                  sx={selectedIndex === 23 ? selectedItemStyle : itemStyle}
                  onClick={() => {
                    navigate("/YetkilerPage");
                    handleSelect(23);
                  }}
                >
                  <ListItemIcon style={ikonStyle}>
                    {" "}
                    <Adjust />{" "}
                  </ListItemIcon>{" "}
                  <ListItemText primary="Səlahiyyətlər" />{" "}
                </ListItemButton>
              </List>
            </List>
          </Collapse>
        </List>
      ) : (
        <div></div>
      )}

      {/* ********************************************************************************************************************************************** */}
    </Box>
  );

  // const customBg = "#008f62";

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        open={open}
        mobmode={mobilemode.toString()}
        style={{
          marginTop: "5px",
          borderRadius: "10px",
          marginRight: "5px",
          background: Url.customBg,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerClose}
            sx={{
              marginRight: "50px",
              marginLeft: "50px",
              ...(!open && { display: "none" }),
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "20px",
              marginLeft: "5px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Logo" style={{ height: "60px" }} />
          </Typography>
          {moment().format("yyyy-mm-dd")}

          <AccountMenu />


          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              dispatch(temaDegis());
            }}
            color="inherit"
          >
            <Brightness4 />
          </IconButton>

          <Typography variant="h6" component="div" pl={2}>
            {" "}
            {user}{" "}
          </Typography>


        </Toolbar>
      </AppBar>
      {!mobilemode ? (
        <Drawer
          variant="permanent"
          open={open}
          PaperProps={{
            elevation: 10,
            style: {
              borderRadius: "5px",
              background: Url.customBg,
              top: 4,
              borderColor: "lightgray",
              marginLeft: "10px",
              height: "calc(100% - 50px)",
              color: "#ffffff",
            },
          }}
          onMouseEnter={hoverDrawerOpen}
          onMouseLeave={hoverDrawerClose}
        >
          <DrawerHeader sx={{ justifyContent: "center" }}>
            {open ? (
              <Typography variant="h5">
                <Button
                  type="submit"
                  id="x"
                  color="secondary"
                  onClick={(x) => {
                    navigate("/DashboardPage");
                  }}
                >
                  <img
                    src={headerLogo}
                    alt="Logo"
                    style={{ height: "110px" }}
                  />{" "}
                </Button>
              </Typography>
            ) : (
              <Typography variant="h6">Y</Typography>
            )}
          </DrawerHeader>
          {list("left")}
          <Divider light />
        </Drawer>
      ) : (
        <MuiDrawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={toggleDrawer}
          PaperProps={{
            elevation: 10,
            style: {
              borderRadius: "10px",
              background:
                "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
              top: 8,
              marginLeft: "10px",
              height: "calc(100% - 50px)",
              color: "#ffffff",
              width: drawerWidth,
            },
          }}
        >
          <DrawerHeader sx={{ justifyContent: "center" }}>
            {open ? (
              <Typography variant="h5">Aselsan</Typography>
            ) : (
              <Typography variant="h6">Aselsan</Typography>
            )}
          </DrawerHeader>
          {list("left")}
          <Divider light />
        </MuiDrawer>
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: "30px",
          marginRight: "28px",
          marginTop: "10px",
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default LayoutPage;
