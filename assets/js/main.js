function startCountdown(durationInSeconds) {
     const hoursElement = document.getElementById("hours");
     const minutesElement = document.getElementById("minutes");
     const secondsElement = document.getElementById("seconds");
     
     let remainingTime = durationInSeconds;
     
     function updateCountdown() {
         const hours = Math.floor(remainingTime / 3600);
         const minutes = Math.floor((remainingTime % 3600) / 60);
         const seconds = remainingTime % 60;
         
         updateWithAnimation(hoursElement, hours);
         updateWithAnimation(minutesElement, minutes);
         updateWithAnimation(secondsElement, seconds);
         
         remainingTime--;
         
         if (remainingTime >= 0) {
             setTimeout(updateCountdown, 1000);
         }
     }
     
     function updateWithAnimation(element, newValue) {
         const currentValue = element.textContent;
         const newValuePadded = String(newValue).padStart(2, "0");
         
         if (currentValue !== newValuePadded) {
             element.classList.add('dropping');
             element.textContent = newValuePadded;
             
             element.addEventListener('animationend', () => {
                 element.classList.remove('dropping');
             }, {once: true});
         }
     }
     
     updateCountdown();
 }

 startCountdown(24951);
