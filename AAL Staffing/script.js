let labelHtml = tags.map(tag => {
    let color = tag.includes("Crew") ? "orange" : tag.includes("Pilot") ? "red" : "blue";
    return `<span class='label ${color}'>${tag}</span>`;
}).join(' ');
