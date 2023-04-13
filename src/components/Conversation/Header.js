import React from "react";
import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { CaretDown, MagnifyingGlass, PhoneCall, VideoCamera } from "phosphor-react";
import {useTheme} from "@mui/material/styles";
import StyledBadge from "../StyledBadge";

const Header = () => {
    const theme  = useTheme ();

    return(

        <Box
        p={2}
        sx={{
            
         
          width: "100%",
          backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={"row"}
          sx={{ width: "100%", height: "100%" }}
        >
          <Stack direction={"row"} spacing={2}>
            <Box>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt={faker.name.fullName()}
                  src={faker.image.avatar()}
                />
              </StyledBadge>
            </Box>
            <Stack spacing={0.2}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              <Typography variant="caption">Online</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center "} spacing={3}>
            <IconButton
              sx={{
                
                transition: "font-size 0.2s",
                "&:hover": {
                  fontSize: 32,
                  color: "red",
                },
              }}
            >
              <VideoCamera />
            </IconButton>
            <IconButton
              sx={{
               
                transition: "font-size 0.2s",
                "&:hover": {
                  fontSize: 32,
                  color: "red",
                },
              }}
            >
              <PhoneCall />
            </IconButton>
            <IconButton
              sx={{
                
                transition: "font-size 0.2s",
                "&:hover": {
                  fontSize: 32,
                  color: "red" ,
            
                },
              }}
            >
              <MagnifyingGlass />
            </IconButton>
            <Divider orientation="vertical " flexItem />
            <IconButton
              sx={{
                
                transition: "font-size 0.2s",
                "&:hover": {
                  fontSize: 32,
                  color: "red" ,
                
                },
              }}
            >
              <CaretDown />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    );
};
export default Header;