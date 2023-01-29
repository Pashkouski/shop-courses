import React, {useState} from 'react'
import {Button, Htag, P, Rating, Tag, withLayout} from '../component'
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "@/interfaces/menu.interface";
import {string} from "prop-types";



function Home({ menu }:HomeProps): JSX.Element {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rating, setRating] = useState(0)

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
                <Rating rating={rating} isEditable setRating={setRating}/>
                <ul>
                    {menu.map( el => (<li key={el._id.secondCategory}>{el._id.secondCategory}</li>))}
                </ul>
        </>
    )
}


// @ts-ignore
export default withLayout(Home)



export const getStaticProps: GetStaticProps<HomeProps > = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });

    return {
        props: {
            menu,
            firstCategory
        }
    }
}

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[]
    firstCategory: number
}