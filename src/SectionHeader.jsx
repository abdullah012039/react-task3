import style from './Card-style.module.css'
const SectionHeader = ({children}) => {
    return (
        <header className={style.headerPage}>
            {children}
        </header>
    )
}

export default SectionHeader