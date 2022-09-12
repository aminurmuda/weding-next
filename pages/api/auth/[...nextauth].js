import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

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
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    jwt: {
        encryption: true,
        signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
    },
    secret: process.env.secret,
    callbacks: {
        async jwt(token, account) {
            if (account?.accessToken) {
                token.accessToken = account.accessToken
            }
            return token;
        },
        redirect: async (url, _baseUrl) => {
            if (url === '/profile') {
                return Promise.resolve('/forward')
            }
            return Promise.resolve('/forward')
        }
    }
}
export default NextAuth(authOptions)