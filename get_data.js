
async function getWhoIsData(url) {
    fetch('https://who.is/whois/' + url, {
   headers: {
      'Accept': 'application/json'
   }
}).then(function(response) {return response.text();})
}

async function getGeoIpData(ipAdress, token) {
    fetch('https://geoip.maxmind.com/geoip/v2.1/city/'+ ipAdress + '?demo=1', {
   headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
   }
}).then(function(response) {return response.json();})
}

