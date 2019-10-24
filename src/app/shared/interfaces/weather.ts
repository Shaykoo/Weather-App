export interface Weather {
    name: string;
    country: string;
    image:string;
    description:string;
    temprature: number;
    lat?:number;                    // optional 
    lon?:number;                    // optional
}
