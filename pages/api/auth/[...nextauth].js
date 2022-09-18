import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
    ],
    jwt: {
        encryption: true,
        signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
    },
    secret: process.env.secret,
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                const eligibleEmails = process.env.VALID_EMAILS
                const isEligible = eligibleEmails.includes(profile.email)
                if (profile.email_verified && isEligible) {
                    return true
                }

            }
            return true
        },
        async jwt({ token, account }) {
            if (account?.accessToken) {
                token.accessToken = account.accessToken
            }
            return token;
        },
        async redirect() {
            return Promise.resolve('/forward')
        }
    }
}
export default NextAuth(authOptions)