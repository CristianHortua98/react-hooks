import { useEffect, useState } from "react";

export const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {

    const [light, setLight] = useState<TrafficLightColor>('red');
    const [countdown, setCountdown] = useState(5);


    //Importante tener cuidado con el useEffect debido a que se ejecutara segun la dependencia que tenga, 
    //en este caso cada vez que se actualiza el countdown se ejecuta y si no se limpia el setInterval puede ser un gran problema.
    useEffect(() => {

        if(countdown === 0){
            return;
        }

        console.log({countdown})

        const intervalId = setInterval(() => {
            console.log(`setInterval llamado`);
            setCountdown(prev => prev - 1);
        }, 1000);

        return () => {
            console.log('Cleanup effect')
            clearInterval(intervalId);
        }


    }, [countdown]);


    //Change light collor effect
    useEffect(() => {

        if(countdown > 0){
            return;
        }

        setCountdown(5);
            
        if(light === 'red'){
            setLight('green');
            return;
        }
        
        if(light === 'yellow'){
            setLight('red');
            return;
        }
        
        if(light === 'green'){
            setLight('yellow');
            return;
        }

    }, [countdown, light]);


    return {

        //propeties
        light,
        countdown,
        colors,

        //computed
        percentage: (countdown/5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',


        //methos
    }

}