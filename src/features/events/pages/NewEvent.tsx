import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Stack } from "@chakra-ui/react"
import Form from "components/form/Form"
import { useDirection } from "hooks/useDirection"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { FormattedMessage } from "react-intl"
import { Link } from "react-router-dom"
import EventForm from "../components/EventForm"

const NewEvent = () => {
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
              <FormattedMessage id="newEvent" />
          </BreadcrumbItem>
      </Breadcrumb>

      {/* form event creation  */}
      <EventForm />
      

    </Stack>
  )
}

NewEvent.propTypes = {}

export default NewEvent