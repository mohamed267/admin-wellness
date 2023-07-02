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


