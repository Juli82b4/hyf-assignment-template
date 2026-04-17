import { fetchScreenshot } from "./services/screenshotApi.js";
import { saveScreenshot, getScreenshots } from "./services/crudApi.js";
import { Screenshot } from "./models/Screenshot.js";
import { SavedScreenshot } from "./models/SavedScreenshot.js";
import { ValidationError, AppError } from "./errors/errors.js";

const urlInput = document.getElementById("urlInput");
const preview = document.getElementById("preview");
const savedList = document.getElementById("savedList");
const errorEl = document.getElementById("error");

let current = null;

// show error //
function showError(err) {
    if (err instanceof AppError) {
        errorEl.textContent = err.toUserMessage();
    } else {
        errorEl.textContent = "Something went wrong";
    }
}

// generate screenshot //
document.getElementById("generateBtn").addEventListener("click", async () => {
    try {
        errorEl.textContent = "";

        const url = urlInput.value.trim();

        if (!url || !url.startsWith("http")) {
            throw new ValidationError("Enter a valid URL");
        }

        const imageUrl = await fetchScreenshot(url);

        current = new Screenshot(url, imageUrl);
        current.render(preview);

    } catch (err) {
        showError(err);
    }
});

// save screenshot //
document.getElementById("saveBtn").addEventListener("click", async () => {
    try {
        if (!current) {
            throw new ValidationError("No screenshot to save");
        }

        const saved = await saveScreenshot(current);

        new SavedScreenshot(saved.url, saved.imageUrl, saved._id)
            .render(savedList);

    } catch (err) {
        showError(err);
    }
});

// load saved //
async function init() {
    try {
        const data = await getScreenshots();

        data.forEach(item => {
            new SavedScreenshot(item.url, item.imageUrl, item._id)
                .render(savedList);
        });

    } catch (err) {
        showError(err);
    }
}

init();