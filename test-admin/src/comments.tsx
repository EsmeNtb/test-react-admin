import { useMediaQuery, Theme } from "@mui/material";
import { List,ReferenceField,TextField, SimpleList, DataTable, EmailField, TextInput,Edit,SimpleForm,Create,Show,SimpleShowLayout, ReferenceInput } from "react-admin";

const commentFilters = [
    <TextInput key="search" source= "q" label="Search" alwaysOn />,
    <ReferenceInput key="post" source="postId" label="Publicación" reference="posts" />
]; 
export const CommentList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List filters={commentFilters}>
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


export const CommentEdit = () => (
    <Edit>
        <SimpleForm warnWhenUnsavedChanges>
            <TextInput disabled source="id" />
            <ReferenceInput source="postId" reference="posts" />
            <TextInput source="name"/>
            <TextInput source="email" />
            <TextInput source="body"/>
        </SimpleForm>
    </Edit>
);

export const CommentCreate = () => (
    <Create>
        <SimpleForm >
            <TextInput disabled source="id" />
            <ReferenceInput source="postId" reference="posts" />
            <TextInput source="name"/>
            <TextInput source="email" />
            <TextInput source="body"/>
        </SimpleForm>
    </Create>
);

export const CommentShow=() => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="postId" reference="posts"/>            
            <TextField source="name"/>
            <EmailField source="email" />
            <TextField source="body"/>
        </SimpleShowLayout>
    </Show>
);