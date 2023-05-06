export const handleDir = (props: any , dir: string) =>{
    const obj:any = {}; 
    Object.keys(props).map((key:string)=>{
        if(key==="start"){
            console.log("our direction is  ", dir)
            
            if(dir === "ltr"){
                obj["left"] = props[key]
            }
            if(dir === "rtl"){
                obj["right"] = props[key]
            }
        }

        if(key==="end"){
            if(dir === "ltr"){
                obj["right"] = props[key]
            }
            if(dir === "rtl"){
                obj["left"] = props[key]
            }
        }

    })


    console.log("ourobj is  ", obj)

    return obj
    
}