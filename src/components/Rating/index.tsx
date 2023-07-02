import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, HStack, Input, Text } from '@chakra-ui/react'
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs'
import { number } from 'zod'
import If from 'common/If'
import { useDirectionContext } from 'contexts/directionContext'
import { UseFormRegisterReturn } from 'react-hook-form/dist/types'

type RatingProps = {
    registration?: Partial<UseFormRegisterReturn> | null,
    value: number,
    numberStars?: number,
    changeable?: boolean , 
    setValue?: any,
    name?: string
}

const Rating = ({ value , numberStars = 5 , changeable=false , registration = null,  setValue=null , name="" }: RatingProps) => {
    const { dir } = useDirectionContext()
    const [stars ,setStars] =  useState<number[]>([]);
    const [starsValue , setStarsValue ]  =  useState<number>(0);


    useEffect( ()=>{
        const snapStars = []
        if(changeable){
            setValue(name , starsValue)
        }
        let snapValue =  starsValue;
        for(var  i=0 ; i<numberStars ; i++){
            console.log(`our ${i} ${value}`)
            if(snapValue<=0){
                snapStars.push(0)
            }

            if(snapValue >= 1){
                snapStars.push(1)
            }
            if(snapValue > 0  && snapValue < 1){
                snapStars.push(0.5)
            }

            snapValue = snapValue -  1;
        }
        
        setStars(snapStars)
    }, [starsValue])


    useEffect(()=>{
        setStarsValue(value)
       
    } , [value , numberStars])

    const handleRatingChange = (stars: number) =>{
        setStarsValue(stars)
        
    }


    return (
        <HStack  dir="ltr">
            {
                stars.map((number : number, key:any)=>{
                    return (
                        <Box 
                            // transform={`rotateY(${dir==="rtl" ? 180: 0 }deg)`} 
                            color="yellow.500"
                            onClick={()=>{handleRatingChange(key + 1)}}
                            // color="red"
                        >
                            <If condition={number===0} >
                                <BsStar fontSize={"20px"}  key={key} />
                            </If>
                            <If condition={number===1} >
                                <BsStarFill  fontSize={"20px"}  key={key} />
                            </If>
                            <If condition={number===0.5} >
                                <BsStarHalf fontSize={"20px"}  key={key} />
                            </If>
                        
                        </Box>
                    )
                })
            }
        
        </HStack>
    )
}

Rating.propTypes = {}

export default Rating