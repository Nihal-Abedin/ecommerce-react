import { useEffect, useState } from 'react';

export const useGetCountry = () => {
    const [country, setCountry] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const { latitude, longitude } = pos.coords;
                const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

                try{
                    const countryRes = await fetch(url);
                    if(!countryRes.ok) {
                        console.log("Here")
                        throw new Error('Something went wrong on https://nominatim.openstreetmap.org')
                    }
                    const {address} = await countryRes.json()
                    setCountry(address.country)
                } catch (err){
                    console.log(err)
                }
            },
            (err) => {
                console.log(err);
                setCountry('Bangladesh')
            }
        );
    }, []);

    return country;
};
