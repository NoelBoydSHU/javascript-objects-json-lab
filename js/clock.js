(function(){ 
    const myNode = document.createElement("div"); //dynamically adding a div through JavaScript
    digitalClock.appendChild(myNode);             //adding a digital clock
    const secondHand = document.getElementById("secondHand");
    const minHand = document.getElementById("minHand");
    const hrHand = document.getElementById("hrHand");

    const updateTime = () => {
        const myDate = new Date();
        myNode.innerHTML = myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        
        const seconds = myDate.getSeconds();
        const rotSeconds = seconds * 6 - 90;
        secondHand.style.transform = `rotate(${rotSeconds}deg)`;

        const minutes = myDate.getMinutes();
        const rotMinutes = minutes * 6 - 90;
        minHand.style.transform = `rotate(${rotMinutes}deg)`;

        const hours = myDate.getHours() % 12;
        const rotHours = hours * 30 + minutes * 0.5 -90;
        hrHand.style.transform = `rotate(${rotHours}deg`;
    };
    setInterval(updateTime, 1000);
    updateTime();




})();