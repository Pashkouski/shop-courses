import s from './Rating.module.css'
import cn from 'classnames'
import {RatingProps} from "@/component/Raiting/Rating.props";
import {useState} from "react";


export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    // const constructRating = (r: number) => {
    //     const updateArray = ratingArray.map()
    // }


    return (
        <div
           {...props}
        >

        </div>
    )
}