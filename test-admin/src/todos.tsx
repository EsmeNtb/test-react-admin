import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, DataTable, EmailField } from "react-admin";

export const TodosList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.userId}
                    secondaryText={(record) => record.title}
                    tertiaryText={(record) => record.completed ? "true" : "false"}
                />
            ) : (
                <DataTable>
                    <DataTable.Col source="userId" />
                    <DataTable.Col source="id" />
                    <DataTable.Col source="title" />
                    <DataTable.Col source="completed" />
                </DataTable>
            )}
        </List>
    );
};