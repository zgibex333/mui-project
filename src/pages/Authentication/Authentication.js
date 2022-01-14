import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Header from '../../Components/Header/Header'
import BasicCard from '../../Components/common/BasicCard'
import RefreshIcon from '@mui/icons-material/Refresh'
import SearchBar from '../../Components/common/SearchBar/SearchBar'
import { Box, IconButton, Typography } from '@mui/material'
import CommonBtn from '../../Components/common/CommonBtn'
import { cardHeaderStyles } from '../../Components/common/SearchBar/styles'
import GridWrapper from '../../Components/common/GridWrapper/GridWrapper'
import BasicModal from '../../Components/common/BasicModal/BasicModal'
import NewUserModal from '../../Components/Modals/NewUserModal'

const Authentication = () => {
    const [open, setOpen] = useState(false)
    const [users, setUsers] = useState([])
    const [searchResults, setSearchResults] = useState(users)
    const getSearchBar = () => {
        const filterData = (value) => {
            const lowercasedValue = value.toLowerCase().trim()
            if (lowercasedValue === '') setUsers(searchResults)
            else {
                const filteredData = searchResults.filter((item) => {
                    return Object.keys(item).some((key) =>
                        item[key]
                            .toString()
                            .toLowerCase()
                            .includes(lowercasedValue)
                    )
                })
                setUsers(filteredData)
            }
        }

        const handleChange = (value) => {
            filterData(value)
        }
        const addUser = () => {
            setOpen(true)
        }

        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar
                    placeholder="Search by email adress, phone number or user UID"
                    onChange={(e) => handleChange(e.target.value)}
                    searchBarWidth="720px"
                />
                <Box>
                    <CommonBtn
                        onClick={addUser}
                        variant="contained"
                        size="large"
                    >
                        Add user
                    </CommonBtn>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                </Box>
            </Box>
        )
    }
    const addNewUser = (data) => {
        users.push({ ...data })
        setOpen(false)
    }
    const getContent = () => {
        return (
            <Box
                sx={{
                    padding: '40px 16px',
                    color: 'rgba(0, 0, 0, 0.6)',
                    fontSize: '1.3rem',
                }}
            >
                {users.length ? (
                    users.map((user) => (
                        <Box>
                            <Typography>{user.userId}</Typography>
                            <Typography>{user.email}</Typography>
                            <Typography>{user.phoneNumber}</Typography>
                        </Box>
                    ))
                ) : (
                    <Typography align="center">
                        No users for this project yet
                    </Typography>
                )}
            </Box>
        )
    }
    return (
        <GridWrapper>
            <BasicCard header={getSearchBar()} content={getContent()} />
            <NewUserModal
                open={open}
                onClose={() => setOpen(false)}
                addNewUser={addNewUser}
            />
        </GridWrapper>
    )
}

export default Authentication
