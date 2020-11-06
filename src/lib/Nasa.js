class Nasa{

    constructor(){
        this.URL = "https://api.nasa.gov/planetary/apod"
        this.API_KEY = "vhfbkYMTzBe0txwiTUatg1aMeEQVfvCsS4ECps1h"
    }

    //PASS A DATE AND GET API CONTENT
    makeCall = async (on_this_date) => {
        const API_CALL = await fetch(this.URL + "?api_key=" + this.API_KEY + "&date=" + on_this_date)
        return API_CALL.json()
    }

}

export default Nasa