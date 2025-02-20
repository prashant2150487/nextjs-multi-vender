



export async function POST(request){
    try{
        const {title,couponCode,expiry,description}=await request.jason();

    }catch(err){
        console.log(err)
    }
}