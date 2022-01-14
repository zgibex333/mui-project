import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Input } from '@mui/material'
import { modalStyles } from './styles'
import CommonBtn from '../CommonBtn'

const BasicModal = ({ open, onClose, title, subtitle, content, validate }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyles.wrapper}>
                <Typography variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {subtitle}
                </Typography>
                {content}

                <Box sx={modalStyles.buttons}>
                    <CommonBtn variant="contained" onClick={validate}>
                        Submit
                    </CommonBtn>
                    <CommonBtn onClick={onClose}>Cancel</CommonBtn>
                </Box>
            </Box>
        </Modal>
    )
}

export default BasicModal
