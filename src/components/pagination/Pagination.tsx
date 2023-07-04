import { FormEvent, useRef } from 'react'
import { Button, HStack, Icon, IconButton, NumberInput, NumberInputField, Text } from '@chakra-ui/react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useDirectionContext } from 'contexts/directionContext'
import If from 'common/If'
import Page from './Page'



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
      gap={"5px"}
    >
     
      <IconButton 
        aria-label='previous icon'
        variant="whiteFill"
        icon={
          <Icon 
            as={(dir==="ltr") ?   AiOutlineLeft : AiOutlineRight }
            cursor={"pointer"}
            onClick={()=>setPage(page-1)}
          />
        }
      />


      <If condition={page - 2  > 1  } >
        <>
          <Page 
            setPage={setPage}
            offsetPage={1}
            page={page}
          />

          <IconButton 
              aria-label={`page ${1} `}
              variant="whiteFill"
              icon={
                <Text>
                  ...
                </Text>
              }
          />
          {
            [page , page+1 , page+2].map((offsetPage: number , key: any)=>(
              <If condition={offsetPage <= pages} >
                <Page 
                  setPage={setPage}
                  offsetPage={offsetPage}
                  page={page}
                />
              </If>
            ))
          }
        
        </>
      </If>


      <If condition={page - 2  <= 1  } >
        <>
          {
            [1 , 2 , 3].map((offsetPage: number , key: any)=>(
              <If condition={offsetPage<= pages} >
                <Page 
                    setPage={setPage}
                    offsetPage={offsetPage}
                    page={page}
                />
              </If>
            
            ))
          }
        
        </>
      </If>

      

      <If condition={(page + 2  < pages ||  page - 2  <= 1) && (pages > 3)} >
        <>
        <IconButton 
              aria-label={`page ${1} `}
              variant="whiteFill"
              icon={
                <Text>
                  ...
                </Text>
              }
          />
          <Page 
            setPage={setPage}
            offsetPage={pages}
            page={page}
          />

        
        
        </>
      </If>

      

      <IconButton 
        aria-label='next page icon'
        variant="whiteFill"
        icon={
          <Icon 
                  as={(dir==="ltr") ? AiOutlineRight : AiOutlineLeft}
                  cursor="pointer"
                  onClick={()=>setPage(page+1)}
                />
        }
        />

    </HStack>
  )
}


export default Pagination