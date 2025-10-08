export const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: 'lax',
    maxAge: 7*24*60*60*1000, // 7 × 24 = 168 - 168 × 60 = 10,080 - 10,080 × 60 = 604,800 - 604,800×1,000= 604,800,000 - This is milliseconds for 7 days.
}; // $env:NODE_ENV="development"