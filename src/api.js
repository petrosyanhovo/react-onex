import axios from "axios"

const getShops = async() => {
    const response = await fetch( 'http://localhost:3000/shops' )
    return response.json();
  }


export {getShops}