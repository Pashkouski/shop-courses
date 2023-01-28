import {LayoutProps} from "@/component/Layout/Layout.props";
import {Header} from "@/component/Layout/Header/Header";
import {Footer} from "@/component/Layout/Footer/Footer";
import {Sidebar} from "@/component/Layout/Sidebar/Sidebar";
import {FunctionComponent} from "react";


const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div>
            <Header></Header>
            <div>
                <Sidebar></Sidebar>
                <div>
                    {children}
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return  (
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    }
}

