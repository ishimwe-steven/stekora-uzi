import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  const momoNumber = String(process.env.MOMO_NUMBER || "").trim();
  const momoAccountName = String(
    process.env.MOMO_ACCOUNT_NAME || ""
  ).trim();
  const whatsappNumber = String(
    process.env.WHATSAPP_NUMBER || ""
  ).replace(/\D/g, "");

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