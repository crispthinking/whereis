async function main() {
    const currentTab = await getCurrentTab();
    const url = currentTab.url;
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

async function addResults(results) {
    const template = document.getElementById("result_template");
    Object.keys(results).forEach(async (result) => {
        await addResult(result, template);
    })
}

async function addResult(result, template) { }

await main();
