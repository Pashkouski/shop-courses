import s from './Header.module.css'
import {HeaderProps} from "@/component/Layout/Header/Header.props";


export const Header = ({...props}: HeaderProps): JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    )
}


