import {
  Box,
  IconButton,
  Stack,
  Typography,
  InputBase,
  Button,
  Divider,
  Avatar,
  Badge,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass, Translate } from "phosphor-react";
import React from "react";
import { styled, alpha , useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex" ,
    
      // width: "100%",
      // height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function ChatElement({id,name,img,msg,time,unread,online}) {
    const theme = useTheme();
  return (
   
    <Box
   
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor:theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
      }}
      p={2}
    >
      <Stack 
        direction={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={2} >
           { online ? <StyledBadge
      
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar src={faker.image.avatar()} />
          </StyledBadge> :  <Avatar src={faker.image.avatar()} /> }
          <Stack >
          <Stack  justifyContent={"space-between"} spacing={0.6}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
          <Stack direction={"row"}  marginLeft={"150px"} spacing={2} >
            <Typography sx={{ fontWeight: 600 }} variant="caption">
              {/* {time} */}
            </Typography>
         
            {/* <Badge color="primary"  badgeContent={unread}></Badge> */}
          
          </Stack>
          </Stack>
         
        </Stack>
      </Stack>
      
      <Box top={"-47px"} position={"relative"} >

      
      <Stack direction={"row"}  marginLeft={"225px"} >
      <Badge color="primary"   badgeContent={unread}></Badge>
      </Stack>
      </Box>
    
     
    
    </Box>
  );
}
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  // marginRight: theme.spacing(2),
  marginLeft: 0,
  padding: "2%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  // padding: 0,
  // height: "100%",
  // position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MultiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 8),
        paddingLeft: "calc(1em + ${theme.spacing(4)} + ${theme.spacing(2)})",
    width: "100%",
    },
}));

const Chats = () => {
    const theme = useTheme();
  return (
  
    <Box
      sx={{
        position: "relative",
        
        width: 320,
        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{height: "100vh"}} >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack
        
        >
          <Search>
         
            <SearchIconWrapper >
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper > 
            <StyledInputBase 
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}              
            />
          
            
          </Search>
       </Stack>
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems="center" spacing={1.5}>
            <ArchiveBox size={24} />
            <Button variant="text">Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack spacing={6} direction={"column"} sx={{flexGrow: 1,overflow: "scroll", height:"100%"}} >
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
           
            <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{color:"676767"}} >
                    Pinned
                </Typography>
                {ChatList.filter((el) => el.pinned).map((el)=> {
return  <ChatElement {...el} />
                })}
              
            </Stack>
            <Stack spacing={4.4} marginTop={2}>
                <Typography variant="subtitle2" sx={{color:"676767"}} >
                   All Chats
                </Typography>
                {ChatList.filter((el) => !el.pinned).map((el)=> {
return  <ChatElement {...el} />
                })}
              
            </Stack>
                 
            </SimpleBarStyle>
        
        </Stack>
      </Stack>
    </Box>
    
  );
};

export default Chats;
