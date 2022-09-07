export default {
    name: 'Roar-App',
    version: process.env.CURR_VERSION || '1.0.0',
    extra: {
        baseUrl: process.env.BASE_URL
    },
    android: {
        package: 'com.enigma.myapp'
    }
}