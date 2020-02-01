import React, {Fragment} from 'react';
import Search from "../user/Search";
import Users from "../user/Users";

export default function Home() {
    return (
        <Fragment>
            <Search />
            <Users/>
        </Fragment>
    )
}
