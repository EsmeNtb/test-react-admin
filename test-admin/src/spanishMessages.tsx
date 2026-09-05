export const spanishMessages = {

    ra:{
        action:{
            add_filter: "Agregar filtro",
            add: " Agregar",
            back: "Regresar",
            bulk_action: "Un objeto seleccionado ||| %{smart_count} objetos seleccionados",
            cancel: "Cancelar",
            clear_array_input: "Limpiar la lista",
            clear_input_value: "Limpiar valor",
            clone: "Clonar",
            confirm: "Confirmar",
            create: "Crear",
            create_item: "Crear %{item}",
            delete: "Eliminar",
            edit: "Editar",
            export: " Exportar",
            list: "Lista",
            refresh: "Actualizar",
            remove_filter: "Quitar filtro",
            remove_all_filters: "Quitar todos los filtros",
            save: "Guardar",
            search: "Buscar",
            show: "Mostrar",
            sort: "Ordenar",
            undo: "Deshacer",
        },

        auth: {
            username: "Usuario",
            password:"Contraseña",
            sign_in: "Iniciar sesión",
            sign_in_error: "Error de autenticación",
            check_error: "La sesión ha expirado",
            auth_check_error: "La sesión no es válida",
        },

        page: {
            create: "Crear %{name}",
            dashboard: "Inicio",
            edit: "%{name} #%{id}",
            error: "Ocurrió un error",
            list: "%{name}",
            loading: "Cargando",
            not_found: "No encontrado",
            show: "%{name} #%{id}",
            empty: "No hay resultados",
        },

        navigation: {
            no_results: "No se encontraron resultados",
            no_more_results: "No hay más resultados",
            page_out_of_boundaries: "Página fuera de rango",
            page_out_from_end: "No se puede ir después de la última página",
            page_out_from_begin: "No se puede ir antes de la primera página",
            page_range_info: "%{offsetBegin}-%{offsetEnd} de %{total}",
            partial_page_range_info: "%{offsetBegin}-%{offsetEnd} de más de %{offsetEnd}",
            current_page: "Página %{page}",
            page_rows_per_page: "Filas por página",
            skip_nav: "Saltar al contenido",
        },

        message: {
            yes: "Sí",
            no: "No",
            are_you_sure: "¿Estás seguro?",
            about: "Acerca de",
            not_found: "La página no fue encontrada",
            error: "Ocurrió un error",
            invalid_form: "El formulario no es válido",
            delete_title: "Eliminar %{name} #%{id}",
            delete_content: "¿Seguro que deseas eliminar este elemento?",
            bulk_delete_title:
                "Eliminar %{smart_count} elemento |||| Eliminar %{smart_count} elementos",
            bulk_delete_content:
                "¿Seguro que deseas eliminar este elemento? |||| ¿Seguro que deseas eliminar estos %{smart_count} elementos?",
        },

        input: {
            file: {
                upload_several:
                    "Arrastra archivos aquí o haz clic para seleccionar.",
                upload_single:
                    "Arrastra un archivo aquí o haz clic para seleccionar.",
            },

            image: {
                upload_several:
                    "Arrastra imágenes aquí o haz clic para seleccionar.",
                upload_single:
                    "Arrastra una imagen aquí o haz clic para seleccionar.",
            },

            references: {
                all_missing: "No se encontraron referencias",
                many_missing: "Algunas referencias no están disponibles",
                single_missing: "La referencia no está disponible",
            },
        },

        notification: {
            updated: "Elemento actualizado |||| %{smart_count} elementos actualizados",
            created: "Elemento creado",
            deleted: "Elemento eliminado |||| %{smart_count} elementos eliminados",
            bad_item: "Elemento incorrecto",
            item_doesnt_exist: "El elemento no existe",
            http_error: "Error de comunicación con el servidor",
            data_provider_error:"Error del proveedor de datos. Revisa la consola.",
            i18n_error: "No se pudieron cargar las traducciones",
            canceled: "Acción cancelada",
            logged_out: "Tu sesión terminó",
        },

        validation: {
            required: "Obligatorio",
            minLength: "Debe tener al menos %{min} caracteres",
            maxLength: "Debe tener %{max} caracteres o menos",
            minValue: "Debe ser al menos %{min}",
            maxValue: "Debe ser %{max} o menos",
            number: "Debe ser un número",
            email: "Debe ser un correo válido",
            oneOf: "Debe ser uno de: %{options}",
            regex: "Debe coincidir con el formato %{pattern}",
        },
    },

    resources: {
        users: {
            name: "Usuario |||| Usuarios",
            fields: {
                id: "ID",
                name: "Nombre",
                username: "Usuario",
                email: "Correo",
                "address.street": "Dirección",
                phone: "Teléfono",
                website: "Sitio web",
                "company.name": "Empresa",
            },
        },

        posts: {
            name: "Publicación |||| Publicaciones",
            fields: {
                id: "ID",
                userId: "Usuario",
                title: "Título",
                body: "Contenido",
            },
        },

        albums: {
            name: "Álbum |||| Álbumes",
            fields: {
                id: "ID",
                userId: "Usuario",
                title: "Título",
            },
        },

        comments: {
            name: "Comentario |||| Comentarios",
            fields: {
                id: "ID",
                postId: "Publicación",
                name: "Nombre",
                email: "Correo",
                body: "Comentario",
            },
        },

        photos: {
            name: "Foto |||| Fotos",
            fields: {
                id: "ID",
                albumId: "Álbum",
                title: "Título",
                url: "URL",
                thumbnailUrl: "Miniatura",
            },
        },

        todos: {
            name: "Tarea |||| Tareas",
            fields: {
                id: "ID",
                userId: "Usuario",
                title: "Título",
                completed: "Completo",
            },
        },

        
    },
};
