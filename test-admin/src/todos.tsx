import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, TextField,DataTable,Edit,BooleanInput,SimpleForm,TextInput,ReferenceInput,Create,Show,SimpleShowLayout, ReferenceField, BooleanField} from "react-admin";

const todosFilters = [
    <TextInput key="search" source= "q" label="Buscar" alwaysOn />,
    <ReferenceInput key="user" source="userId" label="User" reference="users" />,
    <BooleanInput key="completed" source="completed" label="Completado"/>
];

export const TodosList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List filters={todosFilters}>
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

export const TodosEdit = () => (
    <Edit>
        <SimpleForm warnWhenUnsavedChanges>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users"/>
            <TextInput required source="title" />
            <BooleanInput source="completed" />
        </SimpleForm>
    </Edit>
);

export const TodosCreate = () => (
    <Create>
        <SimpleForm >
            <ReferenceInput source="userId" reference="users"/>
            <TextInput required source="title" />
            <BooleanInput source="completed" />
        </SimpleForm>
    </Create>
);

export const TodosShow=() => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users"/>
            <TextField source="title" />
            <BooleanField source="completed" />
        </SimpleShowLayout>
    </Show>
);