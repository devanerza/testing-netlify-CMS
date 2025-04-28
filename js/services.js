fetch('/content/services')
  .then(response => response.json())
  .then(data => {
    const servicesContainer = document.querySelector('.services-grid');
    servicesContainer.innerHTML = data.map(service => `
      <div class="service-card">
        <div class="service-image" style="background-image: url('/images/uploads/${service.image}');"></div>
        <div class="service-content">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </div>
      </div>
    `).join('');
  });
