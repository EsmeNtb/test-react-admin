
import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, DataTable } from "react-admin";

export const PhotoList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.albumId}
                    secondaryText={(record) => record.title}
                    tertiaryText={(record) => record.url}
                />
            ) : (
                <DataTable>
                    <DataTable.Col source="albumId" />
                    <DataTable.Col source="id" />
                    <DataTable.Col source="title" />
                    <DataTable.Col source="url" />
                    <DataTable.Col source="thumbnailUrl" />
                </DataTable>
            )}
        </List>
    );
};