function submit(){
    scort=0;
    for(i=0;i<4;i++){
        for(j=0;j<3;j++){
            qustion=document.forms[i].elements[j];
            if((qustion.value=='true')&&(qustion.checked==true)){
                scort+=1;
            }
        }
    }
    alert('you get '+scort+'/4');
}
