import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      marginTop: '40px',
      padding: '20px',
      textAlign: 'center',
      borderTop: '1px solid #ddd',
      fontSize: '14px'
    }}>
      <Link to="/terms">Terms & Conditions</Link> |{" "}
      <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
      <Link to="/refund-policy">Cancellation & Refund</Link> |{" "}
      <Link to="/shipping-policy">Shipping Policy</Link> |{" "}
      <Link to="/contact-us">Contact Us</Link>
    </footer>
  );
}