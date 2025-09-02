// lib/mpesa.ts

import axios from "axios";

/**
 * Get M-Pesa access token
 */
export async function getAccessToken(): Promise<string> {
  const consumerKey = process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET;

  if (!consumerKey || !consumerSecret) {
    throw new Error("Missing MPESA_CONSUMER_KEY or MPESA_CONSUMER_SECRET");
  }

  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");

  try {
    const { data } = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      { headers: { Authorization: `Basic ${auth}` } }
    );
    return data.access_token;
  } catch (error: any) {
    console.error("M-Pesa Access Token Error:", error.response?.data || error.message);
    throw new Error("Failed to get M-Pesa access token");
  }
}

/**
 * Generate password for STK push
 */
export function generatePassword(shortcode: string, passkey: string, timestamp: string): string {
  return Buffer.from(`${shortcode}${passkey}${timestamp}`).toString("base64");
}

/**
 * Generate timestamp in yyyyMMddHHmmss format
 */
export function generateTimestamp(): string {
  return new Date().toISOString().replace(/[-T:\.Z]/g, "").slice(0, 14);
}
