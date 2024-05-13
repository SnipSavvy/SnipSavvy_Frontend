import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
const handler = NextAuth({
    providers :[
        GoogleProvider({
            clientId : process.env.AUTH_GOOGLE_ID || '',
            clientSecret : process.env.AUTH_GOOGLE_SECRET || ''
        }),
        GithubProvider({
            clientId : process.env.GITHUB_ID || '',
            clientSecret : process.env.GITHUB_SECRET || ''

        })
    ]
  })
  
  export { handler as GET, handler as POST }

