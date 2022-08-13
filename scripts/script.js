

cal_portion = document.querySelector('.cal__portion');
result__portion = document.querySelector('.result__portion')
window.onclick = e => {
    btn_text = e.target.innerHTML;
    if(btn_text == 'C'){
        cal_portion.innerHTML = '0'
        result__portion.innerHTML = '0'
        return
    }else if(btn_text == '='){
        try{
            result = eval(cal_portion.innerHTML);
            result__portion.innerHTML = result;
        }catch (e){
            console.log(e)
            result__portion.innerHTML = 'Error'
        }

    }else if(e.target.tagName == 'P'){
        if(cal_portion.innerHTML.trim() == "0"){
            cal_portion.innerHTML = ''
        }
        cal_portion.innerHTML = cal_portion.innerHTML + btn_text
    }
}