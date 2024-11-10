function Card({ imageUrl, cardTitle, cardDescription }) {
    return `
      <div class="card">
        <img src="${imageUrl}" alt="Card Image" class="card-img" />
        <div class="card-content">
          <h3>${cardTitle}</h3>
          <p>${cardDescription}</p>
        </div>
      </div>
    `;
  }
  