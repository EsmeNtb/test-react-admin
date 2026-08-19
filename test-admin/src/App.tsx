
import { Admin, Resource} from 'react-admin';
import { dataProvider } from './dataProvider';
import {UserList} from './users';
import {PostList} from './posts';
import {AlbumList} from './albums';
import {CommentList} from './comments';
import {PhotoList} from './photos';
import {TodosList} from './todos';


export const App = () => (
    <Admin 
        dataProvider={dataProvider}
    >
        <Resource name="users" list={UserList}/>
        <Resource name="posts" list={PostList}/>
        <Resource name="albums" list={AlbumList}/>
        <Resource name="comments" list={CommentList}/>
        <Resource name="photos" list={PhotoList}/>
        <Resource name="todos" list={TodosList}/>

    </Admin>
);

