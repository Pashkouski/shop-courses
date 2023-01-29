import {LayoutProps} from "@/component/Layout/Layout.props";
import {Header} from "@/component/Layout/Header/Header";
import {Footer} from "@/component/Layout/Footer/Footer";
import {Sidebar} from "@/component/Layout/Sidebar/Sidebar";
import {FunctionComponent} from "react";
import s from './Layout.module.css'


const Layout = ({children}: LayoutProps): JSX.Element => {
    return (

            <div className={s.wrapper}>
                <Header className={s.header}/>
                <Sidebar className={s.sidebar}/>
                <div className={s.body}>
                    {children}
                </div>
                <Footer className={s.footer}/>
            </div>

    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (

            <Layout>
                <Component {...props}/>
            </Layout>
        )
    }
}

