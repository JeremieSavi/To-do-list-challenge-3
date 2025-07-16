let input=document.getElementById('input_tache');
let btn_ajouter=document.querySelector('.btn_ajouter');
let listes_taches=document.querySelector('.liste_taches');


btn_ajouter.addEventListener('click',() => {
    if(input.value ===''){
        alert(' Veuillez entrer une tâche')
    }else{

    
    let nouvelle_tache=input.value.trim();
    let li=document.createElement('li');
    li.textContent=nouvelle_tache;

    let btn_supprimer=document.createElement('button');
    btn_supprimer.textContent="Supprimer";
    listes_taches.appendChild(li);
    li.appendChild(btn_supprimer);

    //Barer une tâche quand on clique dessus 
    li.addEventListener('click',function(){
        li.style.textDecoration="line-through";
        li.style.color="gray";
        
    })


    btn_supprimer.addEventListener('click',function(){
        listes_taches.removeChild(li)
    });
    input.value ="";

    }




    

})

