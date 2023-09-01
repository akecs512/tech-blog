


async function newFormHandler(event) {
  event.preventDefault();
  const blogTitle = document.querySelector('#blog-title').value;
  const blogDescription = document.querySelector('#blog-description').value.trim();
  
  // Send post request to add a new tavel information
  let response = await fetch(`/api/tech`, {
    method: 'POST',
    body: JSON.stringify({
      blog_title: blogTitle,
      blog_description: blogDescription

    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if techblog is added, the 'all' template will be rerendered
  if (response.ok) {
    window.location.replace('/techblog');
  } else {
    alert('Failed to add comment');
  }
}

const formElement = document.querySelector('.new-post-form');
if (formElement) {
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
} 

