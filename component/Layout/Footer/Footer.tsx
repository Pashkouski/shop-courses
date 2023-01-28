import s from './Footer.module.css'
import {HeaderProps} from "@/component/Layout/Header/Header.props";
import {format} from 'date-fns'

export const Footer = ({className,...props}: HeaderProps): JSX.Element => {
    return (
        <footer className={`${className} ${s.footer}`}
            {...props}>
            <div>
                OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <a href="#" target='_blank'>Пользовательское соглашение</a>
            <a href="#" target='_blank'>Политика конфиденциальности</a>
        </footer>
    )
}