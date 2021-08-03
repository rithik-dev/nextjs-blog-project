// noinspection JSUnusedGlobalSymbols

import React from "react";
import MainNavigation from "./main-navigation/main-navigation";

const Layout: React.FC = ({children}) => (
    <>
        <MainNavigation/>
        <main>{children}</main>
    </>
)

export default Layout;
