import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, DataTable, EmailField } from "react-admin";

export const CommentList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.postId}
                    secondaryText={(record) => record.name}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <DataTable>
                    <DataTable.Col source="postId" />
                    <DataTable.Col source="id" />
                    <DataTable.Col source="name" />
                    <DataTable.Col source="email">
                        <EmailField source="email" />
                    </DataTable.Col>
                    <DataTable.Col source="body" />
                </DataTable>
            )}
        </List>
    );
};