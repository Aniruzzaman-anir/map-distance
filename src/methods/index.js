/* Code based on Google Map APIv3 Tutorials */




export function mapDistance({lat1, lat2,lon1, lon2})
{

    let radfactorval = 3.1459/180;
	let R = 6371; // km
	let dLat = (lat2-lat1)*radfactorval;
	let dLon = (lon2-lon1)*radfactorval; 
	let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	        Math.cos(lat1*radfactorval) * Math.cos(lat2*radfactorval) * 
	        Math.sin(dLon/2) * Math.sin(dLon/2); 
	let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	let d = R * c ;
    return d
}


