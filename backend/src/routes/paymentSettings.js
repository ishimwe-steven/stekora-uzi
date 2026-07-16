import express from "express";

const router = express.Router();

function normalizeRwandaWhatsAppNumber(value) {
  let number = String(value || "").replace(/\D/g, "");

  if (number.startsWith("0") && number.length === 10) {
    number = `250${number.slice(1)}`;
  }

  if (number.startsWith("2500")) {
    number = `250${number.slice(4)}`;
  }

  return number;
}

router.get("/", (_req, res) => {
  const momoNumber = String(
    process.env.MOMO_NUMBER || ""
  ).trim();

  const momoAccountName = String(
    process.env.MOMO_ACCOUNT_NAME || ""
  ).trim();

  const whatsappNumber = normalizeRwandaWhatsAppNumber(
    process.env.WHATSAPP_NUMBER
  ); 
  console.log("==================================");
  console.log("MOMO:", process.env.MOMO_NUMBER);
  console.log("WHATSAPP RAW:", process.env.WHATSAPP_NUMBER);
  console.log("WHATSAPP NORMALIZED:", whatsappNumber);
  console.log("==================================");

  if (!momoNumber || !momoAccountName || !whatsappNumber) {
    return res.status(503).json({
      message: "Payment settings are not fully configured",
    });
  }

  res.json({
    payment_method: "MTN Mobile Money",
    momo_number: momoNumber,
    momo_account_name: momoAccountName,
    whatsapp_number: whatsappNumber,
  });
});

export default router;