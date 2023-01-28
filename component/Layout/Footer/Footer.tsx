import s from './Footer.module.css'
import {HeaderProps} from "@/component/Layout/Header/Header.props";


export const Footer = ({...props}: HeaderProps): JSX.Element => {
    return (
        <div {...props}>
            Footer
        </div>
    )
}