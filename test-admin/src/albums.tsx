
import { useMediaQuery, Theme, } from "@mui/material";
import { List, SimpleList, ReferenceField,TextField ,DataTable,Edit,SimpleForm,TextInput,Create,Show,SimpleShowLayout,ReferenceInput} from "react-admin";

const albumFilters = [
    <TextInput key="search" source= "q" label="Search" alwaysOn />,
    <ReferenceInput key="user" source="userId" label="User" reference="users" />
];

export const AlbumList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List filters={albumFilters}>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.userId}
                    secondaryText={(record) => record.id}  
                    tertiaryText={(record) => record.title}
                />
            ) : (
                <DataTable>
                    <DataTable.Col source="userId">
                    <ReferenceField source="userId" reference="users" />
                </DataTable.Col>

                <DataTable.Col source="id" />
                <DataTable.Col source="title" />
                </DataTable>
            )}
        </List>
    );
};

export const AlbumEdit = () => (
    <Edit>
        <SimpleForm warnWhenUnsavedChanges>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users"/>
            <TextInput required source="title" />
        </SimpleForm>
    </Edit>
);

export const AlbumCreate = () => (
    <Create>
        <SimpleForm >
            <ReferenceInput source="userId" reference="users"/>
            <TextInput required source="title" />
        </SimpleForm>
    </Create>
);

export const AlbumShow=() => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users"/>
            <TextField source="title" />
        </SimpleShowLayout>
    </Show>
);