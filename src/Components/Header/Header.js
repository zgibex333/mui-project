import React, { useState } from 'react'
import CommonBtn from '../common/CommonBtn'
import NotificationsBell from '../common/NotificationsBell'
import { Avatar, Box, Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import HelpIcon from '@mui/icons-material/Help'

const Header = ({ title }) => {
    const headerStyles = {
        wrapper: {
            backgroundColor: '#009be5',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '20px',
        },
        topRow: {
            display: 'flex',
            paddingLeft: '600px',
            justifyContent: 'flex-end',
            gap: '10px',
            alignItems: 'center',
            marginBottom: '20px',
            '*': {
                // marginRight: '5px',
            },
        },
        middleRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            marginLeft: '320px',
        },
        link: {
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.7)',
            '&:hover': {
                color: '#fff',
                cursor: 'pointer',
            },
        },
        webButton: {
            marginRight: '5px',
        },
    }
    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
                <Typography sx={headerStyles.link}>Go to docs</Typography>

                <NotificationsBell iconColor="white" />

                <Avatar alt="avatar" src={'https://bit.ly/3zXqOYv'} />
            </Box>
            {/*second row*/}
            <Box sx={headerStyles.middleRow}>
                <Typography variant="h1" color="white">
                    {title}
                </Typography>
                <Box>
                    <CommonBtn sx={headerStyles.webButton} variant="outlined">
                        Web setup
                    </CommonBtn>
                    <Tooltip title="Help">
                        <IconButton color="white">
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}

export default Header
