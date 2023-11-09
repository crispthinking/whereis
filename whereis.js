const demo_data = [
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


export async function whereis(url) {
    return demo_data;
}
