import React, {useContext, useState}from 'react'
import { v4 as uuidv4 } from 'uuid';
import './Home.css'
import HomeContext from '../context/context'

function Home() {

    const {posts , setPosts} = useContext(HomeContext)

    const [addbutton , setAddButton] = useState(false)
    const [title , setTitle] = useState("");
    const [newpost , setNewPost] = useState("");
    const [postid , setPostId] = useState("");
    const handlePost = (e) =>{
        e.preventDefault();
        if(!postid){
        const letestPost = {title:title,post:newpost,id:uuidv4()}
        setPosts([...posts,letestPost])
        setTitle("");
        setNewPost("")
        setAddButton(false);
        }else{
            const letestPost = {id:postid, title:title,post:newpost,}
            const allPost = posts.filter(post => post.id !== postid);

        setPosts([...allPost,letestPost])
        setAddButton(false);
        }
        
    }
    const editPost = (e) => {
        const id = e.target.id;
        setPostId(id);
        const findpost = posts.filter(item => item.id === id );

        setTitle(findpost[0].title);
        setNewPost(findpost[0].post);
        setAddButton(true);
        console.log(postid);
    }

    const deletePost = (e) => {
        setPosts(posts.filter(post => post.id !== e.target.id))
    }

    return (
        <>
            <div className='home'>
                <div className="profile">
                    <img src="/images/logo.png" alt="/" />
                    <h1>Name</h1>
                </div>

                <div className="allpost">
                    <div className="addpost">
                        <button onClick={()=>setAddButton(true)}>Add New Post</button>
                        {
                            addbutton?(<form>
                            <label htmlFor='title'>Title</label>:<br />
                            <input type="text" id='title' value={title} onChange={(e)=> setTitle(e.target.value)}/><br />
                            <label htmlFor="post">Post</label>: <br />
                            <textarea name="" id="" cols="40" rows="10" value={newpost} onChange={(e)=>setNewPost(e.target.value)}></textarea><br />
                            <button onClick={handlePost}>Add Post</button>
                        </form>):("")
                        }
                        
                    </div>
                    <h1>Show Posts</h1>
                    <div className="showpost">
                    
                        {
                            posts.map(post => <div className='single_post' key={post.id}>
                                <h3>{post.title}</h3>
                                <div className='post-div'>
                                    {post.post}
                                </div>
                                <div className="buttons" id={post.id}>
                                <button id={post.id} onClick={deletePost}>Delete</button>
                                <button id={post.id} onClick={editPost}>Edit</button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home