import { useState } from 'react'


function App() {

  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [comments, setComments] = useState([])

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      data: new Date()
    }

    setComments((state) => ([newComment, ...state]))
    setAuthor('')
    setContent('')
  }

  return (
    <>
      <div className="container">
        <h3>Seção de Comentários</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="author">Email</label>
          <input type="text"
            id='author'
            name='email'
            value={author}
            onChange={(ev) => setAuthor(ev.target.value)}
            required />
          <label htmlFor="content">Comentário</label>
          <textarea name="content"
            id="content"
            required cols='30'
            rows='6'
            value={content}
            onChange={(ev) => setContent(ev.target.value)}
          ></textarea>
          <button type='submit'>Enviar</button>
        </form>
        <hr />
        <div>
          {comments.length > 0 
            ? (
              comments.map((comment) => 
              (
                <div key={comment.id}>
                  <h3>{comment.author}</h3>
                  <span>Em {comment.data.toLocaleString()}</span>
                  <p>{comment.content}</p>
                </div>
              ))
            )
          : "seja o primeiro a comentar!"}
        </div>
      </div>
    </>
  )
}

export default App
