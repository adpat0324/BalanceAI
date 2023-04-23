chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "testAlarm") {
        chrome.notifications.create('test', {
            type: 'basic',
            iconUrl: 'images/1.png',
            title: 'Test Message',
            message: 'You are awesome!',
            priority: 2
        });
    }
 });