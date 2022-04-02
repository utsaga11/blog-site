import { useState } from "react";
import {db, firestore} from '../firebase';
import {useFormInput} from '../hooks';

function CreatePost() {
 const [title, setTitle] = useState();
 const [subtitle, setsubTitle] = useState();
 const [content, setContent] = useState();

  // const title =useFormInput('');
  // const subtitle =useFormInput('');
  // const content =useFormInput('');

  function handleSubmit(e){
    e.preventDefault();

    console.log('title',title);
    console.log('subtitle',subtitle);
    console.log('content',content);
   
    db.collection('posts').add({
     title,
     content,
     subtitle,
     createdAt: new Date(),
    });
  }
  
    return (
      <div className="create-post">
       <h1>Create Post</h1>
       <form onSubmit={handleSubmit}>
         <div className="form-field">
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required/>
         </div>
         <div className="form-field">
          <label>Sub Title</label>
          <input value={subtitle} onChange={(e) => setsubTitle(e.target.value)} required/>
         </div>
         <div className="form-field">
          <label>Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
         </div>
         <button className="create-post-btn">Create Post</button>
       </form>
      </div>
    );
  }
  
  export default CreatePost;
  