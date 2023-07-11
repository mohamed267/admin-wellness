import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Stack } from '@chakra-ui/react'
import { useDirection } from 'hooks/useDirection'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import EventTownForm from '../../components/EventTownForm'

const NewTown = () => {
    const  {dir } = useDirection()
    return (
        <Stack py='30px' >
        <Breadcrumb spacing='8px' separator={ dir==="rtl" ? <BiChevronLeft color='gray.500' /> :  <BiChevronRight color='gray.500' />}>
            <BreadcrumbItem color="primary.500" textTransform="capitalize"   fontSize="md" >
                <BreadcrumbLink >
                    <Link to="/events">
                        <FormattedMessage id="events" />
                    </Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage color="primary.500" > 
                <FormattedMessage id="addCity" />
            </BreadcrumbItem>
        </Breadcrumb>

        {/* form event creation  */}
        <EventTownForm  />

    </Stack>
    )
}


export default NewTown