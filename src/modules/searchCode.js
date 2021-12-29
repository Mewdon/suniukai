import ajaxService from "./ajaxService";

const searchCode = ()=>{
    document.querySelector('form').addEventListener('submit',(e)=> {
        e.preventDefault() //keiciama standartine formos elgsena
        const searchTerm = document.querySelector('.term').value;
        let searchResponce;
        ajaxService(searchTerm)

            .then(result => searchResponce = result)
            .then(() => console.log(searchResponce.message[0]))
            .then(() => document.querySelector('.result').value = searchResponce.message[0])

    })


}

export default searchCode

/*
* .then(()=>console.log(searchResponce.data[0].post_code))
            .then(()=>document.querySelector('.result').value =searchResponce.data[0].post_code)
* */