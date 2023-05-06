import { FormEvent, useRef } from 'react'
import { HStack, Icon, NumberInput, NumberInputField, Text } from '@chakra-ui/react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useDirectionContext } from 'contexts/directionContext'



type PaginationProps = {
  page : number , 
  pages : number , 
  setPage : any
}

const Pagination = (
  {
    page , 
    pages , 
    setPage
  }:PaginationProps
) => {
  const pageRef = useRef<any>(null)
  const { dir } = useDirectionContext()

  const handleChangePage = (e:FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    setPage(pageRef.current.value)
  }
  
  return (
    <HStack
      gap={10}
    >
      <Icon 
        as={(dir==="ltr") ?   AiOutlineLeft : AiOutlineRight }
        cursor={"pointer"}
        onClick={()=>setPage(page-1)}
      />
      <form
        onSubmit={handleChangePage}
      >
        <NumberInput 
          variant="primary"
          
          
        >
          <NumberInputField 
            w={100}
            ref={pageRef}
            h={"40px"}
            mx={5}
            borderRadius="md"
            borderColor={"primary.500"}
            border="2px solid "
            name="page"
          />
    
          </NumberInput>
        
      </form>
      <Text>
        {`page ${page} of /${pages}`}
      </Text>

      <Icon 
        as={(dir==="ltr") ? AiOutlineRight : AiOutlineLeft}
        cursor="pointer"
        onClick={()=>setPage(page+1)}
      />

    </HStack>
  )
}


export default Pagination