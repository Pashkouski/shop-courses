import s from './Sidebar.module.css'

import {SidebarProps} from "@/component/Layout/Sidebar/Sidebar.props";


export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    )
}