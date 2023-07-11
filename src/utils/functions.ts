export const defaultFn = ()=>{
    return 0;
}
export const getSocialMediaName = (url: string): string =>{
    if(url){
        const chunks = url.split("/");
        if(chunks[chunks.length - 1]){
            return chunks[chunks.length - 1]
        }else{
            return chunks[chunks.length - 2]
        }
    }
    return "";
}

export const reformulateFileSize = (size: number): {size: number , unit: string} =>{
    if (size < 10 ** 3){
        return {
            size: size,
            unit: "b"
        }
    }else {
        if (size < 10**6){
            return {
                size: Math.round(size / 10 **3),
                unit: "kb"
            }
        }
        else {
            if (size < 10 ** 9){
                return {
                    size: Math.round(size / 10 ** 6),
                    unit: "mb"
                }
            }else{
                return {
                    size: Math.round(size / 10 ** 9),
                    unit: "gb"
                }
            }
        }
    }
}


