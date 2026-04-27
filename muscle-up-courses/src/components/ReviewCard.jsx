// src/components/ReviewCard.jsx
export default function ReviewCard({ name, text }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p style={{marginTop:'10px'}}>{text}</p>
    </div>
  );
}