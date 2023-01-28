import React, {useState} from 'react'
import {Button, Htag, P, Rating, Tag, withLayout} from '../component'



function Home(): JSX.Element {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rating, setRating] = useState(0)

    return (
        <>
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
            </>
        </>
    )
}

export default withLayout(Home)