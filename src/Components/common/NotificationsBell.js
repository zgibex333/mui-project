import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Badge from '@mui/material/Badge'
import { IconButton } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import BasicMenu from './BasicMenu'

const NotificationsBell = ({ iconColor }) => {
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }
    const handleClose = (event) => {
        setOpen(false)
    }
    const noNotifications = `No new notifications`
    const notifications = [
        {
            id: 1,
            label: 'First Notification',
        },
        {
            id: 2,
            label: 'Second Notification',
        },
    ]
    const newNotifications = `You have ${notifications.length} notifications`
    return (
        <div>
            <Tooltip
                title={
                    notifications.length ? newNotifications : noNotifications
                }
            >
                <IconButton
                    color={iconColor}
                    onClick={notifications.length ? handleOpen : null}
                >
                    <Badge badgeContent={notifications.length} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <BasicMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                menuItems={notifications}
            />
        </div>
    )
}

export default NotificationsBell
