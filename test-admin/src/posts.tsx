import { useMediaQuery, Theme, } from "@mui/material";
import {
    List,
    SimpleList,
    DataTable,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    TextField,
    ReferenceInput,
    Create,
    FunctionField,
    Show,
    SimpleShowLayout,
} from "react-admin";

const postFilters = [
    <TextInput key="search" source= "q" label="Search" alwaysOn />,
    <ReferenceInput key="user" source="userId" label="User" reference="users" />
];

export const PostList = () => {
    const isSmall = useMediaQuery<Theme>((theme) =>
        theme.breakpoints.down("sm")
    );

    return (
        <List filters={postFilters}>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.userId}
                    secondaryText={(record) => record.id}
                    tertiaryText={(record) => record.title}
                />
            ) : (
                <DataTable>
                    <DataTable.Col source="id" />

                    <DataTable.Col source="userId">
                        <ReferenceField
                            source="userId"
                            reference="users"
                            link="show"
                        />
                    </DataTable.Col>

                    <DataTable.Col source="title" />

                    {/* <DataTable.Col source="body" /> */}
                    <DataTable.Col label="Excerpt">
                        <FunctionField 
                            render= {(record)  =>`${record.body.substring(0,50)}...`}/>
                    </DataTable.Col>
                    <DataTable.Col>
                        <EditButton />
                    </DataTable.Col>
                </DataTable>
            )}
        </List>
    );
};

export const PostEdit = () => (
    <Edit>
        <SimpleForm warnWhenUnsavedChanges>
            <TextInput disabled source="id" />

            <ReferenceInput source="userId" reference="users"/>

            <TextInput required source="title" />

            <TextInput source="body" multiline rows = {5} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm >
            <TextInput disabled source="id"/>
            <ReferenceInput required source="userId" reference="users"/>
            <TextInput required source="title"/>
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Create>
);

export const PostShow=() => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source= "userId" reference="users"/>
            <TextField source="id"/>
            <TextField source="title"/>
            <TextField source="body"/>
        </SimpleShowLayout>
    </Show>
)