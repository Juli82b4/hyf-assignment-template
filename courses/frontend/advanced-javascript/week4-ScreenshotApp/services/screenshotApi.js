const API_KEY = "558054aa5cmshe6d9429dea93144p19c5a9jsn0e627b9e77a6";

export async function fetchScreenshot(url) {
    const res = await fetch(
        `https://website-screenshot6.p.rapidapi.com/screenshot?url=${encodeURIComponent(url)}&width=1920&height=1080`,
        {
            headers: {
                "x-rapidapi-key": API_KEY,
                "x-rapidapi-host": "website-screenshot6.p.rapidapi.com"
            }
        }
    );

    const data = await res.json();

    if (!res.ok) {
        console.log("API ERROR:", data);
        throw new Error(data.message || "API failed");
    }

    return data.screenshotUrl;
}