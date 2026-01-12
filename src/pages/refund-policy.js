export default function RefundPolicy() {
  return (
    <main style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>
      <h1>Cancellation & Refund Policy</h1>

      <iframe
        src="https://merchant.razorpay.com/policy/S2KjQ8ckWXnkCw/refund"
        title="Refund Policy"
        width="100%"
        height="1200"
        style={{ border: "none" }}
      />
    </main>
  );
}