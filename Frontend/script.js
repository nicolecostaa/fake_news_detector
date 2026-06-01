async function analyzenws() {

    const text = document.getElementById("news").value;

    if(text.trim ()==="") {
        alert?("Digite uma notícia.");
        return;
    
    }  

    const resultDiv =document.getElementById("result");

    resultDiv.innerHTML =
    <div class="loading">
        🧠 IA analisando notícia...
    </div>
    ;

    try {
         
        const response = await fetch(
            "http://127.0.0.1:5000/predict",
        {  
            method: "POST",

            headers: {
                "Content-type": "application/json"
            } ,

            body: JSON.stringify({
                text: text
            })
        }

     );

     const data = await response.json();

     if(data.error) {

        resultDiv.innerHTML = `
            <div class="result-title fake">
                ❌ Erro
            </div>

            <p>${data.error}</p>
        `;

       return;

  }
