import { useState } from 'react';
import { useGetIdentity, useLogout } from 'react-admin';

import { IconButton, Menu, MenuItem } from '@mui/material';

import LogoutIcon from '@mui/icons-material/Logout';

export const Identity = () => {
    const { data, isPending, error } = useGetIdentity();
    const logout = useLogout();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    if (isPending) return <>Loading...</>;
    if (error) return <>Error</>;

    return (
        <>
            <IconButton
                onClick={(event) => setAnchorEl(event.currentTarget)}
                sx={{
                    p: 0.25,
                    borderRadius: 2,
                    color: 'inherit',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'inherit',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        lineHeight: 1,
                    }}
                >
                    {data?.avatar && (
                        <img
                            src={data.avatar}
                            alt={data.fullName}
                            width={28}
                            height={28}
                            style={{
                                borderRadius: '50%',
                                objectFit: 'cover',
                            }}
                        />
                    )}

                    <span>{data?.fullName}</span>
                </div>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem
                    onClick={() => {
                        setAnchorEl(null);
                        logout();
                    }}
                >
                    <LogoutIcon
                        fontSize="small"
                        style={{ marginRight: 8 }}
                    />

                    Cerrar sesión
                </MenuItem>
            </Menu>
        </>
    );
};