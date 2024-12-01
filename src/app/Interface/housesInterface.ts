export interface house{
    id: number;
    name: string;
    description: string;
    shortDescription: string;
    features: string[];
    images: {
        url: string;
        alt: string;
    }[];// imagenes lo compusimos de un arreglo para que consuma las imagenes internamente desde este arreglo

    location: {
        address: string;
        coordinates: {
        lat: number;
        lng: number;
        };//lo usaremos para la apliacion de google maps
    };
}