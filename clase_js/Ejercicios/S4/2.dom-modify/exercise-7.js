let $ps = document.querySelectorAll("p");

for (const $p of $ps) {

    if($p.classList.contains("fn-remove-me")){
        $p.remove();
    }
    
}