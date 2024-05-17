const t0ken = '9QPP9mf3dwqlIv2j8jsdMMV5cTerGwVrMSYsND6OkxP0cgh4l05nXNqt9qerzrNSXR773yMmxjHhHhsN4NKPgCVWqHIcmdcCNaPvCEnTT081';

function extractValuesFromXml(xmlText) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    const items = xmlDoc.getElementsByTagName("EmbeddedDeviceViewModel");
    const values = [];
   
    for (let item of items) {
        const itemValues = [];
        const children = item.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            itemValues.push(child.textContent);
            // Stop parsing if the current tag is "SerialNumber"
            if (child.tagName === "SerialNumber") {
                break;
            }
        }
        values.push(itemValues.join(','));
    }
    return values.join(',');
}

function jsonToCsv(jsonText) {
    // Parse the JSON-like text
    const jsonData = JSON.parse(jsonText.substring(jsonText.indexOf('{')));

    // Extract keys from the first item to use as CSV headers
    const headers = Object.keys(jsonData.Items[0]);

    // Initialize CSV string with headers
    let csv = headers.join(',') + '\n';

    // Create a map to store fetched data with EmbeddedDeviceId as the key
    const fetchedDataMap = new Map();

    // Loop through each item and fetch data for each EmbeddedDeviceId
    const fetchPromises = jsonData.Items.map(item => {
        if (item.EmbeddedDeviceId) {
            return fetch(`https://eqcasv6-new/EQWebClient/systemmanager/api/devices/embedded/${item.EmbeddedDeviceId}`, {
                headers: {
                    "accept": "text/xml",
                    "accept-language": "en-US,en;q=0.9",
                    "cache-control": "no-cache",
                    "pragma": "no-cache",
                    "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-xsrf-token": t0ken
                },
                referrer: "https://eqcasv6-new/EQWebClient/Areas/WebSystemManagerUi/wwwroot/?ver=1132827321",
                referrerPolicy: "strict-origin-when-cross-origin",
                body: null,
                method: "GET",
                mode: "cors",
                credentials: "include"
            })
            .then(response => response.text())
            .then(data => {
                // Extract values from XML-like data
                const values = extractValuesFromXml(data);
                // Store fetched data in the map with EmbeddedDeviceId as the key
                fetchedDataMap.set(item.EmbeddedDeviceId, values);
            })
            .catch(error => console.error("Error fetching data:", error));
        } else {
            // If no EmbeddedDeviceId, add a message indicating no ID for the record
            fetchedDataMap.set(item.EmbeddedDeviceId, "No ID for this record");
            return Promise.resolve();
        }
    });

    // Wait for all fetch requests to complete
    return Promise.all(fetchPromises)
        .then(() => {
            // Loop through each item and generate CSV data
            jsonData.Items.forEach(item => {
                const values = headers.map(header => {
                    // Handle special characters and escape double quotes
                    let value = item[header];
                    if (typeof value === 'string') {
                        value = value.replace(/"/g, '""');
                        if (value.includes(',') || value.includes('\n')) {
                            value = `"${value}"`;
                        }
                    }
                    return value;
                });

                // Get the fetched data associated with the current item
                const fetchedData = fetchedDataMap.get(item.EmbeddedDeviceId);

                // Add fetched data to the CSV row
                csv += `${values.join(',')},${fetchedData}\n`;
            });

            return csv;
        });
}

// Fetch data from the provided URL
fetch("https://eqcasv6-new/EQWebClient/SystemManager/API/PhysicalDevices?vm.Sorting.Column=name&vm.Sorting.Ascending=true&vm.Paging.PageSize=500&vm.Paging.Page=0", {
    headers: {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-xsrf-token": t0ken
    },
    referrer: "https://eqcasv6-new/EQWebClient/Areas/WebSystemManagerUi/wwwroot/?ver=1132827321",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include"
})
.then(response => response.text())
.then(data => {
    // Convert JSON-like text to CSV
    return jsonToCsv(data);
})
.then(csvData => {
    // Log the CSV data to the console
    console.log("CSV Data:");
    console.log(csvData);
})
.catch(error => {
    console.error('Error:', error);
});
