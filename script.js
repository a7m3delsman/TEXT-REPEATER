const novalueDiv = document.getElementById('novalueDiv');
function repeatText() {
    var text = document.getElementById("text-input").value;
    var repeatCount = parseInt(document.getElementById("repeat-input").value);
    var separator = "";
   
    var spaceRadio = document.getElementById("space-radio");
    var newlineRadio = document.getElementById("newline-radio");
    var noSeparatorRadio = document.getElementById("no-separator-radio");
    if (text.trim() === "") {
      novalueDiv.innerHTML = 'Please fill out the text field';
      novalueDiv.style.color ='gold'
      novalueDiv.style.fontSize = '25px';
      novalueDiv.style.fontFamily = 'Franklin Gothic Medium';
      novalueDiv.style.marginTop='25px';
      novalueDiv.style.display="block"
        hidetextarea("output");
        hideButton("copyButton");
        return; // إيقاف تنفيذ العملية في حالة عدم إدخال النص
      }
    
      else if (repeatCount <= 0 ) {
        novalueDiv.innerHTML = 'Please enter a valid occurrence number';
        novalueDiv.style.color ='gold'
        novalueDiv.style.fontSize = '25px';
        novalueDiv.style.fontFamily = 'Franklin Gothic Medium';
        novalueDiv.style.marginTop='25px';
        novalueDiv.style.display="block"
        hidetextarea("output");
        hideButton("copyButton");
        return; // إيقاف تنفيذ العملية في حالة إدخال عدد تكرار غير صحيح
      }
     
      else{
        novalueDiv.style.display = "none";
        nohideButton("copyButton");
        nohidetextarea ("output");
      }

    if (spaceRadio.checked) {
        
      separator = " ";
    } else if (newlineRadio.checked) {
      separator = "\n";
    }

    var outputTextarea = document.getElementById("output");
    outputTextarea.value = ""; // إفراغ المحتوى السابق

    for (var i = 0; i < repeatCount; i++) {
      outputTextarea.value += text + separator;
    }

    if (noSeparatorRadio.checked) {
      // إزالة الفاصل الأخير إذا تم تحديد خيار "بدون فصل"
      outputTextarea.value = outputTextarea.value.trim();
    }
  }

  function copyText() {
    var outputTextarea = document.getElementById("output");
    outputTextarea.select();
    document.execCommand("copy");
    let copyButton = document.getElementById("copyButton");
copyButton.textContent = "Copied!";
setTimeout(function() {
  copyButton.textContent = "Copy Text";
}, 2000);
  }
  // استدعاء الدالة عند تغيير حالة أي radio button
var radioButtons = document.getElementsByName("separator");
for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("change", updateLabelColor);
}

// دالة لتحديث لون الـ label استنادًا إلى حالة الـ radio button المحدد
function updateLabelColor() {
  var spaceLabel = document.getElementById("space");
  var newlineLabel = document.getElementById("newline");
  var noSeparatorLabel = document.getElementById("no-separator");

  if (document.getElementById("space-radio").checked) {
    spaceLabel.style.color = "lightgreen";
    newlineLabel.style.color = "";
    noSeparatorLabel.style.color = "";
  } else if (document.getElementById("newline-radio").checked) {
    spaceLabel.style.color = "";
    newlineLabel.style.color = "lightgreen";
    noSeparatorLabel.style.color = "";
  } else if (document.getElementById("no-separator-radio").checked) {
    spaceLabel.style.color = "";
    newlineLabel.style.color = "";
    noSeparatorLabel.style.color = "lightgreen";
  }
}
////////
function nohidetextarea(textareaId) {
    var textarea = document.getElementById(textareaId);
    if (textarea) {
      textarea.style.display = "inline";
      
    }
  }
  function nohideButton(buttonId) {
    var button = document.getElementById(buttonId);
    if (button) {
       
      button.style.display = "inline";
    }
  }
  function hidetextarea(textareaId) {
    var textarea = document.getElementById(textareaId);
    if (textarea) {
      textarea.style.display = "none";
      
    }
  }
  function hideButton(buttonId) {
    var button = document.getElementById(buttonId);
    if (button) {
       
      button.style.display = "none";
    }
  }
   var audio = new Audio('button-click.mp3');
  function playClickSound() {
      clickSound.currentTime = 0;
      clickSound.play();
    }
    