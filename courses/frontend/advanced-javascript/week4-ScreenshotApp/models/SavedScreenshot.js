import { Screenshot } from "./Screenshot.js";
import { deleteScreenshot } from "../services/crudApi.js";

export class SavedScreenshot extends Screenshot {
    constructor(url, imageUrl, id) {
        super(url, imageUrl);
        this.id = id;
    }

    render(container) {
        const div = document.createElement("div");

        div.innerHTML = `
            <p>${this.url}</p>
            <img src="${this.imageUrl}" width="300"/>
            <button>Delete</button>
        `;

        div.querySelector("button").addEventListener("click", async () => {
            await deleteScreenshot(this.id);
            div.remove();
        });

        container.appendChild(div);
    }
}