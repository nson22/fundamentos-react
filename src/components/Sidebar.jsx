import styles from './Sidebar.module.css'

import { PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';


export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img 
				className={styles.cover}
				src='https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=40' />
			<div className={styles.profile}>
				<Avatar src="https://github.com/nson22.png" />
				<strong>Glecinilson Silva</strong>
				<span>React dev</span>
			</div>
			
			<footer>
				<a href='#'>
					<PencilLine
						size={20}
					/>
					Editar perfil
				</a>
			</footer>
		</aside>
	)
}