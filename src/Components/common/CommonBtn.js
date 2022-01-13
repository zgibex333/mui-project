import React from 'react'
import Button from '@mui/material/Button'

const CommonBtn = ({
    children,
    color,
    disabled,
    size,
    sx,
    variant,
    onClick,
}) => {
    return (
        <Button
            color={color}
            disabled={disabled}
            size={size}
            variant={variant}
            sx={sx}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default CommonBtn
