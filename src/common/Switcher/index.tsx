import If from "common/If";
import { useDirectionContext } from "contexts/directionContext";
import { PropsWithChildren } from "react";

interface Props {
  Left: any;
  Right?: any;
  style?: any
}

const Switcher = ({children , Left , Right ,  style ={}}: PropsWithChildren<Props>) => {
    const { dir } = useDirectionContext()



    return(
        <>
        <If condition={dir==="rtl"}
            otherwise={
                <Left
                {...style}
            >
                {
                    children
                }
            </Left>
            }
        
        >
            
            <Right
                    {...style}
                >
                    {
                        children
                    }
                </Right>
            
        </If>
        
        </>
    )
    
};

export default Switcher;
