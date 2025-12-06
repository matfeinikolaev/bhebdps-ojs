async function getData() {
    const loader = document.getElementById('loader');
    loader.classList.add('loader_active');
    const response = await fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses", {method: "GET"});
    
    loader.classList.remove('loader_active');
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    const items = document.getElementById('items');
    
    Object.values(result.response.Valute).forEach(curr => {
        const item = document.createElement('div');
        items.appendChild(item);
        item.classList.add('item');

        const item__code = document.createElement('div');
        item.appendChild(item__code);
        const item__value = document.createElement('div');
        item.appendChild(item__value);
        const item__currency = document.createElement('div');
        item.appendChild(item__currency);

        item__code.classList.add('item__code');
        item__code.innerHTML = curr.CharCode;

        item__value.classList.add('item__value');
        item__value.innerHTML = curr.Value;

        item__currency.classList.add('item__currency');
        item__currency.innerHTML = "руб.";
    })
    
}


getData()