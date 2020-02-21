let app = new Vue({
    el: '#app',
    
    data: {
        name: '',
        phone: '',
        location: '',
        threshold: '',
        update_name: '',
        update_location: '',
        update_phone: '',
        update_threshold: ''
    },
    created() {
        this.loadProfile();
    },
    methods: {
        async loadProfile() {
            try {
                const response = await(axios.get('http://192.168.1.204:8080/sky/cloud/787RXuWe35WneQegiagbpW/sensor_profile/getProfile?'))
                this.name = response.data.name;
                this.phone = response.data.phone;
                this.location = response.data.location;
                this.threshold = response.data.threshold;
            } catch (error) {
                console.log(error);
            }
        },
        async updateProfile() {
            try {
                await(axios.post('http://192.168.1.204:8080/sky/event/787RXuWe35WneQegiagbpW/none/sensor/profile_updated?name='
                                + this.update_name + 
                                '&location=' + this.update_location + 
                                '&phone=' + this.update_phone + 
                                '&threshold=' + this.update_threshold))
            } catch(error) {
                console.log(error);
            }
            this.loadProfile();
        }
    }
});