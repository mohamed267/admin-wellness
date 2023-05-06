import React from 'react'
import PropTypes from 'prop-types'
import HCollapse from 'common/Transitions/HorizentalCollapse'
import { IconButton, Input, InputGroup, InputLeftElement, InputRightElement, useDisclosure } from '@chakra-ui/react'
import Switcher from 'common/Switcher'
import { BsSearch } from 'react-icons/bs'
import { useIntl } from 'react-intl'

type SearchBarProps = {
    width?: number | string,
    placeholder?: string
}


const SearchBar = ({ width = "60%" , placeholder="" } : SearchBarProps) => {
    const int1 =  useIntl()
    const { getButtonProps, isOpen, onOpen: onSearchFocus, onClose: onSearchClose  } = useDisclosure()
    return (
        <HCollapse width={width} hiddenWidth={"100px"}  isOpen={true} >
            <InputGroup
                bg='white'
                borderRadius="3xl"
                overflow={"hidden"}
                variant="search"
                h='50px'
                position={"relative"}
                boxShadow="-1px 5px 11px 1px #ddd9d9"
            >
                
                <Switcher 
                    Left={InputRightElement} 
                    Right={InputLeftElement}
                    style={{
                        w: "50px",
                        h: "100%",
                    }}
                >
                    <IconButton
                        aria-label='search product' 
                        variant={"whiteFill"}
                        icon={<BsSearch />}
                        borderRadius="xl"
                        fontSize={"xl"}
                        h="100%"
                        w="100%"
                        {...getButtonProps()}
                    />

                </Switcher>
                <Input 
                    ps="50px" 
                    borderRadius="xl" 
                    h="100%"  
                    onFocus={onSearchFocus} 
                    onBlur={onSearchClose} 
                    placeholder={
                        placeholder ? int1.formatMessage({id: placeholder}) : ""
                    }                
                />
            </InputGroup>
        </HCollapse>
    )
}


export default  SearchBar