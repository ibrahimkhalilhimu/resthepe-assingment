import React, { useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
const containerStyle = {
    width: '100%',
    height: '400px'
};

const location = {
    lat: 23.733348, lng: 90.406707
};


function Direction({data}) {
    // const {pickup,recipient} =data;
    console.log(data);
    // const {pickup,recipient} = props.data;
    const [directionResponse, setDirectionResponse] = useState(null);
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyD--9wH195QOSLKuBZwoPlsqJIu1Knk7"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={16}
            >
               <DirectionsService
                    // required
                    options={{
                      destination:data,
                      origin: data,
                      travelMode: 'DRIVING'
                    }}
                    // required
                    callback={res => {
                        if(res !== null){
                          setDirectionResponse(res);
                        }
                    }}
                  />
                
          <DirectionsRenderer
                    // required
                    options={{ 
                      directions: directionResponse
                    }}
                    
                  />
              
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Direction)