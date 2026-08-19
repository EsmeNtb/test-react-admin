import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, DataTable,} from "react-admin";

export const PostList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.userId}
                    secondaryText={(record) => record.id}
                    tertiaryText={(record) => record.title}
                />
            ) : (
                <DataTable>
                    <DataTable.Col source="userId" />
                    <DataTable.Col source="id" />
                    <DataTable.Col source="title" />
                    <DataTable.Col source="body"/>
                </DataTable>
            )}
        </List>
    );
};