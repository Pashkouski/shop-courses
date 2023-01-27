import React from 'react'
import {Button, Htag} from '../component'

export default function home(): JSX.Element {
    return (
        <>
            <Htag tag='h1' > Text </Htag>
            <Button appearance='primary' arrow='right'> Click </Button>
            <Button appearance='ghost' arrow='down'> Click </Button>
        </>
    )
}