import React from 'react'
import {Button, Htag, P, Tag} from '../component'


export default function home(): JSX.Element {

    return (
        <>
            <Htag tag='h1'> Text </Htag>
            <Button appearance='primary' arrow='right'> Click </Button>
            <Button appearance='ghost' arrow='down'> Click </Button>
            <P size='s'> Маленький </P>
            <P size='m'> Средний </P>
            <P size='l'> Большой </P>
            <Tag size='s'> sdads </Tag>
            <Tag size='m'> sdads </Tag>
            <Tag size='m' color='red'> red </Tag>
            <Tag size='m' color='green'> green </Tag>
            <Tag size='m' color='primary'> ghost </Tag>
            <Tag size='m' color='ghost'> ghost </Tag>
            <Tag size='m' color='primary'> ghost </Tag>

        </>
    )
}