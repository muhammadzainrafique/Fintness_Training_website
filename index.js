document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('button');
    button.addEventListener('click',()=>{
        let weight = document.querySelector('#weight').value;
        let height = document.querySelector('#height').value;
        let result = document.querySelector('#result');
        result.value =(+weight/((+height)**2)).toFixed(2)
    })

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
            // else{
            //     entry.target.classList.remove('show');
            // }
        })
    })
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=> observer.observe(el));
   
});
