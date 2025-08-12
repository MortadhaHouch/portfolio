export default async function fetchData(url:string){
    try {
        const request = await fetch(url,{
            method:"GET"
        });
        const response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}