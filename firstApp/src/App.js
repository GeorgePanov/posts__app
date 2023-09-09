import React, { useEffect, useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // Получаем посты
    async function fetchPosts() {
        const post = await PostService.getAll();
        setPosts(post)
    }

    // Получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    useEffect(() => {
        fetchPosts()
    }, [])

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