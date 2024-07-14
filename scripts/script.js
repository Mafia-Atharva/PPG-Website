document.addEventListener('DOMContentLoaded', function () {
    let serverIpElements = document.querySelectorAll('.ip');

    serverIpElements.forEach(function (element) {
        let tooltip = element.nextElementSibling;

        element.addEventListener('mouseover', function (event) {
            if (tooltip) {
                tooltip.textContent = 'Click to copy IP';
                let rect = element.getBoundingClientRect();
                let tooltipLeft = rect.left + rect.width/3-20;
                let tooltipTop = rect.top - tooltip.offsetHeight - 93; 
                tooltip.style.left = `${tooltipLeft}px`;
                tooltip.style.top = `${tooltipTop}px`;
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            }
        });

        element.addEventListener('mouseout', function (event) {
            if (tooltip) {
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = '0';
            }
        });

        element.addEventListener('click', function (event) {
            let ipAddress = element.getAttribute('data-ip');
            navigator.clipboard.writeText(ipAddress).then(function () {
                if (tooltip) {
                    tooltip.textContent = 'IP copied!';
                    setTimeout(function () {
                        tooltip.textContent = 'Click to copy IP';
                    }, 1000);
                }
            }).catch(function (err) {
                console.error('Failed to copy: ', err);
                alert('Failed to copy IP address. Please try again.');
            });
        });
    });
});