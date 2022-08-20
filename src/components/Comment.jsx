import { ThumbsUp } from 'phosphor-react'
import { Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment(){
	return(
		<div className={styles.comment}>
			<Avatar  src="https://github.com/nson22.png" hasBorder={false} />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Glecinilson Silva</strong>
							<time title='11 de maio às 08:00:00' dateTime='2022-05-11 08:00:00'>Cerca 1h</time>
						</div>

						<button title='Deletar comentário'>
							<Trash size={24}/>
						</button>

					</header>
					
					<p>Comentario</p>
				</div>

				<footer>
					<button title='Dar um gostei'>
						<ThumbsUp size={20}/>
						Aplaudir <span>20</span>
					</button>
				</footer>

			</div>
		</div>
	)
}