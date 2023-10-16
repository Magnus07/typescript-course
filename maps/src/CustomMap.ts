
export interface Mappable {
    location:{
        lat:number;
        lng:number
    },
    markerContent():string
}

export class CustomMap {
    private map: google.maps.Map;

    constructor(divID:string){
        this.map = new google.maps.Map(document.getElementById(divID) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.map,
            position: mappable.location
        })

        marker.addListener('click',()=>{
            const infoWindow = new google.maps.InfoWindow({content:mappable.markerContent()})
            infoWindow.open({map:this.map,anchor:marker})
        })
    }
}