MaskUtils.js



export const maskAadhaar = aadhaar =>
    aadhaar ? `XXXX-XXXX-${aadhaar.slice(-4)}` : "";

export const maskPan = pan =>
    pan ? `${pan.slice(0, 5)}****` : "";