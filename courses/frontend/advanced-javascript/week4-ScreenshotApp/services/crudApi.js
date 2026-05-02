const KEY = "screenshots";

export async function saveScreenshot(data) {
    const list = JSON.parse(localStorage.getItem(KEY)) || [];

    const item = {
        _id: crypto.randomUUID(),
        url: data.url,
        imageUrl: data.imageUrl
    };

    list.push(item);
    localStorage.setItem(KEY, JSON.stringify(list));

    return item;
}

export async function getScreenshots() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export async function deleteScreenshot(id) {
    const list = JSON.parse(localStorage.getItem(KEY)) || [];
    const updated = list.filter(item => item._id !== id);

    localStorage.setItem(KEY, JSON.stringify(updated));
}