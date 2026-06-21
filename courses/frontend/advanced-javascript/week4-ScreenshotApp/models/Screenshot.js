export class Screenshot {
    constructor(url, imageUrl) {
        this.url = url;
        this.imageUrl = imageUrl;
    }

    render(container) {
        container.innerHTML = `
            <p>${this.url}</p>
            <img src="${this.imageUrl}" width="400"/>
        `;
    }
}