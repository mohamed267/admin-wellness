import If from "common/If";
import { useDirectionContext } from "contexts/directionContext";
import { useDirection } from "hooks/useDirection";
import { PropsWithChildren } from "react";

interface Props {
  Left: any;
  Right?: any;
  style?: any
}

const Switcher = ({children , Left , Right ,  style ={}}: PropsWithChildren<Props>) => {
    const { dir } = useDirection()



    return(
        <>
        <If condition={dir==="rtl"}
            otherwise={
                <Right
                {...style}
            >
                {
                    children
                }
            </Right>
            }
        
        >
            
            <Left
                    {...style}
                >
                    {
                        children
                    }
            </Left>
            
        </If>
        
        </>
    )
    
};

export default Switcher;
