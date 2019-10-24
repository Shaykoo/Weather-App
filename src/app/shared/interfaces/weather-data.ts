// this is the actual object we get from the response of the API
// All we nedd to transform this so our component can easily read
// and we will get that from the service we created
export interface WeatherData{
    weather:[
        {
            description:string
            icon: string
        }
    ];
    main:{
        temp: number
    };
    sys:{
        country: string
    };
    coord:{
        lon: number,
        lat: number
    };
    name: string;
}