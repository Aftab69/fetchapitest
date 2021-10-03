import React, {useEffect, useState} from 'react';
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
    
    const [users, setUsers] = useState([]);
    const getImages = async () =>{
        const response = await fetch("https://api.unsplash.com/collections/1364150/photos?client_id=Isl0H6YfmIXs0oi3jKwYzESEOr3Rj8ZrtoVC8ArgnIU");
        setUsers(await response.json());
    }
    useEffect(()=>{
        getImages();
    },[]);
    
    return (
    <>
        {
            users.map((curElem)=>{
               return(
                   <>
                    <div className="container-fluid gallery_container bg-warning" >
                       <img className="img_sizes" src={curElem.urls.raw} alt={curElem.description} />
                    </div>
                   </>
               )
            })
        }
        
    </>
    )
}

export default Gallery;
