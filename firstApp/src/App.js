import React, { useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Дизайн iPhone 15', body: 'Сильнее всего от iPhone 14 будут отличаться базовые модели. Именно iPhone 15 и 15 Plus получат Dynamic Island, который вы уже видели в iPhone 14 Pro и 14 Pro Max.' },
        { id: 2, title: 'Дизайн iPhone 15', body: '«Прошкам» тоже достанется: рамки дисплея уменьшатся до 1,5 мм со всех сторон. Apple постепенно идёт к отказу от рамок, а это шаг на пути к цели. К слову, пока ни у какого смартфона нет таких узких рамок. ' },
        { id: 3, title: 'Дизайн iPhone 15', body: 'Ещё мы ожидаем, что задняя панель всех iPhone 15 будет слегка загнутой. Аналогичную фишку уже применила Nothing в своём Phone (2)' },
        { id: 4, title: 'Цвета iPhone 15', body: 'Пока нет информации, какие цвета будут представлены. Ходят слухи, что «прошки» получат глубокий красный, а базовые версии — насыщенные розовый и голубой цвета, как на рендере MacRumors выше. Но информация о них была очень давно.' },
    ])

    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // Получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)} >
                Добавить пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты' />
        </div>
    )
}

export default App;