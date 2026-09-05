
import { Admin, Resource} from 'react-admin';
import { dataProvider } from './dataProvider';
import {UserCreate, UserEdit, UserList, UserShow} from './users';
import {PostList, PostEdit, PostCreate, PostShow} from './posts';
import {AlbumList,AlbumEdit,AlbumCreate,AlbumShow} from './albums';
import {CommentList,CommentEdit,CommentCreate,CommentShow} from './comments';
import {PhotoList,PhotoEdit,PhotoCreate,PhotoShow} from './photos';
import {TodosList,TodosCreate,TodosEdit,TodosShow} from './todos';
import { Dashboard } from './Dashborad';
import {authProvider} from './authProvider'
import { I18nProvider } from './i18nProvider';

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import PhotoIcon from "@mui/icons-material/PhotoLibrary"
import CommentIcon from '@mui/icons-material/Comment';
import CollectionsIcon from '@mui/icons-material/Collections';
import PublicIcon from '@mui/icons-material/Public';
import { Layout } from './Layout';

import {lightTheme, darkTheme} from './theme';
export const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} theme={lightTheme} darkTheme={darkTheme} layout={Layout} i18nProvider={I18nProvider}>
        {/* show{showGuesser} */}
        <Resource name="users" list={UserList} show={UserShow} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
        <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        <Resource name="albums" list={AlbumList} show={AlbumShow} edit={AlbumEdit} create={AlbumCreate} icon={CollectionsIcon}/>
        <Resource name="comments" list={CommentList} show={CommentShow} edit={CommentEdit} create={CommentCreate} icon={CommentIcon}/>
        <Resource name="photos" list={PhotoList} show={PhotoShow} edit={PhotoEdit} create={PhotoCreate} icon={PhotoIcon}/>
        <Resource name="todos" list={TodosList} show={TodosShow} edit={TodosEdit} create={TodosCreate} icon={PublicIcon} />
    </Admin>
);


