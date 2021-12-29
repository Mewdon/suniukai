const ajaxService = (term)=>{
    const url = 'https://dog.ceo/api/breed/';

    return fetch(`${url}${term}/images`)
        .then(responce =>responce.json())
}

export default ajaxService