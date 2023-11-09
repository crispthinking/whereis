async function main() {
    const currentTab = await getCurrentTab();
    const url = currentTab.url;
    const data = await whereis(url);
    console.log(data);
    await addResults(data);
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

async function addResults(results) {
    const table_template = document.getElementById("result_table");
    const row_template = document.getElementById("result_row");
    document.getElementById("site_name").textContent = results.domain
    console.log(results);
    results.results.forEach(async (result) => {
        await addResult(result, table_template, row_template);
    })
}

async function addResult(result, table_template, row_template) {
    const table = table_template.content.firstElementChild.cloneNode(true);

    console.log(result);
    console.log(table);

    table.querySelector(".source").textContent = `${result.source}: ${result.input}`;
    await addFieldsToTable(result.fields, table, row_template);

    document.getElementById("results").appendChild(table);
}

async function addFieldsToTable(fields, table, row_template) {
    fields.forEach(async (field) => {
        await addFieldToTable(field, table, row_template)
    })
}

async function addFieldToTable(field, table, row_template) {
    console.log(field)
    console.log(row_template)
    const row = row_template.content.firstElementChild.cloneNode(true);
    row.querySelector(".name").textContent = field.name;
    row.querySelector(".value").textContent = field.value;
    table.querySelector(".results_table").appendChild(row);
}


const demo_data = {
    "domain": "bbc.co.uk",
    "results": [
        {
            "source": "whois",
            "input": "bbc.co.uk",
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
}


async function whereis(url) {
    var domain = (new URL(url)).hostname;
    var whois = await getWhoIsData(domain);
    console.log(whois);
    return demo_data;
}

async function getWhoIsData(url) {
    return await fetch('https://who.is/whois/' + url, {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function (response) { return response.text(); })
}

async function getGeoIpData(ipAdress, token) {
    return await fetch('https://geoip.maxmind.com/geoip/v2.1/city/' + ipAdress + '?demo=1', {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then(function (response) { return response.json(); })
}



await main();
