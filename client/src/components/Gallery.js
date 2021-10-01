import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const Gallery = () => {
    const history = useHistory(); 
    const callGalleryPage = async () => {
        try{
          const res = await fetch("/gallery",{
              method:"GET",
              headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
              },
              credentials: "include"
          });
          const data = await res.json();
          console.log(data);
          
          if(!res.status === 200){
              const error = new Error(res.error);
              throw error;
          }
        } catch(err){
            console.log(err);    
            history.push("/signin");
        }
    }
    useEffect(() => {
        callGalleryPage();
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
    <>
        <div>
            <p>Gallery page</p>
        </div>
    </>
    )
}

export default Gallery;
