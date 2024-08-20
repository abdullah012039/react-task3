import style from './Sectionbody.module.css';
const Sectionbody = ({children}) => {
    return (
        <div className={style.SectionBody}>
            {children}
        </div>
    );
}

export default Sectionbody