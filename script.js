//Pass the id of the <input> element to be copied as a parameter to the copy()

let copy = (textId) => {
  //Selects the text in the <input> elemet
  document.getElementById(textId).select();
  //Copies the selected text to clipboard
  document.execCommand("copy");
};


// script.js for read more read less
		function changeReadMore() {
			const mycontent =
				document.getElementById('mybox1id');
			const mybutton =
				document.getElementById('mybuttonid');
			const span1 = document.getElementById("span1")

			if (mycontent.style.display === 'none'
				|| mycontent.style.display === '') {
				mycontent.style.display = 'inline';
				span1.style.display = "none";
				mybutton.textContent = 'Read Less';
			} else {
				mycontent.style.display = 'none';
				mybutton.textContent = 'Read More';
				span1.style.display = "inline";
			}
		}




   function changeReadMore1() {
    const mycontent =
        document.getElementById('mybox1id1');
    const mybutton =
        document.getElementById('mybuttonid1');
    const span1 = document.getElementById("span2")

    if (mycontent.style.display === 'none'
        || mycontent.style.display === '') {
        mycontent.style.display = 'inline';
        span1.style.display = "none";
        mybutton.textContent = 'Read Less';
    } else {
        mycontent.style.display = 'none';
        mybutton.textContent = 'Read More';
        span2.style.display = "inline";
    }
}



    function myFunction() {
		  var dots = document.getElementById("dots");
		  var moreText = document.getElementById("more");
		  var btnText = document.getElementById("myBtn");

		  if (dots.style.display === "none") {
			dots.style.display = "inline";
			btnText.innerHTML = "Read more"; 
			moreText.style.display = "none";
		  } else {
			dots.style.display = "none";
			btnText.innerHTML = "Read less"; 
			moreText.style.display = "inline";
		  }
		}
		
		
		 function changeReadMore2() {
			const mycontent =
				document.getElementById('mybox1id2');
			const mybutton =
				document.getElementById('mybuttonid2');
			const span1 = document.getElementById("span3")

			if (mycontent.style.display === 'none'
				|| mycontent.style.display === '') {
				mycontent.style.display = 'inline';
				span3.style.display = "none";
				mybutton.textContent = 'Read Less';
			} else {
				mycontent.style.display = 'none';
				mybutton.textContent = 'Read More';
				span3.style.display = "inline";
			}
		}
			 
