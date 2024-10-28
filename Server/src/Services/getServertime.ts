export const getServertime = async () =>{
    const epochTime = Math.floor(Date.now() / 1000);
    return ({ epoch: epochTime }); 

}