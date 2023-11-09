demo_data = [
    {
        "source": "whois",
        "input": "https://bbc.co.uk/",
        "fields": [
            {
                "name": "IP Address",
                "value": "1.1.1.1"
            },
            {
                "name": "Registrar",
                "value": "RegisterMe"
            }
        ]
    },
    {
        "source": "maxmind",
        "input": "1.1.1.1",
        "fields": [
            {
                "name": "Country",
                "value": "United Kingdom"
            },
            {
                "name": "Region",
                "value": "London"
            }
        ]
    }
]


async function main() {
    const currentTab = await getCurrentTab();
    const url = currentTab.url;
}

async function whereis(url) {
    return demo_data
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
