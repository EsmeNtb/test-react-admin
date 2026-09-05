import { useMediaQuery, Theme } from "@mui/material";
import {
    List,
    SimpleList,
    ImageField,
    DataTable,
    Edit,
    SimpleForm,
    TextInput,
    Create,
    Show,
    SimpleShowLayout,
    TextField,
    ReferenceField,
    ReferenceInput,
} from "react-admin";

const photoFilters = [
    <TextInput key="search" source= "q" label="Search" alwaysOn />,
    <ReferenceInput key="album" source="albumId" label="Álbum" reference="albums" />
];
export const PhotoList = () => {
    const isSmall = useMediaQuery<Theme>((theme) =>
        theme.breakpoints.down("sm")
    );

    return (
        <List filters={photoFilters}>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.albumId}
                    secondaryText={(record) => record.title}
                    tertiaryText={(record) => record.url}
                />
            ) : (
                <DataTable>
                    <DataTable.Col source="albumId">
                        <ReferenceField
                            source="albumId"
                            reference="albums"
                        />
                    </DataTable.Col>

                    <DataTable.Col source="id" />
                    <DataTable.Col source="title" />
                    <DataTable.Col source="url" />

                    <DataTable.Col label="Miniatura">
                        <ImageField
                            source="thumbnailUrl"
                            title="title"
                        />
                    </DataTable.Col>
                </DataTable>
            )}
        </List>
    );
};

export const PhotoEdit = () => (
    <Edit>
        <SimpleForm warnWhenUnsavedChanges>
            <TextInput disabled source="id" />

            <ReferenceInput
                source="albumId"
                reference="albums"
            />

            <TextInput required source="title" />
            <TextInput source="url" />
            <TextInput source="thumbnailUrl" />
        </SimpleForm>
    </Edit>
);

export const PhotoCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput
                source="albumId"
                reference="albums"
            />

            <TextInput required source="title" />
            <TextInput source="url" />
            <TextInput source="thumbnailUrl" />
        </SimpleForm>
    </Create>
);

export const PhotoShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />

            <ReferenceField
                source="albumId"
                reference="albums"
            />

            <TextField source="title" />
            <TextField source="url" />

            <ImageField
                source="thumbnailUrl"
                title="title"
            />
        </SimpleShowLayout>
    </Show>
);