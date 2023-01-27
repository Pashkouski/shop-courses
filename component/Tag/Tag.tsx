import s from './Tag.module.css'
import cn from 'classnames'
import {TagProps} from "@/component/Tag/Tag.props";


export const Tag = ({size = "m", children, color="ghost", className, href, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(s.tag, className, {
            [s.s]: size === 's',
            [s.m]: size === 'm',
            [s.ghost]: color === "ghost",
            [s.red]: color === 'red',
            [s.grey]: color === 'grey',
            [s.green]: color === 'green',
            [s.primary]: color === 'primary'
        })}
             {...props}
        >{
            href
                ? <a href={href}>{children}</a>
                : <>{children}</>
        }
        </div>
    )
}