let haveli_ip = document.getElementById('haveli');
let awp = document.getElementById('awp');
let automix = document.getElementById('automix');
let tooltip = document.getElementById('tooltip');

let serverIpElements = document.querySelectorAll('.ip');

serverIpElements.forEach(function (element) {
    element.addEventListener('click', function () {
        let ipAddress = element.getAttribute('data-ip');
        navigator.clipboard.writeText(ipAddress).then(function () {
            tooltip.style.display = 'block';
            let elementRect = element.getBoundingClientRect();
            let tooltipHeight = tooltip.offsetHeight;
            tooltip.style.top = (elementRect.top + 22) + 'px';
            tooltip.style.left = (elementRect.left - elementRect.width / 2 - tooltip.offsetWidth / 2) + 'px';
            setTimeout(function () {
                tooltip.style.display = 'none';
            }, 2000);
        }).catch(function (err) {
            console.error('Failed to copy: ', err);
        });
    });
});