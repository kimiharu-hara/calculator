let result = document.getElementById("result");

/*数字の追加*/
function edit(elem) {
      result.value = result.value + elem.value;
    }
    
/*クリア（AC)ボタン*/
function ac() {
    result.value="";
}

/*計算（＝）ボタン*/    
function calculation() {
    result.value = new Function("return " + result.value)()
    }
    
