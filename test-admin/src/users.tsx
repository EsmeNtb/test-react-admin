/* import { List, DataTable, EmailField } from "react-admin";

export const UserList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
            <DataTable.Col source="username" />
            <DataTable.Col source="email">
                <EmailField source="email" />
            </DataTable.Col>
            <DataTable.Col source="address.street" />
            <DataTable.Col source="phone" />
            <DataTable.Col source="website" />
            <DataTable.Col source="company.name" />
        </DataTable>
    </List>
); */

/* import {List,SimpleList } from "react-admin";

export const UserList = () => (
    <List>
        <SimpleList
            primaryText={(record) => record.name}
            secondaryText={(record) => record.email}
            tertiaryText={(record) => record.phone}
        />
    </List>
); */

import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, DataTable, EmailField, Show,TextField, SimpleShowLayout, TextInput,Edit,SimpleForm,Create,} from "react-admin";
import MyUrlField from "./MyUrlField";

const userFilters = [
    <TextInput key="search" source="q" label="Buscar" alwaysOn />
];

export const UserList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List filters={userFilters}>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <DataTable>
                    <DataTable.Col source="id" />
                    <DataTable.Col source="name" />
                    <DataTable.Col source="username" />
                    <DataTable.Col source="email">
                        <EmailField source="email" />
                    </DataTable.Col>
                    <DataTable.Col source="address.street" />
                    <DataTable.Col source="phone" />
                    {/*<DataTable.Col source="website" field={UrlField} />*/}
                    <DataTable.Col source="website" field={MyUrlField} />
                    <DataTable.Col source="company.name" />
                </DataTable>
            )}
        </List>
    );
};

export const UserEdit = () => (
    <Edit>
        <SimpleForm warnWhenUnsavedChanges>
            <TextInput disabled source="id" />
            <TextInput required source="name" />
            <TextInput source="username" />
            <TextInput required source="email"/>
            <TextInput source="address.street"/>
            <TextInput source="phone"/>
            <TextInput source="website"/>
            <TextInput source="company.name"/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput required source="name" />
            <TextInput source="username" />
            <TextInput required source="email"/>
            <TextInput source="address.street"/>
            <TextInput source="phone"/>
            <TextInput source="website" />
            <TextInput source="company.name"/>
        </SimpleForm>
    </Create>
);

export const UserShow = () =>(
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email"/>
            <TextField source="address.street"/>
            <TextField source="phone"/>
            <TextField source="website"/>            
            <TextField source="company.name"/>
        </SimpleShowLayout>
    </Show>
);