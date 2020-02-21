let app = new Vue({
    el: '#app',
    
    data: {
        current_temp: '5',
        temp_log: {},
        threshold_violations: {},
    },
    created() {
        this.getTempLog();
        this.getViolationLog();
        this.getCurrentTemp();
    },
    methods: {
        async getTempLog() {
            try {
                const response = await(axios.get('http://192.168.1.204:8080/sky/cloud/787RXuWe35WneQegiagbpW/temperature_store/temperatures?'));
                this.temp_log = response.data;
            } catch(error) {
                console.log(error)
            }
        },
        async getViolationLog() {
            try {
                const response = await(axios.get('http://192.168.1.204:8080/sky/cloud/787RXuWe35WneQegiagbpW/temperature_store/threshold_violations?'));
                this.threshold_violations = response.data;
            } catch(error) {
                console.log(error);
            }
        },
        async getCurrentTemp() {
            try {
                const response = await(axios.get('http://192.168.1.204:8080/sky/cloud/787RXuWe35WneQegiagbpW/wovyn_base/current_temp?'));
                this.current_temp = response.data;
            } catch(error) {
                console.log(error);
            }
        }
    },
    watch: {

    },
    computed: {
        // current_temp = function() {
        //     try {
        //         const response = await(axios.get(''));
        //     } catch (error) {
        //         console.log(error);
        //     }
        //     return response.temperature;
        // }
        // temp_log = function() {
        //     try {
        //         const response = await(axios.get('http://192.168.1.204:8080/sky/cloud/787RXuWe35WneQegiagbpW/temperature_store/temperatures?'));
        //         return response;
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
    }
});