import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import imagetest from"../images/imagetest.jpg";

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
          
          if(!res.status === 200 ||!data){
              const error = new Error(res.error);
              throw error;
          }
        } catch(err){
            console.log(err);    
            history.push("/signin");
        }
    }
    useEffect(() => {
        //callGalleryPage();
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getImages = async () =>{
        const response = await fetch("api.unsplash.com/search/photos?query=landscapes&client_id=Isl0H6YfmIXs0oi3jKwYzESEOr3Rj8ZrtoVC8ArgnIU");
        const data = await response.json();
        console.log(data);
    }
    useEffect(()=>{
        getImages();
    })
    
    return (
    <>
        <div className="container-fluid gallery_container bg-warning" >
            <img className="img_sizes" src={imagetest} alt="landscapes" />
        </div>
    </>
    )
}

export default Gallery;
