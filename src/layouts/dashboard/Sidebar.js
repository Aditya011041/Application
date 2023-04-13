import React from "react";
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { Gear } from "phosphor-react";
import { Nav_Buttons } from "../../data";
import { useState } from "react";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";
import { faker } from "@faker-js/faker";
import Logo from "../../assets/Images/cute.ico";

const SideBar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "5px 0px 2px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: 100,
      }}
    >
      <Stack
        direction="column"
        alignItems={"center"}
        spacing={3}
        justifyContent={"space-between"}
        sx={{ height: "100%" }}
      >
        <Stack alignItems="center" spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.8,
              transition: "font-size 0.2s",
              "&:hover": {
                cursor: "pointer",
                transform: "scale(1.2)",
              },
            }}
          >
            <img src={Logo} alt={"chat app logo"} />
          </Box>
          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems="center"
            spacing={3}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  sx={{
                    backgroundColor: "#BA68C8",
                    borderRadius: 1.7,
                  }}
                >
                  <IconButton
                    sx={{
                      width: "max-content",
                      color: "#fff",
                    }}
                    key={el.index}
                  >
                    {el.icon}{" "}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(el.index);
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                    fontsize: 24,
                    transition: "font-size 0.2s",
                    "&:hover": {
                      color: "red",
                      fontSize: 32,
                    },
                  }}
                  key={el.index}
                >
                  {el.icon}{" "}
                </IconButton>
              )
            )}
            <Divider sx={{ width: "50px" }} />{" "}
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: "#BA68C8",
                  borderRadius: 1.7,
                }}
              >
                <IconButton
                  sx={{
                    width: "max-content",
                    color: "#fff",
                    fontsize: 24,
                    transition: "font-size 0.2s",
                    "&:hover": {
                      fontSize: 32,
                    },
                  }}
                 
                >
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelected(3);
                }}
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                  fontsize: 24,
                  transition: "font-size 0.2s",
                  "&:hover": {
                    color: "red",
                    fontSize: 32,
                  },
                }}
              >
                <Gear />
              </IconButton>
            )}{" "}
          </Stack>
        </Stack>
        <Stack spacing={5} direction="column" alignItems="center">
          <AntSwitch
            onChange={() => {
              onToggleMode();
            }}
          />

          <Avatar src={faker.image.avatar()} />
        </Stack>
      </Stack>
    </Box>
  );
};
export default SideBar;
