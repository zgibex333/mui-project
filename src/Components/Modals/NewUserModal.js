import React, { useEffect, useState } from 'react'
import BasicModal from '../common/BasicModal/BasicModal'
import Box from '@mui/material/Box'
import { modalStyles } from '../common/BasicModal/styles'
import { Input, TextField } from '@mui/material'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const defaultInputValues = {
    userId: '',
    email: '',
    phoneNumber: '',
}

const NewUserModal = ({ open, onClose, addNewUser }) => {
    const [values, setValues] = useState(defaultInputValues)
    useEffect(() => {
        if (open) setValues(defaultInputValues)
    }, [open])

    const modalStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px',
        marginBottom: '15px',
        '.MuiOutlinedInput-root': {
            marginBottom: '20px',
        },
    }

    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = yup.object().shape({
        userId: yup
            .string()
            .required()
            .min(6, 'User ID must be at least 6 characters'),
        email: yup
            .string()
            .required('Email is required')
            .email('Email is invalid'),
        phoneNumber: yup
            .string()
            .matches(phoneRegExp, 'Phone number is invalid'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(validationSchema) })

    const addUser = (data) => {
        addNewUser(data)
    }
    const handleChange = (value) => {
        setValues(value)
    }
    const getContent = () => {
        return (
            <Box sx={modalStyles}>
                <TextField
                    placeholder="User ID"
                    name="userId"
                    label="User ID"
                    required
                    {...register('userId')}
                    value={values.userId}
                    onChange={(event) => {
                        handleChange({
                            ...values,
                            userId: event.target.value,
                        })
                    }}
                    error={errors.userId ? true : false}
                    helperText={errors.userId?.message}
                />
                <TextField
                    placeholder="User E-mail"
                    name="userEmail"
                    label="User E-mail"
                    required
                    {...register('email')}
                    value={values.email}
                    onChange={(event) => {
                        handleChange({
                            ...values,
                            email: event.target.value,
                        })
                    }}
                    error={errors.email ? true : false}
                    helperText={errors.email?.message}
                />
                <TextField
                    placeholder="Phone number"
                    name="phoneNumber"
                    label="Phone number"
                    required
                    {...register('phoneNumber')}
                    value={values.phoneNumber}
                    onChange={(event) => {
                        handleChange({
                            ...values,
                            phoneNumber: event.target.value,
                        })
                    }}
                    error={errors.phoneNumber ? true : false}
                    helperText={errors.phoneNumber?.message}
                />
            </Box>
        )
    }
    return (
        <BasicModal
            open={open}
            onClose={onClose}
            title="New user"
            subtitle="Fill out inputs and hit 'submit' button."
            content={getContent()}
            validate={handleSubmit(addUser)}
        />
    )
}

export default NewUserModal
