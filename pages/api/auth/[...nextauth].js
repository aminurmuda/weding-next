import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";

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
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET,
        // }),
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
                return profile.email_verified && eligibleEmails.includes(profile.email)
            }
            return true
        },
        async jwt(token, account) {
            if (account?.accessToken) {
                token.accessToken = account.accessToken
            }
            return token;
        },
        redirect: async () => {
            return Promise.resolve('/forward')
        }
    }
}
export default NextAuth(authOptions)