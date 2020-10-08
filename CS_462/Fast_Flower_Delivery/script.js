    <script>
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                vars[key] = value;
            });
            console.log("qrcode: ", vars["qrcode"])
            document.body.innerHTML = '<img src="' + vars["qrcode"] + '">'
    </script>
