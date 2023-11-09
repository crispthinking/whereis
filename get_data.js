
async function getWhoIsData(url) {
    fetch('https://who.is/whois/' + url, {
        method: "GET", mode: 'cors',
        headers: {
            'Accept': 'application/json'
        }
    }).then(function (response) { return response.text(); })
}

async function getGeoIpData(ipAdress, token) {
    fetch('https://geoip.maxmind.com/geoip/v2.1/city/' + ipAdress + '?demo=1', {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then(function (response) { return response.json(); })
}

const xpath = '//div[@class="row queryResponseBodyRow"]//div[@class="col-md-8 queryResponseBodyValue"]//a'
