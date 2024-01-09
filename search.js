document.getElementById('input-field').addEventListener('input', function(){
    const input = document.getElementById('input-field');
    const searchValue = input.value.toLowerCase();
    
    const li = document.querySelectorAll('li');
    li.forEach(l => {
        let text = l.textContent;
        if(text.toLowerCase().includes(searchValue)){
            l.style.display = '';
        }
        else{
            l.style.display = 'none';
        }
    })
})