import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GIT_ID,
      clientSecret: process.env.GIT_SECRET,
    }),
  ],
});
