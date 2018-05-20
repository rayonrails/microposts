import { http } from './http';
import { ui } from './ui';

// Get Posts on DOM Load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enab;

// Get Post
function getPosts(){
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

// Add post
function submitPost(){
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title,
    body
  }

  // Create Post
  http.post('http://localhost:3000/posts', data)
    .then(data => {
      ui.showAlert('Post Added', 'alert alert-success');
      ui.clearFields();
      getPosts();
    })
    .catch(err => console.log(err));
}

//Enable Edit State

function enableEdit(e){
  console.log(e.target)

  e.preventDefault();
}