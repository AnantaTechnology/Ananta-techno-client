import { Backdrop, SpeedDial, SpeedDialAction } from "@mui/material";
import { Fragment, useState } from "react";
import { WhatsApp, CallOutlined, QuestionAnswer } from "@mui/icons-material";

const UserOption = () => {
    const [open, setOpen] = useState(false);

    // Hardcoded phone number (India +91)
    const phoneNumber = '919599516256';
    const telUrl = `tel:+${phoneNumber}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <Fragment>
            {/* Backdrop when SpeedDial is open */}
            <Backdrop open={open} style={{ zIndex: 10 }} />

            {/* SpeedDial positioned at the bottom-right corner */}
            <SpeedDial
                ariaLabel="Contact options"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                style={{
                    position: "fixed",
                    bottom: 20,
                    right: 20,
                    zIndex: 11,
                    flexDirection: "column-reverse",
                }}
                icon={<QuestionAnswer sx={{ fontSize: 30 }} />}
                open={open}
                direction="up"
                FabProps={{
                    sx: {
                        backgroundColor: 'green',
                        width: 60,
                        height: 60,
                    },
                }}
            >
                <SpeedDialAction
                    icon={<CallOutlined sx={{ fontSize: 38, color: "#fff" }} />}
                    tooltipTitle="Call"
                    href={telUrl}
                    target="_self"
                    sx={{
                        backgroundColor: 'rgb(3, 231, 139)',
                        '&:hover': { backgroundColor: 'rgb(3, 231, 139)' },
                        padding: '1.5rem',
                        width: 55,
                        height: 55,
                        marginBottom: 2,
                    }}
                />
                <SpeedDialAction
                    icon={<WhatsApp sx={{ fontSize: 38, color: "#fff" }} />}
                    tooltipTitle="WhatsApp"
                    href={whatsappUrl}
                    target="_blank"
                    sx={{
                        backgroundColor: '#49E670',
                        '&:hover': { backgroundColor: '#49E670' },
                        padding: '1.5rem',
                        width: 55,
                        height: 55,
                        marginBottom: 2,
                    }}
                />
            </SpeedDial>
        </Fragment>
    );
};

export default UserOption;
