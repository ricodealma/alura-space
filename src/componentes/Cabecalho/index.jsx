import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'

export default function Cabecalho() {
    return(
        <header className={styles.cabecalho} >
            <img src={logo} alt="Logo do Alura Space" />
            <div className={styles.cabecalho__container} >
                <input className={styles.cabecalho__input} placeholder="o que você procura ?" type="text" />
                <img src={search} alt="Ícone de Lupa" />
            </div>
        </header>
    )    
}