window.fetch("https://api.covid19api.com/summary")
.then(data =>{
    data.json()
    .then((covid) =>{
        console.log(covid.Global);
        let Global=covid.Global;
        document.getElementById("covidBlock").innerHTML=`
        <section id="allcovidResuts">
        <div class="div1">
            <h3>TotalConfirmed </h3>
            <h2 class="totalCon">${Global.TotalConfirmed}</h2>
        </div>
        <div class="div2">
           <h3> TotalDeaths </h3>
            <h2 class="totalCon">${Global.TotalDeaths}</h2>
       </div>
       <div class="div3">
           <h3>NewConfirmed </h3>
            <h2 class="totalCon">${Global.NewConfirmed}</h2>
       </div>
       <div class="div4">
           <h3>NewDeaths </h3>
            <h2 class="totalCon">${Global.NewDeaths}</h2>
       </div>
       <div class="div5">
           <h3>NewRecovered </h3>
            <h2 class="totalCon">${Global.NewRecovered}</h2>
       </div>
       <div class="div6">
           <h3>TotalRecovered </h3>
            <h2 class="totalCon">${Global.TotalRecovered}</h2>
       </div>
       </div>
        </section>`;

    })
    .catch(err=>{
        console.log(err)
    });
})
.catch(err =>{
    console.log(err)
});