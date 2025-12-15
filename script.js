function LoadData(url){
            var http =  new XMLHttpRequest();
        http.onreadystatechange = function (){
                if(this.readyState === 4 && this.status === 200 ){
                        document.getElementById("main-sec").innerHTML=this.responseText;
                }
            }
            http.open('GET',url,true);
            http.send();
        }


        function LoadData1(url){
            var http =  new XMLHttpRequest();
            http.onreadystatechange = function (){
                if(this.readyState === 4 && this.status === 200 ){
                        document.getElementById("main-sec").innerHTML=this.responseText;
                }
            }
            http.open('GET',url,true);
            http.send();
        }


        function LoadData2(url){
            var http =  new XMLHttpRequest();
            http.onreadystatechange = function (){
                if(this.readyState === 4 && this.status === 200 ){
                        document.getElementById("service-desc").innerHTML=this.responseText;
                }
            }
            http.open('GET',url,true);
            http.send();
        }

        function LoadData3(url){
            var http =  new XMLHttpRequest();
            http.onreadystatechange = function (){
                if(this.readyState === 4 && this.status === 200 ){
                        document.getElementById("service-desc").innerHTML=this.responseText;
                }
            }
            http.open('GET',url,true);
            http.send();
        }

                function LoadData4(url){
            var http =  new XMLHttpRequest();
            http.onreadystatechange = function (){
                if(this.readyState === 4 && this.status === 200 ){
                        document.getElementById("main-sec").innerHTML=this.responseText;
                }
            }
            http.open('GET',url,true);
            http.send();
        }

        // function LoadData5(url){
        //     var http =  new XMLHttpRequest();
        //     http.onreadystatechange = function (){
        //         if(this.readyState === 4 && this.status === 200 ){
        //                 document.getElementById("main-sec").innerHTML=this.responseText;
        //         }
        //     }
        //     http.open('GET',url,true);
        //     http.send();
        // }

        



// const pic = document.querySelector('.pic');
// const pic1 = document.querySelector('.pic1');

// pic1.addEventListener('mouseover',()=>{
//         pic1.style.backgroundImage = "url('image/Babu-bhai1.jpg')";
//         pic1.style.backgroundSize = "cover";
//         pic1.style.backgroundRepeat = "no-repeat";
//         pic1.style.backgroundPosition = "center";
// })

// pic1.addEventListener('mouseout',()=>{
//         pic1.style.backgroundImage = "";
  
// })




    // const text = "M-Tech , B-Tech , Diploma , Science , Arts  Books ";
 const words = ["M-Tech ", "B-Tech", "Diploma", "Science", "Arts "];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 150; // typing speed
    const eraseSpeed = 100; // erasing speed
    const delayBetweenWords = 1000; // pause before erasing

    function typeWriter() {
      const output = document.getElementById("output");
      const currentWord = words[wordIndex];

      if (!isDeleting && charIndex < currentWord.length) {
        // typing forward
        output.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeWriter, speed);
      } else if (isDeleting && charIndex > 0) {
        // erasing backward
        output.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWriter, eraseSpeed);
  } else {
        if (!isDeleting) {
          // pause before erasing
          isDeleting = true;
          setTimeout(typeWriter, delayBetweenWords);
        } else {
          // move to next word
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeWriter, speed);
        }
      }
    }

    // Start typing
    typeWriter();






    const button =document.querySelector('.pdf-btn');
    button.style.display = 'none';
   function showPDF() {
    
      document.getElementById('pdfViewer').style.display = 'block';
    
    }

 
