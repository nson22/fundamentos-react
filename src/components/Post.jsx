import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post (){
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src="https://github.com/maykbrito.png" />
				
					<div className={styles.authorInfo}>
						<strong>Glecinilson Silva</strong>
						<span>React Dev</span>
					</div>
				</div>

				<time title='11 de maio às 08:00:00' dateTime='2022-05-11 08:00:00'>Publicado há 1h</time>
			</header>
			<div className={styles.content}>
				<p>Lorem, ipsum dolor</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<p><a href="#">Glecinilson Silva</a></p>
				<p>
					<a href="#">#TAGS</a> {' '}
					<a href="#">#TAGS</a> {' '}
					<a href="#">#TAGS</a> {' '}
				</p>
			</div>
			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea 
					placeholder='Deixe um comentario'
				/>
				<footer>
					<button type='submit'>Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	)
}