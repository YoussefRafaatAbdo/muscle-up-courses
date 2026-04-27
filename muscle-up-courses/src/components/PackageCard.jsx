// src/components/PackageCard.jsx
export default function PackageCard({ title, price, features }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{price}</p>

      <ul style={{marginTop:'15px'}}>
        {features.map((item, i) => (
          <li key={i} style={{margin:'8px 0'}}>{item}</li>
        ))}
      </ul>

      <div style={{marginTop:'20px'}}>
        <button className="btn">اشترك الآن</button>
      </div>
    </div>
  );
}