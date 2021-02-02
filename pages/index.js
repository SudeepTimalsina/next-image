import Image from "next/image";

const Index = () => {
    
    return (
        <>
            <div className="container">
                <Image src={`https://picsum.photos/200/300?random=1`} width="400" height="400" />
            </div>
         <style jsx>
             {`
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 50px;
                }
             `}
         </style>   
        </>
    );
}

export default Index;