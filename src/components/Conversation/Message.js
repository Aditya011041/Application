import React from "react";
import {Box, Stack} from '@mui/material';
import {Chat_History} from '../../data';
import {MediaMsg, TextMsg, Timeline} from '../MsgTypes';

const Message = () => {
    return (
        <Box p={3} >
            <Stack spacing={3} >
                {
                Chat_History.map((el) => {
                    switch (el.type) {
                        case "divider":
                            return <Timeline el={el}/>;

                        case "msg":
                            switch (el.subtype) {
                                case "img":
                                    // img message
                                   return <MediaMsg el={el}/>;
                                   
                                case "doc":
                                    // Doc message
                                    break;
                                case "link":
                                    // Link message
                                    break;
                                case "reply":
                                    // reply message
                                    break;
                                default:
                                    return <TextMsg el={el}/>;


                            }

                            break;


                        default:
                            return <></>;
                            break;

                    }

                })
            } </Stack>

        </Box>
    )
}

export default Message
